package IBM.controller;

import IBM.entity.Company;
import IBM.entity.StockPriceDetail;
import IBM.service.ICompanyService;
import IBM.service.IStockPriceDetailService;
import com.alibaba.fastjson.JSON;
import com.alibaba.fastjson.JSONArray;
import com.alibaba.fastjson.JSONObject;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.Calendar;
import java.util.Date;
import java.util.List;

@CrossOrigin(value = "http://localhost:4200")
@Slf4j
@RestController
public class CompanyController {

    @Autowired
    private ICompanyService companyService;

    @Autowired
    private IStockPriceDetailService stockPriceDetailService;

    public CompanyController(ICompanyService companyServiceImpl, IStockPriceDetailService stockPriceDetailServiceImpl){
        this.companyService = companyServiceImpl;
        this.stockPriceDetailService = stockPriceDetailServiceImpl;
    }

    @GetMapping(value = "/list")
    public JSONObject getCompanyList(){
        JSONObject jsonObject = new JSONObject();
        JSONArray jsonArray = new JSONArray();

        List<Company> companies = this.companyService.getCompanyList();
        for(Company company : companies){
            String logo = company.getLogo();
            String companyName = company.getCompanyName();
            String CEO = company.getCEO();
            String boardChairman = company.getBoardChairman();
            BigDecimal turnOver = company.getTurnover();
            String sector = company.getSector();
            String briefWriteup = company.getBriefWriteup();
            BigDecimal currentPrice = stockPriceDetailService.findCurrentPriceByCompanyCode(company.getStockCode());

            JSONObject dataJson = new JSONObject();
            dataJson.put("logo", logo);
            dataJson.put("companyName", companyName);
            dataJson.put("CEO", CEO);
            dataJson.put("boardChairman", boardChairman);
            dataJson.put("turnOver", turnOver);
            dataJson.put("sector", sector);
            dataJson.put("briefWriteup", briefWriteup);
            dataJson.put("currentPrice", currentPrice);
            jsonArray.add(dataJson);
        }
        jsonObject.put("companies", jsonArray);
        return jsonObject;
    }

    @PostMapping(value = "/new")
    public JSONObject createNewCompany(@RequestBody JSONObject companyJson) throws Exception{
        JSONObject jsonObject = new JSONObject();
        Company company = new Company();
        company.setCompanyName(companyJson.getString("companyName"));
        company.setCEO(companyJson.getString("CEO"));
        company.setBoardChairman(companyJson.getString("boardChairman"));
        company.setTurnover(companyJson.getBigDecimal("turnover"));
        company.setSector(companyJson.getString("serctor"));
        company.setBriefWriteup(companyJson.getString("briefWriteup"));
        company.setLogo(companyJson.getString("logo"));

        Company retCompany = companyService.createNewCompany(company);
        if(retCompany !=null ){
            jsonObject.put("data","success");
        }else{
            jsonObject.put("data", "fail");
        }
        return jsonObject;
    }

    @PostMapping(value = "/search")
    public JSONObject searchCompany(@RequestBody JSONObject companyJson){
        JSONObject jsonObject = new JSONObject();
        JSONArray jsonArray = new JSONArray();
        String companySearchTxt = companyJson.getString("companySearchTxt");
        List<Company> companies = companyService.searchCompany(companySearchTxt);

        for(Company company : companies){
            String companName = company.getCompanyName();
            String CEO = company.getCEO();
            String boardChairman = company.getBoardChairman();
            BigDecimal turnover = company.getTurnover();
            String sector = company.getSector();
            String briefWriteup = company.getBriefWriteup();
            String logo = company.getLogo();
            JSONObject dataJson = new JSONObject();
            dataJson.put("companyName", companName);
            dataJson.put("CEO", CEO);
            dataJson.put("boardChairman", boardChairman);
            dataJson.put("turnOver", turnover);
            dataJson.put("sector", sector);
            dataJson.put("briefWriteup", briefWriteup);
            dataJson.put("logo", logo);
            jsonArray.add(dataJson);
        }
        jsonObject.put("companies",jsonArray);
        return jsonObject;
    }

    @PostMapping(value = "/compare")
    public JSONObject compareCompany(@RequestBody JSONObject stockPriceDetailJson){
        JSONObject jsonObject = new JSONObject();
        JSONArray jsonArray = new JSONArray();
        String companyName = stockPriceDetailJson.getString("companyName");
        String stockExchangeName = stockPriceDetailJson.getString("stockExchangeName");

        Date fromPeriod = stockPriceDetailJson.getDate("fromPeriod");
        Date toPeriod = stockPriceDetailJson.getDate("toPeriod");
        String periodSize = stockPriceDetailJson.getString("periodSize");
        String periodUnit = stockPriceDetailJson.getString("periodUnit");

        List<Date> timeline = getTimeline(fromPeriod, toPeriod, periodSize, periodUnit);
        List<StockPriceDetail>  stockPriceDetails = stockPriceDetailService.retrieveStockPriceDetails(companyName,stockExchangeName);
        for (StockPriceDetail stockPriceDetail : stockPriceDetails){
             java.sql.Date currentDate = stockPriceDetail.get_date();
             java.sql.Time currentTime = stockPriceDetail.get_time();
             BigDecimal currentPrice = stockPriceDetail.getCurrentPrice();

             JSONObject dataJson = new JSONObject();
             dataJson.put("currentDate", currentDate.toString());
             dataJson.put("currentTime", currentTime.toString());
             dataJson.put("currentPrice", currentPrice);
             jsonArray.add(dataJson);
        }
        jsonObject.put("stockPriceDetails", jsonArray);
        return jsonObject;
    }

    @PostMapping(value = "/name")
    public JSONObject getCompanyNameByCompanyCode(@RequestBody JSONObject companyJson){
        JSONObject jsonObject = new JSONObject();
        String companyCode = companyJson.getString("companyCode");
        Company company = companyService.findCompanyByStockCode(companyCode);
        jsonObject.put("companyName", company.getCompanyName());
        return jsonObject;
    }


    private List<Date> getTimeline(Date fromPeriod, Date toPeriod, String periodSize, String periodUnit) {
        Calendar calendar = Calendar.getInstance();
        calendar.setTime(fromPeriod);

        List<Date> timeline = new ArrayList<Date>();
        while (calendar.getTime().before(toPeriod)){
            timeline.add(calendar.getTime());
            switch (periodUnit){
                case "second":
                    calendar.add(Calendar.SECOND, Integer.valueOf(periodSize));
                    break;
                case "minute":
                    calendar.add(Calendar.MINUTE, Integer.valueOf(periodSize));
                    break;
                case "hour":
                    calendar.add(Calendar.HOUR, Integer.valueOf(periodSize));
                    break;
                case "month":
                    calendar.add(Calendar.MONTH, Integer.valueOf(periodSize));
                    break;
                case "year":
                    calendar.add(Calendar.YEAR, Integer.valueOf(periodSize));
                    break;
            }
        }
        return timeline;
    }

}

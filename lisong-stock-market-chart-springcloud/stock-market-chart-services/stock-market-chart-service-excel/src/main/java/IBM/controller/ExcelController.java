package IBM.controller;

import IBM.dto.ExcelStockData;
import IBM.entity.StockPriceDetail;
import IBM.service.IExcelService;
import IBM.util.ExcelDataToMysqlDataUtil;
import com.alibaba.fastjson.JSONArray;
import com.alibaba.fastjson.JSONObject;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

@RestController
@Slf4j
@CrossOrigin(value = "http://localhost:4200")
public class ExcelController {

    @Autowired
    private IExcelService excelService;

    public JSONObject importExcel(@RequestParam(value = "file")MultipartFile file){
        JSONObject jsonObject = new JSONObject();
        JSONArray jsonArray = new JSONArray();

        List<ExcelStockData> excelStockDataList = excelService.importExcel(file, 0, 1, ExcelStockData.class);
        int count = 0;
        for (ExcelStockData excelStockData: excelStockDataList){
            StockPriceDetail stockPriceDetail = ExcelDataToMysqlDataUtil.transform(excelStockData);
            StockPriceDetail retStockPriceDetail = excelService.uploadExcelToMysql(stockPriceDetail);

            JSONObject dataJson = new JSONObject();
            dataJson.put("companyName", retStockPriceDetail.getCompanyCode());
            dataJson.put("stockExchange", retStockPriceDetail.getStockExchange());
            dataJson.put("NoOfRecordsImported", excelStockDataList.size());

            if(count == 0 || count == excelStockDataList.size()-1){
                dataJson.put("date", retStockPriceDetail.get_date());
                dataJson.put("time", retStockPriceDetail.get_time());
                jsonArray.add(dataJson);
            }
            count++;
        }
        jsonObject.put("summaryOfUpload", jsonArray);
        return null;
    }

}

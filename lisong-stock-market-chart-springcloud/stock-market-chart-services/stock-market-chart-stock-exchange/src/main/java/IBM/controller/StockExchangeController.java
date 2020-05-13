package IBM.controller;


import com.alibaba.fastjson.JSONArray;
import com.alibaba.fastjson.JSONObject;
import IBM.entity.StockExchange;
import IBM.service.impl.StockExchangeServiceImpl;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(value = "http://localhost:4200")
@Slf4j
@RestController
public class StockExchangeController {

    @Autowired
    private StockExchangeServiceImpl stockExchangeService;

    public StockExchangeController(StockExchangeServiceImpl stockExchangeService) {
        this.stockExchangeService = stockExchangeService;
    }

    @GetMapping(value = "/list")
    public JSONObject getStockExchangeList(){
        JSONObject jsonObject = new JSONObject();
        JSONArray jsonArray = new JSONArray();

        List<StockExchange> stockExchanges = this.stockExchangeService.getStockExchangeList();
        for(StockExchange stockExchange: stockExchanges){
            String stockExchangeName = stockExchange.getStockExchangeName();
            String stockExchangeBrief = stockExchange.getBrief();
            String stockExchangeAddress = stockExchange.getContactAddr();
            String stockExchangeRemarks = stockExchange.getRemarks();
            JSONObject dataJson = new JSONObject();
            dataJson.put("stockExchangeName", stockExchangeName);
            dataJson.put("stockExchangeBrief", stockExchangeBrief);
            dataJson.put("stockExchangeAddress", stockExchangeAddress);
            dataJson.put("stockExchangeRemarks", stockExchangeRemarks);
            jsonArray.add(dataJson);
        }
        jsonObject.put("stockExchanges", jsonArray);
        return jsonObject;
    }

    @PostMapping(value = "/new")
    public JSONObject createNewStockExchange(@RequestBody JSONObject stockExchangeJson){
        JSONObject jsonObject = new JSONObject();
        StockExchange stockExchange = new StockExchange();
        stockExchange.setStockExchangeName(stockExchangeJson.getString("stockExchangeName"));
        stockExchange.setBrief(stockExchangeJson.getString("stockExchangeBrief"));
        stockExchange.setContactAddr(stockExchangeJson.getString("stockExchangeAddress"));
        stockExchange.setRemarks(stockExchangeJson.getString("stockExchangeRemarks"));
        StockExchange retStockExchange = stockExchangeService.createNewStockExchange(stockExchange);
        if(retStockExchange != null){
            jsonObject.put("data", "success");
        } else {
            jsonObject.put("data", "fail");
        }
        return jsonObject;
    }
}

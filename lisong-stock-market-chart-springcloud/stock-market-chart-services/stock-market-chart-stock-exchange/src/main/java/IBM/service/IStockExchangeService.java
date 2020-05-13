package IBM.service;

import IBM.entity.StockExchange;

import java.util.List;

public interface IStockExchangeService {

    List<StockExchange> getStockExchangeList();

    StockExchange createNewStockExchange(StockExchange company);
}

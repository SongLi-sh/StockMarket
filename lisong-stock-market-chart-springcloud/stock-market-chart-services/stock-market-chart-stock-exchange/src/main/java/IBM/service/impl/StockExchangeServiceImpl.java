package IBM.service.impl;

import IBM.dao.StockExchangeDao;
import IBM.entity.StockExchange;
import IBM.service.IStockExchangeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class StockExchangeServiceImpl implements IStockExchangeService {

    @Autowired
    private StockExchangeDao stockExchangeDao;

    public StockExchangeServiceImpl(StockExchangeDao stockExchangeDao) {
        this.stockExchangeDao = stockExchangeDao;
    }

    @Override
    public List<StockExchange> getStockExchangeList() {
        return this.stockExchangeDao.findAll();
    }

    @Override
    public StockExchange createNewStockExchange(StockExchange stockExchange) {
        return stockExchangeDao.save(stockExchange);
    }
}

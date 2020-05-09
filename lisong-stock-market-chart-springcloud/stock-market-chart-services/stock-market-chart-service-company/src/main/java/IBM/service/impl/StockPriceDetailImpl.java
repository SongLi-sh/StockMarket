package IBM.service.impl;

import IBM.entity.StockPriceDetail;
import IBM.service.IStockPriceDetail;

import java.math.BigDecimal;
import java.sql.Date;
import java.sql.Time;
import java.util.List;

public class StockPriceDetailImpl implements IStockPriceDetail {
    @Override
    public List<StockPriceDetail> getStockPriceDetails(String companyName, String stockExchange, Date startDate, Time startTime, Date endDate, Time endTime) {
        return null;
    }

    @Override
    public List<StockPriceDetail> retrieveStockPriceDetails(String companyName, String stockExchange) {
        return null;
    }

    @Override
    public BigDecimal findCurrentPriceByCompanyCode(String companyCode) {
        return null;
    }
}

package IBM.service;


import IBM.entity.StockPriceDetail;

import java.math.BigDecimal;
import java.sql.Time;
import java.sql.Date;
import java.util.List;

public interface IStockPriceDetailService {

    List<StockPriceDetail> getStockPriceDetails(String companyName, String stockExchange,
                                                Date startDate,
                                                Time startTime,
                                                Date endDate,
                                                Time endTime);
    List<StockPriceDetail> retrieveStockPriceDetails(String companyName, String stockExchange);

    BigDecimal findCurrentPriceByCompanyCode(String companyCode);
}

package IBM.service.impl;

import IBM.dao.CompanyDao;
import IBM.dao.StockPriceDetailDao;
import IBM.entity.Company;
import IBM.entity.StockPriceDetail;
import IBM.service.IStockPriceDetailService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.math.BigDecimal;
import java.sql.Date;
import java.sql.Time;
import java.util.Comparator;
import java.util.List;
import java.util.Optional;

@Service
public class StockPriceDetailServiceImpl implements IStockPriceDetailService {

    @Autowired
    private StockPriceDetailDao stockPriceDetailDao;

    @Autowired
    private CompanyDao companyDao;

    public StockPriceDetailServiceImpl(StockPriceDetailDao stockPriceDetailDao, CompanyDao companyDao) {
        this.stockPriceDetailDao = stockPriceDetailDao;
        this.companyDao = companyDao;
    }

    @Override
    public List<StockPriceDetail> getStockPriceDetails(String companyName, String stockExchange, Date startDate, Time startTime, Date endDate, Time endTime) {
        Company company = this.companyDao.findStockCodeByCompanyName(companyName);
        String stockCode = company.getStockCode();
        return this.stockPriceDetailDao.findStockPriceDetailByCondition(stockCode, stockExchange, startDate, startTime, endDate, endTime);
    }

    @Override
    public List<StockPriceDetail> retrieveStockPriceDetails(String companyName, String stockExchange) {
        Company company = this.companyDao.findStockCodeByCompanyName(companyName);
        String stockCode = company.getStockCode();
        return this.stockPriceDetailDao.findStockPriceDetailByCompanyCodeAndStockExchange(stockCode, stockExchange);
    }

    @Override
    public BigDecimal findCurrentPriceByCompanyCode(String companyCode) {
        List<StockPriceDetail> stockPriceDetails = stockPriceDetailDao.findCurrentPriceByCompanyCode(companyCode);
        Optional<StockPriceDetail> optionalStockPriceDetail = stockPriceDetails.
                stream().
                sorted(Comparator.comparing(StockPriceDetail::get_date).reversed().
                        thenComparing(StockPriceDetail::get_time).reversed()).
                findFirst();
        if(optionalStockPriceDetail.isPresent()){
            return optionalStockPriceDetail.get().getCurrentPrice();
        }
        return null;
    }
}

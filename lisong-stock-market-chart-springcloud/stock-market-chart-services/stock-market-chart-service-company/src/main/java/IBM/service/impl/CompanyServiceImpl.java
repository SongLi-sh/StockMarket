package IBM.service.impl;

import IBM.dao.CompanyDao;
import IBM.entity.Company;
import IBM.service.ICompanyService;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;


@Service
@Slf4j
@AllArgsConstructor
@NoArgsConstructor
public class CompanyServiceImpl implements ICompanyService {
    @Autowired
    private CompanyDao companyDao;

    @Override
    public List<Company> getCompanyList() {
        return companyDao.findAll();
    }

    @Override
    public Company createNewCompany(Company company) {
        return companyDao.save(company);
    }

    @Override
    public List<Company> searchCompany(String companySearchTxt) {
        return companyDao.findCompanyByCompanySearchTx(companySearchTxt);
    }

    @Override
    public Company findCompanyByStockCode(String stockCode) {
        return companyDao.findCompanyByStockCode(stockCode);
    }
}

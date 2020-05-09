package IBM.service;

import IBM.entity.Company;

import java.util.List;

public interface ICompanyService {
    List<Company> getCompanyList();
    Company createNewCompany(Company company);
    List<Company> searchCompany(String companySearchTxt);
    Company findCompanyByStockCode(String stockCode);
}

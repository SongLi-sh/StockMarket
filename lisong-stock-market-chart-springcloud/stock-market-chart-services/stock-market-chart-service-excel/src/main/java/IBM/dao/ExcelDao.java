package IBM.dao;

import IBM.entity.StockPriceDetail;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ExcelDao extends JpaRepository<StockPriceDetail, Long> {

}

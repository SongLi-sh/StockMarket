package IBM.dao;

import IBM.entity.StockExchange;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface StockExchangeDao extends JpaRepository<StockExchange, Long> {
}

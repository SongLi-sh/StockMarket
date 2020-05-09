package IBM.dao;

import IBM.entity.IPOsPlanned;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface IPODao extends JpaRepository<IPOsPlanned, Long> {

}

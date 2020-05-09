package IBM.service.impl;

import IBM.dao.IPODao;
import IBM.entity.IPOsPlanned;
import IBM.service.IIPOService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@Slf4j
public class IPOServiceImpl implements IIPOService {

    @Autowired
    private IPODao ipoDao;
    public IPOServiceImpl(IPODao ipoDao){
        this.ipoDao = ipoDao;
    }

    @Override
    public IPOsPlanned createNewIPO(IPOsPlanned ipOsPlanned) {
        return this.ipoDao.save(ipOsPlanned);
    }

    @Override
    public List<IPOsPlanned> getIPOList() {
        Sort sort = new Sort(Sort.Direction.DESC, "openDateTime");
        return this.ipoDao.findAll();
    }
}

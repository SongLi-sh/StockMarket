package IBM.service;

import IBM.entity.IPOsPlanned;

import java.util.List;

public interface IIPOService {
    IPOsPlanned createNewIPO(IPOsPlanned ipOsPlanned);

    List<IPOsPlanned> getIPOList();

}

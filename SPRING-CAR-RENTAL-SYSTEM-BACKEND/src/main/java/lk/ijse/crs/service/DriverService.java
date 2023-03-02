package lk.ijse.crs.service;

import lk.ijse.crs.dto.DriverDTO;

import java.util.List;

public interface DriverService {

    void addDriver(DriverDTO driverDTO);
    List<Integer> findDriverLastId();
    List<DriverDTO> findAllDrivers();
    List<DriverDTO> findAllDriversByDriverStatus(String driverStatus);
    DriverDTO findDriverById(int driverId);
    void deleteDriverById(int driverId);
}

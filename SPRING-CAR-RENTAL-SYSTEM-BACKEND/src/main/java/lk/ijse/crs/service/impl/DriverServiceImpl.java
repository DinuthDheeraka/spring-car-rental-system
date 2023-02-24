/**
 * @author :  Dinuth Dheeraka
 * Created : 2/22/2023 3:03 PM
 */
package lk.ijse.crs.service.impl;

import lk.ijse.crs.dto.CustomerDTO;
import lk.ijse.crs.dto.DriverDTO;
import lk.ijse.crs.entity.Driver;
import lk.ijse.crs.repo.DriverRepo;
import lk.ijse.crs.service.DriverService;
import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.ArrayList;
import java.util.List;

@Service
@Transactional
public class DriverServiceImpl implements DriverService {

    @Autowired
    DriverRepo driverRepo;

    @Autowired
    ModelMapper modelMapper;


    @Override
    public void addDriver(DriverDTO driverDTO) {
        driverRepo.save(modelMapper.map(driverDTO, Driver.class));
    }

    @Override
    public List<Integer> findDriverLastId() {
        return driverRepo.findLastDriverId();
    }

    @Override
    public List<DriverDTO> findAllDrivers() {
        return modelMapper.map(driverRepo.findAll(),new TypeToken<ArrayList<DriverDTO>>(){}.getType());
    }
}

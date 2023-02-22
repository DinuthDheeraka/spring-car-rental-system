/**
 * @author :  Dinuth Dheeraka
 * Created : 2/22/2023 5:21 PM
 */
package lk.ijse.crs.service.impl;

import lk.ijse.crs.dto.CarDTO;
import lk.ijse.crs.entity.Car;
import lk.ijse.crs.repo.CarRepo;
import lk.ijse.crs.service.CarService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;

@Service
@Transactional
public class CarServiceImpl implements CarService {

    @Autowired
    CarRepo carRepo;

    @Autowired
    ModelMapper modelMapper;

    @Override
    public void addCar(CarDTO carDTO) {
        carRepo.save(modelMapper.map(carDTO, Car.class));
    }
}
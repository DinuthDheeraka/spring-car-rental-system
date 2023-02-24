package lk.ijse.crs.service;

import lk.ijse.crs.dto.CarDTO;

import java.util.List;

public interface CarService {

    void addCar(CarDTO carDTO);
    List<Integer> findLastCarId();
}

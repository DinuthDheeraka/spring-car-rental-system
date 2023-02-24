package lk.ijse.crs.repo;

import lk.ijse.crs.entity.Car;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface CarRepo extends JpaRepository<Car,Integer> {

    @Query(value = "SELECT c.carId FROM Car c ORDER BY c.carId DESC")
    List<Integer> findLastCarId();
}

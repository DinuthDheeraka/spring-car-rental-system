package lk.ijse.crs.repo;

import lk.ijse.crs.entity.Car;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CarRepo extends JpaRepository<Car,String> {
}

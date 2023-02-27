package lk.ijse.crs.repo;

import lk.ijse.crs.entity.Driver;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface DriverRepo extends JpaRepository<Driver,Integer> {
    @Query(value = "SELECT d.driverId FROM Driver d ORDER BY d.driverId DESC")
    List<Integer> findLastDriverId();

    List<Driver> findAllByDriverStatus(String driverStatus);
}

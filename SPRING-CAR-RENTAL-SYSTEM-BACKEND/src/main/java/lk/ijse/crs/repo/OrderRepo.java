package lk.ijse.crs.repo;

import lk.ijse.crs.entity.Orders;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface OrderRepo extends JpaRepository<Orders,String> {

    @Query(value = "SELECT o.orderId FROM Orders o ORDER BY o.driverId DESC")
    List<String> findLastOrderId();
}

package lk.ijse.crs.repo;

import lk.ijse.crs.entity.Customer;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface CustomerRepo extends JpaRepository<Customer,Integer> {
    @Query(value = "SELECT c.customerId FROM Customer c ORDER BY c.customerId DESC")
    List<Integer> findLastCustomerId();
}

package lk.ijse.crs.repo;

import lk.ijse.crs.entity.Payment;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PaymentRepo extends JpaRepository<Payment,String> {

}

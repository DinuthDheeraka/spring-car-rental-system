package lk.ijse.crs.repo;

import lk.ijse.crs.entity.Payment;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface PaymentRepo extends JpaRepository<Payment,String> {
    @Query(value = "SELECT p.paymentId FROM Payment p ORDER BY p.paymentId DESC")
    List<String> findPaymentIds();
}

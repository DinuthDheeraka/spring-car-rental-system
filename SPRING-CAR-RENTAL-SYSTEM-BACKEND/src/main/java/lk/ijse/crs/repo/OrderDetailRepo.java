package lk.ijse.crs.repo;

import lk.ijse.crs.entity.OrderDetail;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface OrderDetailRepo extends JpaRepository<OrderDetail,Integer> {

    List<OrderDetail> findOrderDetailByOrderId(String orderId);
}

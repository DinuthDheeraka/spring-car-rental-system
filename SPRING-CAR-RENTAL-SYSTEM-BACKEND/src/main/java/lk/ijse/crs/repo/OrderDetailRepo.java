package lk.ijse.crs.repo;

import lk.ijse.crs.entity.OrderDetail;
import org.springframework.data.jpa.repository.JpaRepository;

public interface OrderDetailRepo extends JpaRepository<OrderDetail,Integer> {
}

package lk.ijse.crs.service;

import lk.ijse.crs.dto.OrderDTO;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

public interface OrderService {

    void addOrder(OrderDTO orderDTO);
    List<String>  getAllOrderIds();
    List<OrderDTO> getAllOrders();
}

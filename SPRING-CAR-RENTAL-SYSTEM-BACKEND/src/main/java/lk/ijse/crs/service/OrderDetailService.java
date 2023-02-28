package lk.ijse.crs.service;

import lk.ijse.crs.dto.OrderDetailDTO;

import java.util.List;

public interface OrderDetailService {

    void addOrderDetail(OrderDetailDTO orderDetailDTO);
    List<OrderDetailDTO> findOrderDetailByOrderId(String orderId);
}

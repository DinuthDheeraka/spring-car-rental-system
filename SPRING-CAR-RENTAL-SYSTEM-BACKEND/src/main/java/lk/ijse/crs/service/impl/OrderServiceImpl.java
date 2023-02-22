/**
 * @author :  Dinuth Dheeraka
 * Created : 2/22/2023 10:25 PM
 */
package lk.ijse.crs.service.impl;

import lk.ijse.crs.dto.OrderDTO;
import lk.ijse.crs.entity.Orders;
import lk.ijse.crs.repo.OrderRepo;
import lk.ijse.crs.service.OrderService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;

public class OrderServiceImpl implements OrderService {

    @Autowired
    OrderRepo orderRepo;

    @Autowired
    ModelMapper modelMapper;

    @Override
    public void addOrder(OrderDTO orderDTO) {
        orderRepo.save(modelMapper.map(orderDTO, Orders.class));
    }
}

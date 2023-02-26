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
import org.modelmapper.TypeToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.ArrayList;
import java.util.List;

@Service
@Transactional
public class OrderServiceImpl implements OrderService {

    @Autowired
    OrderRepo orderRepo;

    @Autowired
    ModelMapper modelMapper;

    @Override
    public void addOrder(OrderDTO orderDTO) {
        orderRepo.save(modelMapper.map(orderDTO, Orders.class));
    }

    @Override
    public List<String> getAllOrderIds() {
        return orderRepo.findLastOrderId();
    }

    @Override
    public List<OrderDTO> getAllOrders() {
        return modelMapper.map(orderRepo.findAll(),new TypeToken<ArrayList<OrderDTO>>(){}.getType());
    }

    @Override
    public OrderDTO findOrderById(String orderId) {
        return modelMapper.map(orderRepo.findById(orderId).get(),OrderDTO.class);
    }
}

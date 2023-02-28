/**
 * @author :  Dinuth Dheeraka
 * Created : 2/28/2023 2:59 PM
 */
package lk.ijse.crs.service.impl;

import lk.ijse.crs.dto.OrderDetailDTO;
import lk.ijse.crs.entity.OrderDetail;
import lk.ijse.crs.repo.OrderDetailRepo;
import lk.ijse.crs.service.OrderDetailService;
import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.ArrayList;
import java.util.List;

@Service
@Transactional
public class OrderDetailServiceImpl implements OrderDetailService {

    @Autowired
    OrderDetailRepo orderDetailRepo;

    @Autowired
    ModelMapper modelMapper;

    @Override
    public void addOrderDetail(OrderDetailDTO orderDetailDTO) {
        orderDetailRepo.save(modelMapper.map(orderDetailDTO, OrderDetail.class));
    }

    @Override
    public List<OrderDetailDTO> findOrderDetailByOrderId(String orderId) {
        return modelMapper.map(orderDetailRepo.findOrderDetailByOrderId(orderId),new TypeToken<ArrayList<OrderDetailDTO>>(){}.getType());
    }
}

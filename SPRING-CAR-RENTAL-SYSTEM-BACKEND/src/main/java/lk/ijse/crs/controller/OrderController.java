/**
 * @author :  Dinuth Dheeraka
 * Created : 2/22/2023 11:35 PM
 */
package lk.ijse.crs.controller;

import lk.ijse.crs.dto.CustomDTO;
import lk.ijse.crs.dto.CustomerDTO;
import lk.ijse.crs.dto.OrderDTO;
import lk.ijse.crs.service.CustomerService;
import lk.ijse.crs.service.OrderService;
import lk.ijse.crs.util.IdsGenerator;
import lk.ijse.crs.util.ResponseUtil;
import org.hibernate.criterion.Order;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("/order")
public class OrderController {

    @Autowired
    OrderService orderService;

    @Autowired
    CustomerService customerService;

    @PostMapping(path = {"/place_order"}, consumes = {"application/json"})
    public void addOrder(@RequestBody OrderDTO orderDTO) {
        System.out.println(orderDTO);
        orderService.addOrder(orderDTO);
    }

    @PostMapping(path = {"/update_order"}, consumes = {"application/json"})
    public void updateOrder(@RequestBody OrderDTO orderDTO) {
        System.out.println(orderDTO);
        orderService.updateOrder(orderDTO);
    }


    @GetMapping(path = {"/findNewOrderId"})
    public ResponseUtil<String> findNewOrderId() {
        List<String> list = new ArrayList<>();
        List<String> allOrderIds = orderService.getAllOrderIds();
        if(allOrderIds.size()>0){
            list.add(IdsGenerator.generateId("OR-",allOrderIds.get(0)));
        }else{
            list.add("OR-0000");
        }
        return new ResponseUtil<String>("200","Done",list);
    }

    @GetMapping(path = {"/findOrderById/{orderId}"})
    public ResponseUtil<OrderDTO> findOrderById(@PathVariable String orderId) {
        List<OrderDTO> list = new ArrayList<>();
        list.add(orderService.findOrderById(orderId));
        return new ResponseUtil<OrderDTO>("200","Done",list);
    }

    @GetMapping(path = {"/findAllOrders"})
    public ResponseUtil<OrderDTO> findAllOrders() {
        List<OrderDTO> orderDTOS = orderService.getAllOrders();
        return new ResponseUtil<OrderDTO>("200","Done",orderDTOS);
    }
}

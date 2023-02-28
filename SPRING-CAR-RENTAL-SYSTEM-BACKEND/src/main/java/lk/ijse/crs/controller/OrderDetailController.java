/**
 * @author :  Dinuth Dheeraka
 * Created : 2/28/2023 2:51 PM
 */
package lk.ijse.crs.controller;

import lk.ijse.crs.dto.DriverDTO;
import lk.ijse.crs.dto.OrderDetailDTO;
import lk.ijse.crs.service.OrderDetailService;
import lk.ijse.crs.util.ResponseUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin
@RequestMapping("orderDetail")
public class OrderDetailController {

    @Autowired
    OrderDetailService orderDetailService;

    @PostMapping(path = {"/addOrder"}, consumes = {"application/json"})
    public void addOrderDetail(@RequestBody OrderDetailDTO orderDetailDTO) {
        System.out.println(orderDetailDTO);
        orderDetailService.addOrderDetail(orderDetailDTO);
    }

    @GetMapping(path = {"/findOrderDetailById/{orderId}"})
    public ResponseUtil<OrderDetailDTO> getOrderDetailByOrderId(@PathVariable String orderId) {
        ResponseUtil<OrderDetailDTO> responseUtil = new ResponseUtil(
                "200", "Done", orderDetailService.findOrderDetailByOrderId(orderId));
        return responseUtil;
    }
}

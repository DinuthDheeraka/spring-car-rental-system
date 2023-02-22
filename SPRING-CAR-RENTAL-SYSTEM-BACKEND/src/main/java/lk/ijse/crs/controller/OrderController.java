/**
 * @author :  Dinuth Dheeraka
 * Created : 2/22/2023 11:35 PM
 */
package lk.ijse.crs.controller;

import lk.ijse.crs.dto.OrderDTO;
import lk.ijse.crs.dto.TempOrderDTO;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin
@RequestMapping("/order")
public class OrderController {

    @PostMapping(path = {"/place_order"}, consumes = {"application/json"})
    public void addCustomer(@RequestBody TempOrderDTO tempOrderDTO) {
        System.out.println(tempOrderDTO);
    }
}

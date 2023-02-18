/**
 * @author :  Dinuth Dheeraka
 * Created : 2/18/2023 4:46 PM
 */
package lk.ijse.crs.controller;

import lk.ijse.crs.dto.CustomerDTO;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin
@RequestMapping("/customer")
public class CustomerController {

    @PostMapping(path = {"/register"},consumes = {"application/json"})
    public void addCustomer(@RequestBody CustomerDTO customerDTO){
        System.out.println(customerDTO);
        System.out.println("Customer");
    }
}

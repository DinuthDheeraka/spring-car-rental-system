/**
 * @author :  Dinuth Dheeraka
 * Created : 2/18/2023 4:46 PM
 */
package lk.ijse.crs.controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin
@RequestMapping("/customer")
public class CustomerController {

    @GetMapping
    public void get(){
        System.out.println("Customer");
    }
}

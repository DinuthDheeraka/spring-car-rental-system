/**
 * @author :  Dinuth Dheeraka
 * Created : 3/4/2023 1:46 AM
 */
package lk.ijse.crs.controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin
@RequestMapping("/payment")
public class PaymentController {

    @PostMapping
    public void addPayment(){

    }
}

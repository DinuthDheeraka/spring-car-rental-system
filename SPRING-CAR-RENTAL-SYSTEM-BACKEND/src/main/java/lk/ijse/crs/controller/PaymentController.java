/**
 * @author :  Dinuth Dheeraka
 * Created : 3/4/2023 1:46 AM
 */
package lk.ijse.crs.controller;

import lk.ijse.crs.dto.PaymentDTO;
import lk.ijse.crs.service.PaymentService;
import lk.ijse.crs.util.IdsGenerator;
import lk.ijse.crs.util.ResponseUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("/payment")
public class PaymentController {
    @Autowired
    PaymentService paymentService;

    @PostMapping(path = "addPayment",consumes = "application/json")
    public void addPayment(@RequestBody PaymentDTO paymentDTO){
        System.out.println(paymentDTO);
        paymentService.addPayment(paymentDTO);
    }

    @GetMapping(path = "newPaymentId")
    public ResponseUtil<String> findNewPaymentId(){
        List<String> lastId = paymentService.findPaymentIds();
        if(lastId.size()>0){
            List<String> list = new ArrayList<>();
            list.add(IdsGenerator.generateId("PM-",lastId.get(0)));
            lastId = list;
        }else{
            lastId.add(IdsGenerator.generateId("PM-",""));
        }
        return new ResponseUtil<>(
                "200","Done",lastId
        );
    }
}

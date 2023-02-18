/**
 * @author :  Dinuth Dheeraka
 * Created : 2/18/2023 3:23 PM
 */
package lk.ijse.crs.controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/hello")
@CrossOrigin
public class TestController {

    public TestController(){
        System.out.println("CREATED TEST CONTROLLER");
    }

    @GetMapping
    public String get(){
        return "Hello";
    }
}

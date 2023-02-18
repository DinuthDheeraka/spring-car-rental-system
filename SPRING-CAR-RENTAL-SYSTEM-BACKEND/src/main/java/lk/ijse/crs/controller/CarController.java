/**
 * @author :  Dinuth Dheeraka
 * Created : 2/18/2023 4:46 PM
 */
package lk.ijse.crs.controller;

import lk.ijse.crs.dto.CarDTO;
import lk.ijse.crs.dto.CustomerDTO;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;

@RestController
@CrossOrigin
@RequestMapping("/car")
public class CarController {

    public CarController(){
        System.out.println("CREATED CAR CONTROLLER");
    }

    @PostMapping(path = {"/register"}, consumes = {"application/json"})
    public void addCustomer(@RequestBody CarDTO carDTO) {
        System.out.println("car");
        System.out.println(carDTO);
    }

//    @PostMapping(path = {"/upload/{carId}"})
//    public void uploadCustomerNicAndDrivingLicense(@RequestParam("nic") MultipartFile nic, @RequestParam("drivingLicense") MultipartFile drivingLicense, @PathVariable("customerId") String customerId) {
//
//        byte[] bytes = new byte[0];
//        try {
//            bytes = nic.getBytes();
//            Path nicPath = Paths.get("E:\\upload\\"+customerId +"-"+"nic.png");
//            Files.write(nicPath, bytes);
//
//            bytes = drivingLicense.getBytes();
//            Path drivingLicensePath = Paths.get("E:\\upload\\"+customerId +"-" +"license.png");
//            Files.write(drivingLicensePath, bytes);
//
//        } catch (IOException ioException) {
//            ioException.printStackTrace();
//        }
//
//    }
}

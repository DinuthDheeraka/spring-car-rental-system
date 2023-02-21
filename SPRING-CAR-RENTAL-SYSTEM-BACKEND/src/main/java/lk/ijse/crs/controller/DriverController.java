/**
 * @author :  Dinuth Dheeraka
 * Created : 2/18/2023 4:47 PM
 */
package lk.ijse.crs.controller;

import lk.ijse.crs.dto.CustomerDTO;
import lk.ijse.crs.dto.DriverDTO;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;

@RestController
@RequestMapping("/driver")
@CrossOrigin
public class DriverController {

    @PostMapping(path = {"/register"}, consumes = {"application/json"})
    public void addCustomer(@RequestBody DriverDTO driverDTO) {
        System.out.println(driverDTO);
    }

    @PostMapping(path = {"/upload/{driverId}"})
    public void uploadDriverNicAndDrivingLicense(@RequestParam("nic") MultipartFile nic, @RequestParam("drivingLicense") MultipartFile drivingLicense, @PathVariable("driverId") String driverId) {

        byte[] bytes = new byte[0];
        try {
            bytes = nic.getBytes();
            Path nicPath = Paths.get("E:\\upload\\driver\\"+driverId +"-"+"nic.png");
            Files.write(nicPath, bytes);

            bytes = drivingLicense.getBytes();
            Path drivingLicensePath = Paths.get("E:\\upload\\driver\\"+driverId +"-" +"license.png");
            Files.write(drivingLicensePath, bytes);

        } catch (IOException ioException) {
            ioException.printStackTrace();
        }

    }
}

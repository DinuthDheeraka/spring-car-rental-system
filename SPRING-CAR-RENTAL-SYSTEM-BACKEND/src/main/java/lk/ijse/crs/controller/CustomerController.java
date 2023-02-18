/**
 * @author :  Dinuth Dheeraka
 * Created : 2/18/2023 4:46 PM
 */
package lk.ijse.crs.controller;

import lk.ijse.crs.dto.CustomerDTO;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("/customer")
public class CustomerController {

    @PostMapping(path = {"/register"},consumes = {"application/json"})
    public void addCustomer(@RequestBody CustomerDTO customerDTO){
        System.out.println(customerDTO);
    }
//@RequestParam("nic") MultipartFile nic,@RequestParam("drivingLicense") MultipartFile drivingLicense
    @PostMapping(path = {"/upload/{customerId}"})
    public void uploadCustomerNicAndDrivingLicense(@RequestParam("file") List<MultipartFile> images,@PathVariable("customerId")String customerId){
        System.out.println("upload"+customerId);
//        System.out.println(nic.getOriginalFilename());
//        System.out.println(drivingLicense.getOriginalFilename());
        // Perform the image upload operation.
        for(MultipartFile multipartFile : images){
            System.out.println(multipartFile.getOriginalFilename());
        }
//        byte[] bytes = new byte[0];
//        try {
//            bytes = image.getBytes();
//            Path path = Paths.get("E:\\upload\\" + image.getOriginalFilename());
//            Files.write(path, bytes);
//        } catch (IOException ioException) {
//            ioException.printStackTrace();
//        }
//        return ResponseEntity.ok("Image uploaded successfully.");
    }
}

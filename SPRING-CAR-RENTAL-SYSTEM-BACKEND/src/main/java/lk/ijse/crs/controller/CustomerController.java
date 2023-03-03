/**
 * @author :  Dinuth Dheeraka
 * Created : 2/18/2023 4:46 PM
 */
package lk.ijse.crs.controller;

import lk.ijse.crs.dto.CustomerDTO;
import lk.ijse.crs.service.CustomerService;
import lk.ijse.crs.util.ResponseUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.ArrayList;
import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("/customer")
public class CustomerController {

    @Autowired
    CustomerService customerService;

    @PostMapping(path = {"/register"}, consumes = {"application/json"})
    public void addCustomer(@RequestBody CustomerDTO customerDTO) {
        customerService.addCustomer(customerDTO);
        System.out.println(customerDTO);
    }

    @GetMapping(path = {"findCustomerById/{customerId}"})
    public ResponseUtil<CustomerDTO> findCustomerById(@PathVariable int customerId){
        CustomerDTO customerDTO = customerService.findCustomerById(customerId);
        List<CustomerDTO> customerDTOS= new ArrayList<>();
        customerDTOS.add(customerDTO);
        ResponseUtil<CustomerDTO> responseUtil = new ResponseUtil<>(
                "200","Done",customerDTOS
        );
        return responseUtil;
    }

    @GetMapping(path = {"/lastCustomerId"})
    public ResponseUtil<Integer> findLastCustomerId() {
        ResponseUtil<Integer> responseUtil = new ResponseUtil(
                "200", "Done", customerService.findLastCustomerId());
        return responseUtil;
    }

    @GetMapping(path = {"/getAllCustomers"})
    public ResponseUtil<CustomerDTO> findAllCustomers() {
        ResponseUtil<CustomerDTO> responseUtil = new ResponseUtil(
                "200", "Done", customerService.findAllCustomers());
        return responseUtil;
    }

    @PostMapping(path = {"/upload/{customerId}"})
    public void uploadCustomerNicAndDrivingLicense(@RequestParam("nic") MultipartFile nic, @RequestParam("drivingLicense") MultipartFile drivingLicense, @PathVariable("customerId") String customerId) {

        byte[] bytes = new byte[0];
        try {
            bytes = nic.getBytes();
            Path nicPath = Paths.get("E:\\upload\\customer\\" + customerId + "-" + "nic.png");
            Files.write(nicPath, bytes);

            bytes = drivingLicense.getBytes();
            Path drivingLicensePath = Paths.get("E:\\upload\\customer\\" + customerId + "-" + "license.png");
            Files.write(drivingLicensePath, bytes);

        } catch (IOException ioException) {
            ioException.printStackTrace();
        }

    }
}

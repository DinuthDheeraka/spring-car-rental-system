/**
 * @author :  Dinuth Dheeraka
 * Created : 2/18/2023 4:47 PM
 */
package lk.ijse.crs.controller;

import lk.ijse.crs.dto.DriverDTO;
import lk.ijse.crs.service.DriverService;
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
@RequestMapping("/driver")
@CrossOrigin
public class DriverController {

    @Autowired
    DriverService driverService;

    @PostMapping(path = {"/register"}, consumes = {"application/json"})
    public void addDriver(@RequestBody DriverDTO driverDTO) {
        System.out.println(driverDTO);
        driverService.addDriver(driverDTO);
    }

    @PostMapping(path = {"/updateDriver"}, consumes = {"application/json"})
    public void updateDriver(@RequestBody DriverDTO driverDTO) {
        driverService.deleteDriverById(driverDTO.getDriverId());
        driverService.addDriver(driverDTO);
    }

    @GetMapping(path = {"/lastDriverId"})
    public ResponseUtil<Integer> findLastCustomerId() {
        ResponseUtil<Integer> responseUtil = new ResponseUtil(
                "200", "Done", driverService.findDriverLastId());
        return responseUtil;
    }

    @GetMapping(path = {"/getAllDrivers"})
    public ResponseUtil<DriverDTO> findAllDrivers() {
        ResponseUtil<DriverDTO> responseUtil = new ResponseUtil(
                "200", "Done", driverService.findAllDrivers());
        return responseUtil;
    }

    @GetMapping(path = {"/getAllAvailableDrivers"})
    public ResponseUtil<DriverDTO> findAllAvailableDrivers() {
        ResponseUtil<DriverDTO> responseUtil = new ResponseUtil(
                "200", "Done", driverService.findAllDriversByDriverStatus("Inactive"));
        return responseUtil;
    }

    @GetMapping(path = {"/findDriverById/{driverId}"})
    public ResponseUtil<DriverDTO> findDriverById(@PathVariable int driverId) {
        List<DriverDTO> driverDTOList = new ArrayList<>();
        driverDTOList.add(driverService.findDriverById(driverId));
        ResponseUtil<DriverDTO> responseUtil = new ResponseUtil(
                "200", "Done", driverDTOList);
        return responseUtil;
    }

    @PostMapping(path = {"/upload/{driverId}"})
    public void uploadDriverNicAndDrivingLicense(@RequestParam("nic") MultipartFile nic, @RequestParam("drivingLicense") MultipartFile drivingLicense, @PathVariable("driverId") String driverId) {

        byte[] bytes = new byte[0];
        try {
            bytes = nic.getBytes();
            Path nicPath = Paths.get("E:\\upload\\driver\\" + driverId + "-" + "nic.png");
            Files.write(nicPath, bytes);

            bytes = drivingLicense.getBytes();
            Path drivingLicensePath = Paths.get("E:\\upload\\driver\\" + driverId + "-" + "license.png");
            Files.write(drivingLicensePath, bytes);

        } catch (IOException ioException) {
            ioException.printStackTrace();
        }

    }
}

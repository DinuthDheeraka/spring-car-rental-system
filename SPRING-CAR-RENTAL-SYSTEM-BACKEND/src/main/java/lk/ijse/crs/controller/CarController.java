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
    public void addCar(@RequestBody CarDTO carDTO) {
        System.out.println("car");
        System.out.println(carDTO);
    }

    @PostMapping(path = {"/upload/{carId}"})
    public void uploadCarViews(@RequestParam("front_view") MultipartFile frontView, @RequestParam("side_view") MultipartFile sideView, @RequestParam("back_view") MultipartFile backView, @RequestParam("interior_view") MultipartFile interiorView, @PathVariable("carId") String carId) {

        byte[] bytes = new byte[0];
        try {
            bytes = frontView.getBytes();
            Path frontViewPath = Paths.get("E:\\upload\\car\\"+carId +"-"+"frontView.png");
            Files.write(frontViewPath, bytes);

            bytes = sideView.getBytes();
            Path sideViewPath = Paths.get("E:\\upload\\car\\"+carId +"-"+"sideView.png");
            Files.write(sideViewPath, bytes);

            bytes = backView.getBytes();
            Path backViewPath = Paths.get("E:\\upload\\car\\"+carId +"-"+"backView.png");
            Files.write(backViewPath, bytes);

            bytes = interiorView.getBytes();
            Path interiorPath = Paths.get("E:\\upload\\car\\"+carId +"-"+"interiorView.png");
            Files.write(interiorPath, bytes);

        } catch (IOException ioException) {
            ioException.printStackTrace();
        }
    }
}

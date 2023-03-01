/**
 * @author :  Dinuth Dheeraka
 * Created : 2/18/2023 4:46 PM
 */
package lk.ijse.crs.controller;

import lk.ijse.crs.dto.SystemUserDTO;
import lk.ijse.crs.service.SystemUserService;
import lk.ijse.crs.util.ResponseUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin
@RequestMapping("systemUser")
public class SystemUserController {

    @Autowired
    SystemUserService systemUserService;

    @PostMapping(consumes = {"application/json"},path = {"/addSystemUser"})
    public void addSystemUser(@RequestBody SystemUserDTO systemUserDTO){
        System.out.println(systemUserDTO);
        systemUserService.addSystemUser(systemUserDTO);
    }

    @GetMapping(path = {"/allSystemUsers"})
    public ResponseUtil<SystemUserDTO> addSystemUser(){
        return new ResponseUtil<SystemUserDTO>(
                "200","Done", systemUserService.findAllSystemUsers()
        );
    }
}

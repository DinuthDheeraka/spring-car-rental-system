/**
 * @author :  Dinuth Dheeraka
 * Created : 3/1/2023 3:55 PM
 */
package lk.ijse.crs.service.impl;

import lk.ijse.crs.dto.SystemUserDTO;
import lk.ijse.crs.entity.SystemUser;
import lk.ijse.crs.repo.SystemUserRepo;
import lk.ijse.crs.service.SystemUserService;
import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.ArrayList;
import java.util.List;

@Service
@Transactional
public class SystemUserServiceImpl implements SystemUserService {
    @Autowired
    SystemUserRepo systemUserRepo;

    @Autowired
    ModelMapper modelMapper;

    @Override
    public void addSystemUser(SystemUserDTO systemUserDTO) {
        systemUserRepo.save(modelMapper.map(systemUserDTO, SystemUser.class));
    }

    @Override
    public List<SystemUserDTO> findAllSystemUsers() {
        return modelMapper.map(systemUserRepo.findAll(),new TypeToken<ArrayList<SystemUserDTO>>(){}.getType());
    }
}

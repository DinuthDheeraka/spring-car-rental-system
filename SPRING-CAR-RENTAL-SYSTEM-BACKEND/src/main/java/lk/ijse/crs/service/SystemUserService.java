package lk.ijse.crs.service;

import lk.ijse.crs.dto.SystemUserDTO;

import java.util.List;

public interface SystemUserService {
    void addSystemUser(SystemUserDTO systemUserDTO);
    List<SystemUserDTO> findAllSystemUsers();
}

/**
 * @author :  Dinuth Dheeraka
 * Created : 2/22/2023 1:39 PM
 */
package lk.ijse.crs.service.impl;

import lk.ijse.crs.repo.CustomerRepo;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;

@Service
@Transactional
public class CustomerServiceImpl {

    @Autowired
    CustomerRepo customerRepo;

    @Autowired
    ModelMapper modelMapper;
}

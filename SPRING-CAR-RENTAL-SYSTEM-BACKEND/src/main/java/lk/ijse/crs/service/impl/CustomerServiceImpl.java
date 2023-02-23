/**
 * @author :  Dinuth Dheeraka
 * Created : 2/22/2023 1:39 PM
 */
package lk.ijse.crs.service.impl;

import lk.ijse.crs.dto.CustomerDTO;
import lk.ijse.crs.entity.Customer;
import lk.ijse.crs.repo.CustomerRepo;
import lk.ijse.crs.service.CustomerService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;

@Service
@Transactional
public class CustomerServiceImpl implements CustomerService {

    @Autowired
    CustomerRepo customerRepo;

    @Autowired
    ModelMapper modelMapper;

    @Override
    public void addCustomer(CustomerDTO customerDTO) {
        customerRepo.save(modelMapper.map(customerDTO, Customer.class));
        System.out.println(customerRepo.getLastCustomerId());
    }
}

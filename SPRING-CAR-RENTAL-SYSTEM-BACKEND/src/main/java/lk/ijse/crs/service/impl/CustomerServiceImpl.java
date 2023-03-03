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
import org.modelmapper.TypeToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.ArrayList;
import java.util.List;

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
    }

    @Override
    public List<Integer> findLastCustomerId() {
        return (customerRepo.findLastCustomerId());
    }

    @Override
    public List<CustomerDTO> findAllCustomers() {
        return modelMapper.map(customerRepo.findAll(),new TypeToken<ArrayList<CustomerDTO>>(){}.getType());
    }

    @Override
    public CustomerDTO findCustomerById(int customerId) {
        return modelMapper.map(customerRepo.findById(customerId),CustomerDTO.class);
    }
}

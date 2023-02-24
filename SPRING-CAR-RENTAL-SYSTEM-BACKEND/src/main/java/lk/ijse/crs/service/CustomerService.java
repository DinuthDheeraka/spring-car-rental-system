package lk.ijse.crs.service;

import lk.ijse.crs.dto.CustomerDTO;

import java.util.ArrayList;
import java.util.List;

public interface CustomerService {
    void addCustomer(CustomerDTO customerDTO);
    List<Integer> findLastCustomerId();
    List<CustomerDTO> findAllCustomers();
}

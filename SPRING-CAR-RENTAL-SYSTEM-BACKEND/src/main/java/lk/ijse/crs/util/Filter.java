/**
 * @author :  Dinuth Dheeraka
 * Created : 2/26/2023 9:02 PM
 */
package lk.ijse.crs.util;

import lk.ijse.crs.dto.CustomerDTO;

import java.util.List;

public class Filter {

    public static CustomerDTO findCustomerDTO(List<CustomerDTO> customerDTOS, String id){
        for(CustomerDTO customerDTO : customerDTOS){
            if(id.equals(customerDTO.getCustomerId())){
                return customerDTO;
            }
        }
        return null;
    }
}

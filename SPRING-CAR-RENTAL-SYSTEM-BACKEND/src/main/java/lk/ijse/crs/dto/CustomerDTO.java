/**
 * @author :  Dinuth Dheeraka
 * Created : 2/18/2023 5:11 PM
 */
package lk.ijse.crs.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

@Data
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class CustomerDTO {
    int customerId;
    String nicNumber;
    String drivingLicenseNumber;
    String fullName;
    String homeAddress;
    String telephoneNumber;
    String emailAddress;
}

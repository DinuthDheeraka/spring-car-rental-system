/**
 * @author :  Dinuth Dheeraka
 * Created : 2/22/2023 1:06 PM
 */
package lk.ijse.crs.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Customer {
    @Id
    @GeneratedValue(strategy= GenerationType.AUTO)
    int customerId;
    String nicNumber;
    String drivingLicenseNumber;
    String fullName;
    String homeAddress;
    String telephoneNumber;
    String emailAddress;
}

/**
 * @author :  Dinuth Dheeraka
 * Created : 3/1/2023 3:54 PM
 */
package lk.ijse.crs.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.CreationTimestamp;

import java.util.Date;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class SystemUserDTO {
    int id;
    String nicNumber;
    String password;
    String userName;
    Date registeredDate;
    String userType;
}

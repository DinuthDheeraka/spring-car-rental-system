/**
 * @author :  Dinuth Dheeraka
 * Created : 3/1/2023 3:25 PM
 */
package lk.ijse.crs.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.CreationTimestamp;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import java.util.Date;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
public class SystemUser {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    int id;
    String nicNumber;
    String password;
    String userName;
    @CreationTimestamp
    Date registeredDate;
    String userType;
}

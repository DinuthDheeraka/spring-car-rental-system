/**
 * @author :  Dinuth Dheeraka
 * Created : 2/28/2023 3:36 AM
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
public class OrderDetail {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    int id;
    String orderId;
    int carId;
    String lostDamageWaiverStatus;
    String lostDamageWaiverReturnStatus;
}

/**
 * @author :  Dinuth Dheeraka
 * Created : 2/22/2023 8:30 PM
 */
package lk.ijse.crs.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;
import org.hibernate.annotations.CreationTimestamp;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import java.time.LocalTime;
import java.util.Date;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class Orders {
    @Id
    String orderId;
    String customerId;
    String driverId;
    @CreationTimestamp
    Date orderRequestedDate;
    String deniedReason;
    String orderStatus;
    String confirmationStatus;
    Date pickupDate;
    LocalTime pickupTime;
    Date returnDate;
    LocalTime returnTime;
    String pickupVenue;
    String returnVenue;
    String note;
}

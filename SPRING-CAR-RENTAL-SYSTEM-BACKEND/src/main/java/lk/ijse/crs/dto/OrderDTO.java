/**
 * @author :  Dinuth Dheeraka
 * Created : 2/22/2023 10:21 PM
 */
package lk.ijse.crs.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;
import org.hibernate.annotations.CreationTimestamp;

import java.time.LocalTime;
import java.util.Date;

@Data
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class OrderDTO {
    int id;
    String orderId;
    String customerId;
    String driverId;
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

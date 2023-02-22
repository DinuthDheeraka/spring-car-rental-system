/**
 * @author :  Dinuth Dheeraka
 * Created : 2/22/2023 11:50 PM
 */
package lk.ijse.crs.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

import java.time.LocalTime;
import java.util.Date;

@Data
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class TempOrderDTO {
    int id;
    String orderId;
    String customerId;
    String driverId;
    String orderRequestedDate;
    String deniedReason;
    String orderStatus;
    String confirmationStatus;
    String pickupDate;
    String pickupTime;
    String returnDate;
    String returnTime;
    String pickupVenue;
    String returnVenue;
    String note;
}

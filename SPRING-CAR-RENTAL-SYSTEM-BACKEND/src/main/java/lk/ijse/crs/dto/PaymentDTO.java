/**
 * @author :  Dinuth Dheeraka
 * Created : 3/4/2023 1:51 AM
 */
package lk.ijse.crs.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class PaymentDTO {
    String paymentId;
    String orderId;
    Date date;
    double amount;
    String paymentType;
}

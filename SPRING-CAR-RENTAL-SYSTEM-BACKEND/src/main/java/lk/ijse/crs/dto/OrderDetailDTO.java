/**
 * @author :  Dinuth Dheeraka
 * Created : 2/28/2023 2:53 PM
 */
package lk.ijse.crs.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class OrderDetailDTO {
    int id;
    String orderId;
    int carId;
    String lostDamageWaiverStatus;
    String lostDamageWaiverReturnStatus;
}

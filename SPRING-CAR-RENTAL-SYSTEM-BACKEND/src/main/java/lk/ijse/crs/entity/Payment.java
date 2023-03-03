/**
 * @author :  Dinuth Dheeraka
 * Created : 3/4/2023 1:38 AM
 */
package lk.ijse.crs.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.CreationTimestamp;

import javax.persistence.Entity;
import javax.persistence.Id;
import java.util.Date;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Payment {
    @Id
    String paymentId;
    String orderId;
    @CreationTimestamp
    Date date;
    double amount;
    String paymentType;
}

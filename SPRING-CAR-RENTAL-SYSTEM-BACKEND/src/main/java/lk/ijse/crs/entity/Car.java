/**
 * @author :  Dinuth Dheeraka
 * Created : 2/22/2023 5:17 PM
 */
package lk.ijse.crs.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class Car {
    @Id
    int carId;
    String registrationId;
    double monthlyRate;
    double dailyRate;
    String colour;
    String brand;
    String type;
    double monthlyKm;
    double dailyKm;
    int numberOfPassengers;
    double priceForExtraKm;
    String fuelType;
    String transmissionType;
    String currentStatus;
}

/**
 * @author :  Dinuth Dheeraka
 * Created : 2/18/2023 9:00 PM
 */
package lk.ijse.crs.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

@Data
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class CarDTO {
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

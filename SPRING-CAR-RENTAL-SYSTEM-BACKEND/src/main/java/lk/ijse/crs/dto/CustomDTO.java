/**
 * @author :  Dinuth Dheeraka
 * Created : 2/26/2023 7:39 PM
 */
package lk.ijse.crs.dto;

import lombok.Data;

@Data
public class CustomDTO {
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

    int customerId;
    String nicNumber;
    String drivingLicenseNumber;
    String fullName;
    String homeAddress;
    String telephoneNumber;
    String emailAddress;

    String driverId;
    String driverNicNumber;
    String driverDrivingLicenseNumber;
    String driverFullName;
    String driverHomeAddress;
    String driverTelephoneNumber;
    String driverEmailAddress;
    String driverDriverStatus;

    String orderId;
    String orderCustomerId;
    String orderDriverId;
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

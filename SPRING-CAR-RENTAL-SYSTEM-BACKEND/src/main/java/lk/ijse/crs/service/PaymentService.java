package lk.ijse.crs.service;

import lk.ijse.crs.dto.PaymentDTO;

import java.util.List;

public interface PaymentService {

    void addPayment(PaymentDTO paymentDTO);
    List<String> findPaymentIds();
}

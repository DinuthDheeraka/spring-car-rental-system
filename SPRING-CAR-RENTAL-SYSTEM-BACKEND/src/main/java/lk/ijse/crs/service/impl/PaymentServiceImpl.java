/**
 * @author :  Dinuth Dheeraka
 * Created : 3/4/2023 1:51 AM
 */
package lk.ijse.crs.service.impl;

import lk.ijse.crs.dto.PaymentDTO;
import lk.ijse.crs.entity.Payment;
import lk.ijse.crs.repo.PaymentRepo;
import lk.ijse.crs.service.PaymentService;
import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Service
@Transactional
public class PaymentServiceImpl implements PaymentService {
    @Autowired
    PaymentRepo paymentRepo;

    @Autowired
    ModelMapper modelMapper;

    @Override
    public void addPayment(PaymentDTO paymentDTO) {
        paymentRepo.save(modelMapper.map(paymentDTO, Payment.class));
    }

    @Override
    public List<String> findPaymentIds() {
        return paymentRepo.findPaymentIds();
    }

    @Override
    public List<PaymentDTO> findAllPayments() {
        return modelMapper.map(paymentRepo.findAll(),new TypeToken<ArrayList<PaymentDTO>>(){}.getType());
    }
}

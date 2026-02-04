package com.propellow.auth;

import org.springframework.stereotype.Service;
import java.util.Map;
import java.util.Random;
import java.util.concurrent.ConcurrentHashMap;

@Service
public class OtpService {
    private final Map<String, String> otpStorage = new ConcurrentHashMap<>();

    public String generateOtp(String mobile) {
        String otp = String.format("%06d", new Random().nextInt(1000000));
        otpStorage.put(mobile, otp);
        return otp;
    }

    public boolean verifyOtp(String mobile, String otp) {
        String storedOtp = otpStorage.get(mobile);
        if (storedOtp != null && storedOtp.equals(otp)) {
            otpStorage.remove(mobile);
            return true;
        }
        return false;
    }
}

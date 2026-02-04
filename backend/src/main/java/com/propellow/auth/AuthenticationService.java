package com.propellow.auth;

import lombok.RequiredArgsConstructor;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class AuthenticationService {

    private final UserRepository repository;
    private final JwtService jwtService;
    private final OtpService otpService;

    public OtpResponse sendOtp(OtpRequest request) {
        String otp = otpService.generateOtp(request.getMobile());
        return OtpResponse.builder()
                .message("OTP sent successfully")
                .otp(otp) // Return for demo purposes
                .build();
    }

    public AuthenticationResponse verifyAndLogin(VerifyOtpRequest request) {
        if (!otpService.verifyOtp(request.getMobile(), request.getOtp())) {
            throw new RuntimeException("Invalid OTP");
        }
        var user = repository.findByMobile(request.getMobile())
                .orElseThrow(() -> new RuntimeException("User not found"));
        var jwtToken = jwtService.generateToken(user);
        return AuthenticationResponse.builder()
                .token(jwtToken)
                .build();
    }

    public AuthenticationResponse verifyAndRegister(VerifyOtpRequest request) {
        if (!otpService.verifyOtp(request.getMobile(), request.getOtp())) {
            throw new RuntimeException("Invalid OTP");
        }
        if (repository.findByMobile(request.getMobile()).isPresent()) {
            throw new RuntimeException("Mobile already exists");
        }
        var user = User.builder()
                .fullName(request.getFullName())
                .email(request.getEmail())
                .mobile(request.getMobile())
                .role(request.getRole())
                .build();
        repository.save(user);
        var jwtToken = jwtService.generateToken(user);
        return AuthenticationResponse.builder()
                .token(jwtToken)
                .build();
    }
}

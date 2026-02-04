package com.propellow.auth;

import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/auth")
@RequiredArgsConstructor
public class AuthenticationController {

    private final AuthenticationService service;

    @PostMapping("/send-otp")
    public ResponseEntity<OtpResponse> sendOtp(
            @RequestBody OtpRequest request
    ) {
        return ResponseEntity.ok(service.sendOtp(request));
    }

    @PostMapping("/verify-login")
    public ResponseEntity<AuthenticationResponse> verifyLogin(
            @RequestBody VerifyOtpRequest request
    ) {
        return ResponseEntity.ok(service.verifyAndLogin(request));
    }

    @PostMapping("/verify-register")
    public ResponseEntity<AuthenticationResponse> verifyRegister(
            @RequestBody VerifyOtpRequest request
    ) {
        return ResponseEntity.ok(service.verifyAndRegister(request));
    }
}

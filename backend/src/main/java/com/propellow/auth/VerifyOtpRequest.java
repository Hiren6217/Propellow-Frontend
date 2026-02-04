package com.propellow.auth;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class VerifyOtpRequest {
    private String mobile;
    private String otp;
    private String fullName; // Optional for registration
    private String email;    // Optional for registration
    private String role;     // Optional for registration
}

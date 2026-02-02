import Header from "@/components/Header/Header";
import SignupOtp from "@/components/Signup/SignupOtp";
import Footer from "@/components/Footer/Footer";

export const metadata = {
  title: "Verify OTP - Sign Up | Propellow",
  description: "Verify your OTP to complete registration on Propellow",
};

export default function SignupOtpPage() {
  return (
    <main>
      <Header />
      <SignupOtp />
      <Footer />
    </main>
  );
}

import Header from "@/components/Header/Header";
import LoginOtp from "@/components/Login/LoginOtp";
import Footer from "@/components/Footer/Footer";

export const metadata = {
  title: "Verify OTP | Propellow",
  description: "Verify your OTP to access your Propellow account",
};

export default function OtpPage() {
  return (
    <main>
      <Header />
      <LoginOtp />
      <Footer />
    </main>
  );
}

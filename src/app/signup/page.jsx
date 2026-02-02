import Header from "@/components/Header/Header";
import Signup from "@/components/Signup/Signup";
import Footer from "@/components/Footer/Footer";

export const metadata = {
  title: "Sign Up | Propellow",
  description: "Create your Propellow account",
};

export default function SignupPage() {
  return (
    <main>
      <Header />
      <Signup />
      <Footer />
    </main>
  );
}

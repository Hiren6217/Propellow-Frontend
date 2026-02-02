import Header from "@/components/Header/Header";
import Login from "@/components/Login/Login";
import Footer from "@/components/Footer/Footer";

export const metadata = {
  title: "Login | Propellow",
  description: "Login to your Propellow account",
};

export default function LoginPage() {
  return (
    <main>
      <Header />
      <Login />
      <Footer />
    </main>
  );
}

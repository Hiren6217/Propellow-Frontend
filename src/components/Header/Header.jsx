import "./Header.css";
import { Home } from "lucide-react";
import Link from "next/link";

export default function Header() {
  return (
    <header className="header">
      <Link href="/" className="logo">
        <Home className="logo-icon" size={28} />
        <span>Propellow</span>
      </Link>

      <nav>
        <a href="#">Buy</a>
        <a href="#">Rent</a>
        <a href="#">Commercial</a>
        <a href="#">Plots</a>
      </nav>

      <div className="actions">
        <button className="upgrade-btn">Upgrade</button>
        <Link href="/login">
          <button className="login-btn">Login</button>
        </Link>
      </div>
    </header>
  );
}

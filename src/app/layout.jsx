import "../styles/globals.css";
import { AuthProvider } from "@/context/AuthContext";

export const metadata = {
  title: "Propellow",
  description: "Real Estate Platform",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <AuthProvider>
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}

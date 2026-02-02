import "../styles/globals.css";

export const metadata = {
  title: "Propellow",
  description: "Real Estate Platform",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

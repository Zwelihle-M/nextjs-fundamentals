import "./globals.css";
import { Raleway } from "next/font/google";

const font = Raleway({ subsets: ["latin"] });

// Seo functionality Head
export const metadata = {
  title: "Nextjs App router Fundamentals",
  description: "Relearning",
};

const navigationStyle = {
  display: "flex",
  justifyContent: "space-evenly",
  padding:'30px',
  listStyleType: 'none',

};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={font.className}>
        <nav style={navigationStyle}>
          <li>Blog</li>
          <li>Dashboard</li>
          <li>Profile</li>
        
        </nav>
        {children}
      </body>
    </html>
  );
}

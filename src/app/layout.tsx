import "~/styles/globals.css";

import { Inter } from "next/font/google";
import { NavBar } from "components/NavBar";
import { UserProvider } from "context/UserContext";
import styles from "./index.module.css";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata = {
  title: "Ecomm Login",
  description: "Login Flow for Ecomm",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
      <html lang="en">
        <body className={inter.className}>
          <NavBar />
          <UserProvider>
            <main className={styles.main}>
              {children}
            </main>
          </UserProvider>
        </body>
      </html>
  );
}

import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { colors, fonts } from "@/lib/design-tokens";

export const metadata: Metadata = {
  title: "Paw Palace Pet Grooming | Vancouver's Premier Dog Grooming",
  description: "Premium pet grooming in Vancouver. Natural products. Happy dogs. Book your appointment today.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body
        style={{
          margin: 0,
          padding: 0,
          fontFamily: fonts.body,
          backgroundColor: colors.background,
          color: colors.textDark,
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <Header />
        <main style={{ flex: 1 }}>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

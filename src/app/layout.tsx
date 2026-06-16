import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Paw Palace Pet Grooming | Vancouver's Premier Dog Grooming",
  description: "Premium pet grooming in Vancouver. Natural products. Happy dogs. Book your appointment today.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

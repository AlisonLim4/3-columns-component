import "./globals.css";
import Container from "../components/Container";

export const metadata = {
  title: "Frontend Mentor | 3 Column Component",
  description: "A frontend mentor challenge",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-very-light-gray min-h-screen flex items-center text-[15px]">
        <Container>{children}</Container>
      </body>
    </html>
  );
}

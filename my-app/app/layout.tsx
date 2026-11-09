
import Footer from "./component/Footer";
import Nav from "./component/Nav";
import "./globals.css";
export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-full p-5">
        <Nav/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}

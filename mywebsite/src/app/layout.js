import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <body className="bgImg" >
        {children}
      </body>
    </html>
  );
}
5
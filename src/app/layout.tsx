
import  Menu  from "./components/Menu";
import "./globals.css";
import { Providers } from "./providers";


export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className='light'>
      <body>
        <Providers>
          {/* <Menu/> */}
          {children}
        </Providers>
      </body>
    </html>
  );
}

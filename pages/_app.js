import GlobalStyles from './../styles/GlobalStyles';
import { Manrope } from '@next/font/google';
import { CartProvider } from "../context/cart";

const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-manrope',
});

const App = ({ Component, pageProps }) => (
  <CartProvider>
    <main className={`${manrope.variable} font-sans`}>
      <GlobalStyles />
      <Component {...pageProps} />
    </main>
  </CartProvider>
);

export default App;

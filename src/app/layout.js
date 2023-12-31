import ProductsContext from './Context/contextprovider'
import Navbar from './components/navbar/page'
import Nav from './components/navigations/navigations'
import './globals.css'

export const metadata = {
  title: 'Ecommerce App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <ProductsContext>
        <body>
          <Navbar />
          <Nav />
          {children}
        </body>
      </ProductsContext>
    </html>
  )
}

import 'tailwindcss/tailwind.css'
import { AppProps } from 'next/app'
import { Toaster } from 'react-hot-toast'
import { store } from '@lib/redux/store'
import { Provider } from 'react-redux'
import Navbar from '@components/Navbar'
import '@styles/Global.scss'

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <Provider store={store}>
      <Navbar />
      <Component {...pageProps} />
      <Toaster />
    </Provider>
  )
}

export default MyApp

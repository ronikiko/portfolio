import '../styles/globals.css'
import Header from './components/layout/Header'
import Layout from './components/layout/Layout'
import { Globalstyle } from './components/styles/Globslstyle'

function MyApp({ Component, pageProps }) {
	return (
		<Layout>
			<Globalstyle />
			<Header />
			<Component {...pageProps} />
		</Layout>
	)
}

export default MyApp

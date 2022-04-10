import '../styles/globals.css'
import Layout from './components/layout/Layout'
import { Globalstyle } from './components/styles/Globslstyle'

function MyApp({ Component, pageProps }) {
	return (
		<Layout>
			<Globalstyle />
			<Component {...pageProps} />
		</Layout>
	)
}

export default MyApp

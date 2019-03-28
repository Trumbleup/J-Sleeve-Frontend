import Head from 'next/head';
import Navbar from './Navbar';
import Footer from './Footer';
import '../styles/styles.sass';

const Layout = (props) => (
	<div>
		<Head>
			<title>J-Sleeve</title>
			<meta name="viewport" content="width=device-width, initial-scale=1" />
			<script defer src="https://use.fontawesome.com/releases/v5.3.1/js/all.js"></script>
		</Head>
		<Navbar />
		{props.children}
		<Footer />
	</div>
);

export default Layout;
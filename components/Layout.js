import Head from 'next/head';
import Navbar from './Navbar';
import Footer from './Footer';
import '../styles/styles.sass';

const Layout = (props) => (
	<div>
		<Head>
			<title>J-Sleeve</title>
			<meta name="viewport" content="width=device-width, initial-scale=1" />
			<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css" integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf" crossorigin="anonymous"/>
		</Head>
		<Navbar />
		{props.children}
		<Footer />
	</div>
);

export default Layout;
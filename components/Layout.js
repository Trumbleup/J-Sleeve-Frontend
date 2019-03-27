import Head from 'next/head';
import Navbar from './Navbar';
import Footer from './Footer';

const Layout = (props) => (
	<div>
		<Head>
			<title>J-Sleeve</title>
			<meta name="viewport" content="width=device-width, initial-scale=1" />
			<link rel="stylesheet" 
			href='https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.4/css/bulma.css'>
			</link>
			<link rel="stylesheet" 
			href='https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.4/css/bulma.css.map'>
			</link>
			<link rel="stylesheet" 
			href='https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.4/css/bulma.min.css'>
			</link>
			<script defer src="https://use.fontawesome.com/releases/v5.3.1/js/all.js"></script>
		</Head>
		<Navbar />
		{props.children}
		<Footer />
	</div>
);

export default Layout;
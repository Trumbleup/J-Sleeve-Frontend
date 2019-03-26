
import Head from 'next/head';
import Navbar from './Navbar';

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
		</Head>
		<Navbar />
		{props.children}
	</div>
);

export default Layout;
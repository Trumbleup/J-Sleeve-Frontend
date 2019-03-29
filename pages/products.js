import Layout from '../components/Layout';
import Header from '../components/products/Header';
import ProductList from '../components/products/ProductList';


class Products extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return(
			<Layout>
			  <div>
			  	<Header />
			  	<div className='products-head'>
			  		<h2>JSleeve Products</h2>
			  		<ProductList />
			  	</div>
			  	<style jsx> {`
			  		.products-head{
			  			display: flex;
			  			flex-direction: column;
			  			justify-content: center;
			  			align-items: center;
			  			font-size: 20px;
			  		}
			  		h2 {
			  			font-size: 30px;
			  			padding: 20px;
			  		}
			  		`}</style>
			  </div>
		  </Layout>
		)
	}
}

export default Products;
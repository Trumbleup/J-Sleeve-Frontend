import Product from './Product';

const productList = [
	{
		name: 'JSleeve T-Shirt',
		image: '../../static/black-shirt.png',
		price: '$22.00'
	},
	{
		name: 'JSleeve Crew',
		image: '../../static/gray-shirt.png',
		price: '$22.00'
	},
	{
		name: 'JSleeve Pull Over',
		image: '../../static/black-pullover.png',
		price: '$22.00'
	},
	{
		name: 'JSleeve Tank',
		image: '../../static/tank.png',
		price: '$22.00'
	},
	{
		name: 'Adult JSleeve Fleece Joggers',
		image: '../../static/adult-fleece-joggers.png',
		price: '$22.00'
	},
	{
		name: 'Womens Gray Pullover',
		image: '../../static/womens-gray-pullover.png',
		price: '$22.00'
	}
];

const ProductList = () => (
	<div>
		<div className='container is-widescreen product-list'>
			{productList.map(product => {
				return(
					<Product 
					name={product.name}
					image={product.image}
					price={product.price} 
					/>
				)
			})}
		</div>
		<style jsx> {`
			.product-list {
				display: flex;
				flex-direction: row;
				flex-wrap: wrap;
			}
			.container {
				justify-content: center;
			}
		`}</style>
	</div>
)

export default ProductList
const Product = ({name, image, price}) => (
	<div>
		<div className='product'>
			<h2>{name}</h2>
			<img src={image}/>
			<p>{price}</p>
		</div>
		<style jsx>{`
			.product {
				display: flex;
				flex-direction: column;
				justify-content: space-between;
				align-items: center;
				height: 400px;
				width: 300px;
				border: 1px solid black;
				margin: 10px;
			}
		`}</style>
	</div>
)

export default Product
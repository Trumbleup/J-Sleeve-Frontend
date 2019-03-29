
class Product extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			hovered: false
		}
	}

	handleHover = (e) => {
		(!this.state.hovered) ? this.setState({hovered: true}) : this.setState({hovered: false})
	}
	render() {
		const {hovered} = this.state;
		return (
			<div>
				<div onMouseEnter={this.handleHover} onMouseLeave={this.handleHover} className='product'>
					<h2>{this.props.name}</h2>
					<img src={this.props.image}/>
					{(!hovered) ? 
						<p>{this.props.price}</p> 
						:
					  	<a className="button is-primary">Add to Cart</a>
					}
				</div>
				<style jsx>{`
					.product {
						display: flex;
						flex-direction: column;
						justify-content: space-between;
						align-items: center;
						height: 400px;
						width: 300px;
						color: white;
						background-image: linear-gradient(to right, #455050, #627676);
						border: 1px solid black;
						border-radius: 20px;
						padding: 10px;
						margin: 10px;
					}
				`}</style>
			</div>
		)
	}
}

export default Product
class NewsletterForm extends React.Component {
	constructor() {
		super();
		this.state = {
			email: ''
		}
	}

	handleChange = (e) => {
		this.setState({
			email: e.target.value
		})
		console.log(this.state.email)
	}

	render(){
		return(
			<div>
				<div className='newsletter-container'>
					<h1>STAY UP TO DATE</h1>
					<p>Sign up to get our newsletter for all the latest news, shows, and events</p>
					<div className='field'>
						<div className='control'>
							<input onChange={this.handleChange} className='input' type='text' placeholder='Email Address'/>
						</div>
						<div class="control">
						  <button class="button is-primary">Submit</button>
						</div>
					</div>
				</div>
				<style jsx>{`
					.newsletter-container {
						display: flex;
						flex-direction: column;
						justify-content: center;
						align-items: center;
						margin-left: auto;
						margin-right: auto;
						width: 500px;
						height: 250px;
					}
					h1 {
						font-size: 30px;
						padding: 10px;
					}
					p {
						padding: 10px;
						white-space: nowrap;
					}
					.field {
						display: flex;
						flex-direction: row;
					}
					`}</style>
			</div>
		)
	}
}

export default NewsletterForm
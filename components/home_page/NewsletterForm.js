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
				<div className='wrapper'>
					<div className='newsletter-container'>
						<h1>Subscribe To Our NewsLetter</h1>
						<p>Sign up to get our newsletter for all the latest news, shows, and events</p>
						<div className='field'>
							<div className='control'>
								<input onChange={this.handleChange} className='input is-medium' type='text' placeholder='Email Address'/>
							</div>
							<div className="control">
							  <button className="button is-primary is-medium">Submit</button>
							</div>
						</div>
					</div>
				</div>
				<style jsx>{`
					.wrapper {
						width: 100%;
						display: flex;
						justify-content: center;
						padding: 100px;
					}
					.newsletter-container {
						display: flex;
						flex-direction: column;
						justify-content: center;
						align-items: center;
						max-width: 1000px;
						height: 100px;
					}
					h1 {
						font-size: 60px;
					}
					p {
						white-space: nowrap;
						font-size: 20px;
					}
					.field {
						display: flex;
						flex-direction: row;
						margin: 10px;
					}
					input {
						width: 400px;
					}
					`}</style>
			</div>
		)
	}
}

export default NewsletterForm
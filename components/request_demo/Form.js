class DemoForm extends React.Component {
	constructor() {
		super();
		this.state = {
			fname: '',
			lname: '',
			email: '',
			phone: '',
			program: '',
			location: ''
		}
	}

	handleChange = (e) => {
		this.setState({
			[e.target.name] : e.target.value
		});
		console.log(e.target.value)
	}

	render(){
		return(
			<div>
				<div className='wrapper'>
					<div className='header-container'>
						<h2>Fill out the form below to request a demo of J-Sleeve!</h2>
					</div>
					<div className='container box'>
						<form>
							<div className="field">
							  <label className="label">First Name</label>
							  <div className="control">
							    <input onChange={this.handleChange} className="input" type="text" name='fname' placeholder="Text input"/>
							  </div>
							</div>
							<div className="field">
							  <label className="label">Last Name</label>
							  <div className="control">
							    <input onChange={this.handleChange} className="input" type="text" name='lname' placeholder="Text input"/>
							  </div>
							</div>
							<div className="field">
							  <label className="label">Email Address</label>
							  <div className="control">
							    <input onChange={this.handleChange} className="input" type="text" name='email' placeholder="Text input"/>
							  </div>
							</div>
							<div className="field">
							  <label className="label">Phone Number</label>
							  <div className="control">
							    <input onChange={this.handleChange} className="input" type="text" name='phone' placeholder="Text input"/>
							  </div>
							</div>
							<div className="field">
							  <label className="label">Program Name</label>
							  <div className="control">
							    <input onChange={this.handleChange} className="input" type="text" name='program' placeholder="Text input"/>
							  </div>
							</div>
							<div className="field">
							  <label className="label">City and State</label>
							  <div className="control">
							    <input onChange={this.handleChange} className="input" type="text" name='location' placeholder="Text input"/>
							  </div>
							  <a className="button is-large is-fullwidth is-outlined">Submit</a>
							</div>
						</form>
					</div>
				</div>
				<style jsx>{`
					.wrapper {
						display: flex;
						flex-direction: column;
						justify-content: center;
						align-items: center;
						width: 100%;
					}
					.header-container {
						font-size: 30px;
						margin: 30px;
					}
					.button {
						margin-top: 30px;
						background-color: #F8A631;
					}
					`}</style>
			</div>
		)
	}
}

export default DemoForm
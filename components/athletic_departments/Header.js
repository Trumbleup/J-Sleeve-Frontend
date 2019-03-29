import Link from 'next/link';

const Header = () => (
	<div>
		<div id='hoopers-header'>
			<div className="hero-image">
				<div className="hero-text text-container">
					<h1>Athletic Departments</h1>
					{/*<h2>How J-Sleeve Benefits You</h2>
					<div className="buttons are-medium">
					  <Link href='/products'><a className="button is-link">Shop Now</a></Link>
					  <a className="button is-info">Learn More</a>
					</div>*/}
				</div>
			</div>
		</div>
		<style jsx> {`
			#hoopers-header {
				height: 400px
			}
			.hero-image {
				background-image: url("../static/basketball.png");
				height: 100%;
				background-position: center;
				background-repeat: no-repeat;
				background-size: cover;
				position: relative;
			}
			.hero-text {
				text-align: center;
				position: absolute;
				top: 50%;
				left: 20%;
				transform: translate(-50%, -50%);
				color: white;
			}
			.text-container {
				height: 30%;
				display: flex;
				flex-direction: column;
				justify-content: space-around;
			}
			h1 {
				font-size: 60px;
			}
			h2 {
				font-size: 40px;
				text-align: left;
			}
			.buttons {
				margin-top: 20px;
			}
			.button {
				font-size: 30px;
			}
		`}</style>
	</div>
)

export default Header
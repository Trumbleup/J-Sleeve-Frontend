import Link from 'next/link';

const Header = () => (
	<div>
		<div id='home-header'>
			<div className="hero-image">
				<div className="hero-text text-container">
					<h1>Introducing J-Sleeve</h1>
					<h2>Strive To Be Great</h2>
					<div className="buttons are-medium">
					  <Link href='/products'><a className="button is-link">Shop Now</a></Link>
					  <a className="button is-info">Learn More</a>
					</div>
				</div>
			</div>
		</div>
		<style jsx> {`
			#home-header {
				height: 600px
			}
			.hero-image {
				display: flex;
				align-items: center;
				background-image: url("../static/basketball.png");
				height: 100%;
				background-position: center;
				background-repeat: no-repeat;
				background-size: cover;
			}
			.hero-text {
				text-align: center;
				color: white;
				padding: 20px;
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
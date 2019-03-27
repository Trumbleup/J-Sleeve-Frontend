import Link from 'next/link';

const Header = () => (
	<div>
		<div id='home-header'>
			<div className="hero-image">
				<div className="hero-text text-container">
					<h1>Introducing J-Sleeve</h1>
					<h2>Strive To Be Great</h2>
					<div class="buttons are-medium">
					  <Link href='/products'><a class="button is-link">Shop Now</a></Link>
					  <a class="button is-info">Learn More</a>
					</div>
				</div>
			</div>
		</div>
		<style jsx> {`
			#home-header {
				height: 600px
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
				top: 40%;
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
				font-size: 50px;
			}
			h2 {
				font-size: 30px;
				text-align: left;
			}
			.button {
				font-size: 30px;
			}
		`}</style>
	</div>
)

export default Header
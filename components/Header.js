const Header = () => (
	<div>
		<div id='home-header'>
			<div className="hero-image">
				<div className="hero-text">
					<h1>J-Sleeve</h1>
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
				top: 50%;
				left: 50%;
				transform: translate(-50%, -50%);
				color: white;
				font-size: 40px;
			}
		`}</style>
	</div>
)

export default Header
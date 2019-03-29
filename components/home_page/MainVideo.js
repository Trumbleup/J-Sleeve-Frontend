const MainVideo = () => (
	<div>
		<section className="section">
			<div className="container video-container">
				<a className="button is-large is-outlined">Play Video</a>
			</div>
		</section>
		<style jsx> {`
			.video-container {
				display: flex;
				justify-content: center;
				align-items: center;
				background-image: url("../../static/video-background.png");
				background-position: top center;
				border: 1px solid black;
				height: 500px;
				width: 80%;
			}
			.button {
				background: rgba(0, 0, 0, 0.0);
				font-size: 30px;
				font-weight: bold;
			}
			a {
				color: white;
				padding: 40px;
			}
			a :hover {
				color: white;
			}
		`}</style>
	</div>
)

export default MainVideo;
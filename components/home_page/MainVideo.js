const MainVideo = () => (
	<div>
		<section className="section">
			<div className="container video-container">
				<a className="button is-large">Play Video</a>
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
		`}</style>
	</div>
)

export default MainVideo;
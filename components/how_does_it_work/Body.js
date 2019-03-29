const Body = () => (
	<div>
		<section>
			<div className='container'>
				<h1>The J-Sleeve is designed to help you and your team improve! Explore how here!</h1>
				<div className='section-container'>
					<div className='image-container'>
						<img src='../static/JSleeve_Product_Collage_720x.png'></img>
					</div>
					<div className='text-container'>
						<h2>Sensors To Capture Your Specific Form</h2>
						<p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
					</div>
				</div>
				<div className='section-container'>
					<div className='image-container'>
						<img src='../static/JSleeve_Product_Collage_720x.png'></img>
					</div>
					<div className='text-container'>
						<h2>Compression Sleeve To Insert Sensors</h2>
						<p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
					</div>
				</div>
				<div className='section-container'>
					<div className='image-container'>
						<img src='../static/JSleeve_Product_Collage_720x.png'></img>
					</div>
					<div className='text-container'>
						<h2>Mobile Application and Webpage Access to View Live and Historical Data</h2>
						<p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
					</div>
				</div>
				<div className='section-container'>
					<div className='image-container'>
						<img src='../static/JSleeve_Product_Collage_720x.png'></img>
					</div>
					<div className='text-container'>
						<h2>Play Diagraming Software To Write Plays and Leverage Data From The JSleeve For Each Player To Increase Team Performance</h2>
						<p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
					</div>
				</div>
			</div>
		</section>
		<style jsx>{`
			.container {
				display: flex;
				flex-direction: column;
				justify-content: center;
				align-items: center;
				margin-top: 40px;
			}
			.section-container {
				display: flex;
				flex-direction: row;
				flex-wrap: wrap-reverse;
				justify-content: center;
				align-items: space-around;
				padding: 20px;
			}
			.image-container {
				margin-right: 20px;
			}
			.text-container {
				display: flex;
				flex-direction: column;
				justify-content: center;
				align-items: space-around;
				width: 600px;
				height: 400px;
			}
			h1 {
				font-size: 32px;
				margin-bottom: 30px;
			}
			h2 {
				font-size: 30px;
			}
			img {
				width: 600px;
				height: 300px;
			}
		`}</style>
	</div>
)

export default Body
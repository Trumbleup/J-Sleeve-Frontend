const Card = () => (
	<div>
		<div className="tile is-ancestor">
		    <div className="tile is-6 is-vertical is-parent">
		    	<div className='tile is-child box shop-tile'>
		    		<img src='../../static/black-shirt.png'></img>
		    		<img src='../../static/gray-shirt.png'></img>
		    		<img src='../../static/tank.png'></img>
		    		<p>Shop J-Sleeve</p>
		    	</div>
		    	<div className='tile is-child box mobile-app-tile'>
		    		<h2>J-Sleeve Mobile App</h2>
		    		<p>Pre-order the J-Sleeve App today!</p>
		    		<img src='../../static/phone.png'></img>
		    	</div>
		    </div>
		    <div className="tile is-6 is-vertical is-parent">
		    	<div className='tile is-child box how-does-it-work-tile'>
		    		<p>How Does it Work?</p>	
		    	</div>
		    	<div className='tile is-child box learn-more-tile'>
		    		<p>Learn More</p>	
		    	</div>
		    </div>
		</div>
		<style jsx> {`
	  		img {
	  			display: block;
	  			margin-left: auto;
	  			margin-right: auto;
	  		}
	  		.shop-tile {
	  			display: flex;
	  			flex-direction: row;
	  			position: relative;
	  			background-color: black
	  		}
	  		.shop-tile p {
	  			position: absolute;
	  			text-align: center;
	  			top: 38%;
	  			left: 36%;
	  			font-size: 30px;
	  			color: white;
	  		}
	  		.learn-more-tile {
	  			display: flex;
	  			justify-content: center;
	  			align-items: center;
	  			font-size: 30px;
	  			color: white;
				background-image: url("../static/learn-more-image.png");
				height: 100%;
				background-position: center;
				background-repeat: no-repeat;
				background-size: cover;
				position: relative;
			}
			.mobile-app-tile {
				display: flex;
				flex-direction: column;
	  			justify-content: center;
	  			align-items: center;
	  			font-size: 20px;
	  			color: white;
				background-image: url("../static/mobile-app-background.png");
				height: 100%;
				background-position:center;
				background-repeat: no-repeat;
				background-size: cover;
				position: relative;
			}
			.how-does-it-work-tile {
				display: flex;
				flex-direction: column;
	  			justify-content: center;
	  			align-items: center;
	  			font-size: 30px;
	  			color: white;
				background-image: url("../static/how-does-it-work-image.png");
				height: 100%;
				background-position:center;
				background-repeat: no-repeat;
				background-size: cover;
				position: relative;
			}
			.mobile-app-tile h2 {
				font-size: 30px;
			}
			.mobile-app-tile img {
				margin-top: 10px;
			}
	  	`}</style>
	</div>
);

export default Card
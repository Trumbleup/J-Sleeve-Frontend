import Card from './Card';

const Body = () => (
	<div>
	  	<section>
	  		<div className="container">
	  		  <div className='intro-container'>
	  		  	<img src='../../static/jsleeve logo.png' className='logo'></img>
	  		  	<p>Synergy7 is a tech company founded in 2015 that merges human insight with technological innovation to help athletes achieve optimal athletic performance. Our signature product is the JSleeve, a wearable performance diagnostic that accelerates muscle memory and boosts athletic performance. We have designed the JSleeve to improve a basketball athlete's overall game by generating and storing real-time data on a player's form, field goal percentage, floor positioning, and stamina.  You can use the JSleeve in any arena anywhere in the world.</p>
	  		  </div>
	  		  <Card />
			</div>
	  	</section>
	  	<style jsx> {`
	  		section {
	  			padding: 10px;
	  		}
	  		img {
	  			display: block;
	  			margin-left: auto;
	  			margin-right: auto;
	  		}
	  		.logo {
	  			padding-bottom: 20px;
	  		}
	  		.intro-container {
	  			width: 60%;
	  			padding: 20px;
	  			margin-left: auto;
	  			margin-right: auto;
	  			margin-bottom: 20px;
	  			font-size: 20px;
	  		}
	  	`}</style>	
	</div>
)

export default Body
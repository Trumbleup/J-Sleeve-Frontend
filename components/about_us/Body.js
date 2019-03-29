const Body = () => (
	<div>
		<div className='container'>
	  		<img src='../static/jsleeve-team.png'></img>
	  		<div className='bio-container'>
	  			<h2>Founder-CEO Jeremy Henderson</h2>
	  			<p>Jeremy’s passion for basketball began at a very early age playing in the YMCA Little Dribblers League.  His love for the game intensified as he grew from playing pick-up games with his friends to shooting guard for his high school team and later at Florida A&M University where he would earn his B.S. in Business Administration. The beat of the ball on the pavement was the soundtrack to his life. He understood basketball’s ability to unite players across all walks of life and particularly how it serves to empower and strengthen the youth within the community.</p>
	  			<p>His lifelong passion for basketball drove him to merge his love for the game with his respect for the transformation power of technology to create Synergy7 and its first athletic wearable product the JSleeve.  Through the JSleeve we will create a technology that is as beneficial to kids playing in the neighborhood as it is to athletes at the highest-level emulating sports equalizing effects.</p>
	  		</div>
		</div>
		<style jsx>{`
			.container {
				display: flex;
				flex-direction: row;
				justify-content: space-around;
				align-items: center;
				margin-top: 20px;
			}
			.bio-container {
				display: flex;
				flex-direction: column;
				justify-content: space-around;
				height: 900px;
				font-size: 20px;
				margin-left: 60px;	
			}
			h2 {
				font-size: 40px;
				font-weight: bold;
			}
		`}</style>	
  	</div>
)

export default Body
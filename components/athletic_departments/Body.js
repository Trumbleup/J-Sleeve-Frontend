import Link from 'next/link';

const Body = () => (
	<div>
		<section className='container body-container '>
			<div className='sub-heading'>
				<h1>How does J-Sleeve benefit your team?</h1>
			</div>
			<div className='container box gradientOne'>
				<div className=''>
					<h3>Shot Count</h3>
				</div>
				<div>
					<p>Track your shot counts with J-Sleeve, and see your progress overtime.</p>
				</div>
			</div>
			<div className='container box gradientTwo'>
				<div className=''>
					<h3>Form Accuracy</h3>
				</div>
				<div>
					<p>Track your Form Accuracy with J-Sleeve, and see your progress overtime.</p>
				</div>
			</div>
			<div className='container box gradientOne'>
				<div className=''>
					<h3>Player Fatigue</h3>
				</div>
				<div>
					<p>Track how fatigue affects your performance with J-Sleeve, and see your progress overtime.</p>
				</div>
			</div>
			<div className='container box gradientTwo'>
				<div className=''>
					<h3>Play Diagramming with Optimizing Software</h3>
				</div>
				<div>
					<p>Track the amount of field goals in your practice or performance</p>
				</div>
			</div>
			<div className='container box gradientOne'>
				<div className=''>
					<h3>Advanced Analytics</h3>
				</div>
				<div>
					<p>With our J-Sleeve process, you can share all statistics and data with your coach, team, or friends!</p>
				</div>
			</div>
			<div className='container box gradientTwo'>
				<div className=''>
					<h3>Remote Recruiting</h3>
				</div>
				<div>
					<p>With our J-Sleeve process, you can share all statistics and data with your coach, team, or friends!</p>
				</div>
			</div>
		</section>
		<style jsx>{`
			.body-container {
				display: flex;
				flex-direction: column;
				align-items: center;
				justify-content: center;
			}
			.sub-heading {
				display: block;
				font-size: 40px;
				padding: 20px;
				margin: 50px;
			}
			.box {
				display: flex;
				flex-direction: column;
				justify-content; space-around;
				align-items: start;
				padding: 60px;
			}
			.gradientOne {
				background-image: linear-gradient(to right, #765A59, #645555);
			}
			.gradientTwo {
				background-image: linear-gradient(to right, #5E5E5E, #7F7E7E);
			}
			h3 {
				font-size: 40px;
				color: white;
			}
			p {
				font-size: 18px;
				color: white;
			}
		`}</style>
	</div>
);


export default Body
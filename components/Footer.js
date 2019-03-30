import Link from 'next/link';

const Footer = () => (
	<div>
		<footer className="footer">
		  <div className="content">
		    <p>
		      Types of Users 
		    </p>
		    <ul>
		    	<Link href='individual_hoopers'><li>Individual Hoopers</li></Link>
		    	<Link href='athletic_department'><li>Athletic Department</li></Link>
		    </ul>
		  </div>
		  <div className="content">
		    <p>
		      Learn More
		    </p>
		    <ul>
		    	<Link href='about_us'><li>About Us</li></Link>
		    	<Link href='how_does_it_work'><li>How Does It Work?</li></Link>
		    	<Link href='media'><li>Media</li></Link>
		    </ul>
		  </div>
		  <div className="social-media-container">
		    <p>
		      Social Media
		    </p>
		    <div className='icons-container'>
		    	<a href='https://www.facebook.com/JSleeve7-165287014235565/' target='_blank'><i className="fab fa-facebook-square fa-lg"></i></a>
		    	<a href='https://twitter.com/jsleeve7' target='_blank'><i className="fab fa-twitter fa-lg"></i></a>
		    	<a href='https://www.instagram.com/jsleeve7/' target='_blank'><i className="fab fa-instagram fa-lg"></i></a>
		    </div>
		  </div>
		</footer>
		<style jsx> {`
			.footer {
				display: flex;
				flex-direction: row;
				justify-content: center;
				align-items: start;
				margin-top: 50px;
				background-color: gray;
				color: white;
			}
			p {
				font-size: 24px;
			}
			li {
				font-size: 14px;
			}
			.content {
				display: flex;
				flex-direction: column;
				justify-content: start;
				align-items: center;
				margin: 30px;
			}
			ul {
				list-style-type: none;
				cursor: pointer;
				margin: 0px;
			}
			.social-media-container {
				display: flex;
				flex-direction: column;
				justify-content: start;
				align-items: center;
				margin: 30px;
			}
			.icons-container {
				display: flex;
				flex-direction: row;
				flex-direction: space-around;
			}
			.icons-container i {
				margin: 10px;
			}
		`}</style>
	</div>
)

export default Footer
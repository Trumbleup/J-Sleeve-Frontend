import Link from 'next/link';

const Navbar = () => (
	<div>
		<nav className="navbar" role="navigation" aria-label="main navigation">
		  <div className="navbar-brand">
		    <a className="navbar-item" href="https://bulma.io">
		      <img src="../static/jsleeve logo.png" width="50" height="50" />
		    </a>
		    <a role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
		      <span aria-hidden="true"></span>
		      <span aria-hidden="true"></span>
		      <span aria-hidden="true"></span>
		    </a>
		  </div>
		  <div id="navbarBasicExample" className="navbar-menu">
		    <div className="navbar-start">
		      <Link href='/'><a className="navbar-item">Home</a></Link>
		      <Link href='/individual_hoopers'><a className="navbar-item">Individual Hoopers</a></Link>
		      <Link href='/athletic_departments'><a className="navbar-item">Athletic Departments</a></Link>
		      <Link href='/request_demo'><a className="navbar-item">Request Demo</a></Link>
		      <div className="navbar-item has-dropdown is-hoverable">
		        <a className="navbar-link">
		          Learn More
		        </a>
		        <div className="navbar-dropdown">
		          <Link href='/about_us'><a className="navbar-item">About Us</a></Link>
		          <Link href='/media'><a className="navbar-item">Media</a></Link>
		          <Link href='/how_does_it_work'><a className="navbar-item">How Does It Work?</a></Link>
		          <hr className="navbar-divider" />
		          <Link href='/request_demo'><a className="navbar-item">Request Demo</a></Link>
		        </div>
		      </div>
		    </div>
		    <div className="navbar-end">
		      <div className="navbar-item">
		        <div className="buttons">
		          <a className="button is-primary">
		            <strong>Sign up</strong>
		          </a>
		          <a className="button is-light">
		            Log in
		          </a>
		        </div>
		      </div>
		    </div>
		  </div>
		</nav>
  </div>
)

export default Navbar;
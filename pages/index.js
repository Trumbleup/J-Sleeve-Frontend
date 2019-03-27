import Layout from '../components/Layout';
import Header from '../components/home_page/Header';
import Body from '../components/home_page/Body';
import MainVideo from '../components/home_page/MainVideo';
import NewsletterForm from '../components/home_page/NewsletterForm';


const Index = () => (
  <Layout>
	  <div>
	  	<Header />
	  	<Body />
	  	<MainVideo />
	  	<NewsletterForm />
	  </div>
  </Layout>
);

export default Index;
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Head from '~/components/Head';
import Highlights from '~/components/HighLights';
import CompanySlider from '~/components/CompanySlider'
import SocialMediaComponent from '~/components/socialmedia';

const HomePage = () => {
  return (
    <div>
      <title>Menuka Risith</title>
      <Navbar />
      <Head />
      <Highlights />
      <CompanySlider />
      <SocialMediaComponent />
      <Footer />
    </div>
  );
};

export default HomePage;

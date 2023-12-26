import Header from "./Header/Header";
import Logo from "./Logo/Logo";
import ImgConteinerContent from "./Content/ImgConteinerContent";
import ContentMain from "./ContentMain/ContentMain";
import Clients from "./OurClients/OurClients";
import Footer from "./Footer/Footer";

function App() {
  return (
    <div className="App">
        <Logo/>
        <Header/>
        <ImgConteinerContent/>
        <ContentMain/>
        <Clients/>
        <Footer/>
    </div>
  );
}

export default App;

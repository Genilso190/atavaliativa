
import Banner from "./components/Banner";
import Historia from "./components/Historia";
import Plans from "./components/Plans";
import Header from "./components/Header";
import About from "./components/About";
import Footer from "./components/Footer";


export default function Home() {
  return (
    <div>
       <Header/>
        <Banner/>
       <Historia/>  
       <Plans/> 
       <About/>
       <Footer/>

    </div>
  );
}
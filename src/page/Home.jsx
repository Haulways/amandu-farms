import About from "../components/About";
import Collaborate from "../components/Collaborate";
import FAQ from "../components/FAQ";
import Header from "../components/Header";
import Products from "../components/Products";
import Services from "../components/Services";
import Stats from "../components/Stats";

export default function Home(){
    return(
        <>
          <Header />
          <Stats />
          <About />
          <Products />
          <Services />
          <Collaborate />
          <FAQ />
        </>
    )
}
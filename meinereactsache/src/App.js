import logo from './logo.svg';
import React, { useEffect } from "react";
import './App.css';
import Aos from "aos";
import "aos/dist/aos.css";
import luftaufnahme from "./img/P1040870_bearbeitet.jpg"
import versicherungenLogo from "./img/uelzenerVersicherungenLogo.png"


const App = () => {

  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);
  return (
    <div className="snap-y">
      <header className='h-screen bg-cover bg-center bg-[url("./img/P1050064_bearbeitet.jpg")] bg-zinc-800 bg-blend-overlay mb-5'>
        <div className="md:flex">
          <div className="md:ml-11 flex-initial">
            <img src={versicherungenLogo} className="w-screen md:w-2/3 pt-6 md:pt-40"/>
            <h1 className='pt-11 md:ml-3  sm:px-2 text-4xl md:text-5xl text-center md:text-left font-bold text-white '>Praktikumsbericht</h1>
          </div>
          <div  className="flex-initial mt-32 md:mt-72 md:mr-4 text-center md:text-left">
            <a className="transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:bg-indigo-500 duration-300 text-white font-bold py-2 px-4 rounded" href="#down">Unternehmen</a>
          </div>
        </div>
        
      </header>
      
      <div className='pb-32 p-3'>
        <div data-aos="slide-right" className="absolute bg-blue-400 px-24 opacity-70 -z-50 mt-1">&nbsp;</div>
        <div data-aos="slide-right" className='pb-6 text-2xl font-bold z-50 ueberschrift' id="down">Unternehmen</div>
        <div className='md:flex'>
          <div className='flex-initial md:w-1/2'>
            <div data-aos="zoom-out">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.  
            </div>   
          </div>
          <div className='flex-initial md:w-1/2 pt-6 md:pt-0'>
          <img src={luftaufnahme} data-aos="slide-up" className='drop-shadow-xl rounded-xl'/>
          </div>
        </div>

      </div>
      <div className='p-3'>
      <div data-aos="slide-right" className="absolute bg-blue-400 px-48 opacity-70 -z-50 mt-1">&nbsp;</div>
        <div data-aos="slide-right" className='pb-6 text-2xl font-bold z-50 ueberschrift' id="down">Abläufe des Unternehmens</div>
      <div className="pb-72">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</div>
      </div>
      <div className='p-3'>
      <div data-aos="slide-right"className='text-2xl bg-blue-400 font-bold'>
        Vor- und Nachteile zunehmender Digitalisierung
      </div>
      <div className="pb-72">
      Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
      </div>
      </div>
    </div>
  );
}

export default App;

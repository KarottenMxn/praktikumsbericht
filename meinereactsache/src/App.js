import logo from './logo.svg';
import React, { useEffect } from "react";
import './App.css';
import Aos from "aos";
import "aos/dist/aos.css";
import luftaufnahme from "./img/P1040870_bearbeitet.jpg"
import versicherungenLogo from "./img/uelzenerVersicherungenLogo.png"
import gebaudeSvg from "./img/gebaude.svg"
import monitorSvg from "./img/bildschirm.svg"


const App = () => {

  useEffect(() => {
    Aos.init({ duration: 1500 , delay: 50});
  }, []);
  return (
    <div className="snap-y">
      <header className='h-screen bg-cover bg-center bg-[url("./img/P1050064_bearbeitet.jpg")] bg-zinc-800 bg-blend-overlay mb-5'>
        <div className="md:flex">
          <div className="md:ml-11 flex-initial">
            <img src={versicherungenLogo} className="w-screen md:w-2/3 pt-24 md:pt-40"/>
            <h1 className='pt-11 md:ml-3  sm:px-2 text-4xl md:text-5xl text-center md:text-left font-bold text-white'>Praktikumsbericht</h1>
          </div>
          <div className="flex-initial mt-32 md:mt-72 md:mr-4 text-center md:text-left">
            <a className="transition ease-in-out delay-150 bg-lime-600 hover:-translate-y-1 hover:bg-lime-700 duration-300 text-white font-bold py-2 px-4 rounded" href="#down">Unternehmen</a>
          </div>
        </div>
        
      </header>
      
      <div className='pb-32 p-3'>
      
            <img src={gebaudeSvg} width="100px" className='absolute ml-5 rotate-12 opacity-30 translate-x-48' id="down"/>
            <img src={monitorSvg} width="100px" className='absolute -rotate-12 opacity-40 translate-x-[8rem] md:translate-x-[30rem] translate-y-[60rem] md:translate-y-[28rem]'/>
       
            <div data-aos="slide-right" className="absolute bg-lime-500 px-20 opacity-70 -z-50 mt-1">&nbsp;</div>
            <div data-aos="slide-right" className='pb-3 text-2xl font-bold z-50'>Unternehmen</div>
         
        
          
        

        <div className='md:flex'>
          <div className='flex-initial md:w-1/2'>
            <div data-aos="zoom-out leading-normal">

            Die Uelzener Versicherungen wurden 1873 als die <b>Viehversicherungsbank f??r die Provinz Hannover</b> gegr??ndet. Das Unternehmen hat ca. <b>350 Mitarbeiter</b>. Das Unternehmen hatte im Jahr 2020 <b>1.096.603 Vertr??ge</b> und der Umsatz stieg im Vergleich zum Vorjahr um 11,4% auf <b>142,7 Mio. Euro.</b> Den hohen Anstieg des Umsatzes soll eine Folge der Coronapandemie sein, in der viele Menschen eigene Haustiere gekauft und versichert haben. Die Uelzener Versicherungen bieten OP- und Krankenversicherungen f??r Pferde, Hunde und Katzen an, bewegen sich also im terti??ren Sektor. Entscheidene betriebliche Ver??nderungen sind die Digitalisierung im Bereich der automatischen Antragserstellung. Besonders macht das Unternehmen, dass sie die erste Versicherungsgesellschaft waren, die eine Tierkrankenversicherung angeboten haben.
            


            </div>   
          </div>
          <div className='flex-initial md:w-1/2 pt-6 md:pt-0'>
          <img src={luftaufnahme} data-aos="slide-up" className='drop-shadow-xl rounded-xl'/>
          </div>
        </div>

      </div>
      <div className='p-3'>
      <div data-aos="slide-right" className="absolute bg-lime-500 px-48 opacity-70 -z-50 mt-1">&nbsp;</div>
        <div data-aos="slide-right" className='pb-6 text-2xl font-bold z-50 ueberschrift' id="down">Abl??ufe des Unternehmens</div>
      <div className="pb-72">

        Die Uelzener Versicherungen stellen Tierversicherungen zur verf??gung. Um die zum Teil sehr hohen Summen auszahlen zu k??nnen, wird mit Banken zusammengearbeitet.

        schadensfall bearbeitung (bei zb OP)

        wird von service center aufgenommen,
        alle angaben werden ins system gespielt,
        sachbearbeiter pr??ft sch??den (bilder dazu) in akte,
        bei gr????eren sch??den pr??ft (interner)tierarzt schaden,
        tierarzt erstellt ein gutachten,
        summe des gutachtens wird dem kunden ??berwiesen

        bei tierkrankenversicherung l??uft es wie bei normal f??r menschen



      </div>
      </div>
      <div className='p-3'>
      <div data-aos="slide-right" className="absolute bg-lime-500 px-[12rem] sm:px-[17rem] opacity-70 -z-50 mt-1">&nbsp;</div>
      <div data-aos="slide-right" className="absolute bg-lime-500 px-[5rem] mt-9 opacity-70 sm:invisible">&nbsp;</div>
      <div data-aos="slide-right"className='text-2xl font-bold z-50'>
        Vor- und Nachteile zunehmender Digitalisierung
      </div>
      <div className="pb-72">
      <div className='md:flex mt-6 '>
        <div data-aos="flip-right" className='flex-initial w-[90vw] pt-6 pl-6 md:m-5 morph'>
          <div className="font-bold">Vorteile</div>
          <div>
            <ul className='list-disc ml-5 mt-4'>
              <li>Buchhaltung einfacher</li>
              <li>Komfortableres abschlie??en von Versicherungen f??r Kunden</li>              
              <li>schnellere Verarbeitung von Daten</li>              
              <li>Akten/Archiv kann einfacher betreut werden</li>

              <li className='mb-10'>test</li>              
            </ul>
          </div>
        </div>
        <div data-aos="flip-left" className='flex-initial w-[90vw] pt-6 pl-6 md:m-5 morph'>
          <div className='font-bold'>
            Nachteile
          </div>
          <div>
            <ul className='list-disc ml-5 mt-4'>
              <li>Datenschutz erschwert</li>
              <li>Cyberkriminalit??t</li>
              <li>Server Ausf??lle</li>
              <li>Energieabh??ngigkeit</li>
            </ul>
          </div>
        </div>
      </div>
      </div>

      

      </div>
    </div>
  );
}

export default App;

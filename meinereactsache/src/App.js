import logo from './logo.svg';
import './App.css';
import luftaufnahme from "./img/P1040870_bearbeitet.jpg"
import versicherungenLogo from "./img/uelzenerVersicherungenLogo.png"

function App() {
  return (
    <div>
      <header className='h-screen bg-cover bg-center bg-[url("./img/P1050064_bearbeitet.jpg")] bg-zinc-800 bg-blend-overlay mb-5'>
        
        <div className="md:ml-11">
        <img src={versicherungenLogo} className="w-screen md:w-2/3 xl:w-1/3 pt-40"/>
        <h1 className='pt-11 md:ml-3  sm:px-2 text-4xl md:text-5xl text-center md:text-left font-bold text-white '>Praktikumsbericht</h1>
        </div>
        
      </header>
      
      <div className='pb-32 p-3'>
            <div className='pb-6 text-2xl font-bold'>Unternehmen</div>
        <div className='md:flex'>
          <div className='flex-initial md:w-1/2'>
            <div>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.  
            </div>   
          </div>
          <div className='flex-initial md:w-1/2 pt-6 md:pt-0'>
          <img src={luftaufnahme} className='transition-all drop-shadow-md hover:drop-shadow-xl hover:scale-95 hover:skew-y-2  rounded-xl'/>
          </div>
        </div>

      </div>
      <div className='p-3 pb-32  text-2xl font-bold'>
        Abläufe des Unternehmens
      </div>
      <div className='p-3 pb-96  text-2xl font-bold'>
        Vor- und Nachteile zunehmender Digitalisierung
      </div>

    </div>
  );
}

export default App;

import logo from './img/logo.png';
import menu from './img/menu.png';
import { useState } from 'react';

function Navbar (){

  const [showOptions, setShowOptions] = useState(false);

  function options(){
    // Si el área está visible, ocultarla y ocultar las opciones
    if(showOptions){
      setShowOptions(false);
    } else{
      // Si el área no está visible, mostrarla y mostrar las opciones
      setShowOptions(true);
    }
  }

  return(
    <>
    <nav className='nav'>
      <img className='img-logo' src={logo} alt='Women Biz'/>
      <button className='btn-menu' onClick={options} >
        <img src={menu} alt='menu' className='img-menu'/>
      </button>
    </nav>
    {showOptions && 
      <ul>
        <li>Conocenos</li>
        <li>Unete</li>
        <li>Eventos</li>
        <li>Programas</li>
      </ul>
    }
    </>

  )
}

export default Navbar;
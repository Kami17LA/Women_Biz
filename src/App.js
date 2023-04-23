import './App.css';
import logo from './img/logo.png';
import menu from './img/menu.png';


function App() {
  return (
    <div className='container'>
      <header className='header'>
        <img src={logo} alt='Women Biz'/>
        <button>
          <img src={menu} alt='menu'/>
        </button>
      </header>
      <div>

      </div>
    </div>
  );
}

export default App;

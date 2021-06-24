
import './App.css';
import Profile from './Componenets/Profile/ProfilePhoto.js';
import Fulln from './Componenets/Profile/FullName.js';
import MyAdress from './Componenets/Profile/Adresse.js';

function App () {

  return (

    <div className="App">
    <di className ="global-Contenaire-profile"> 
    <Profile/>
    <Fulln/>
    </di>
    <MyAdress/>
    </div>
  );
}

export default App;


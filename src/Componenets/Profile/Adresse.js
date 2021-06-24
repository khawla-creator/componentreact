import Ico1 from './images/icone1.png';
import Ico2 from './images/Icone2.png'; 
import Ico3 from './images/icone3.png';

function MyAdress () {
     return (
          <div className='global-contenaire'> 
          <div className='global-contenaire-one'> 
          <img 
          src={Ico1}
          alt='Adresse'
          width= '30px'
          />
          <img 
          src={Ico2}
          alt='email'
          width= '30px'
          />
          <img 
          src={Ico3}
          alt='phone'
          width= '30px'
          />
          </div>
          <div className='spans'> 
          <span> Street of anything N°:100 </span>
          <span>IhaveNotAnEmail@gmail.com</span>
          <span>+21600000000</span>
          </div>
          </div>
     )
}

export default MyAdress
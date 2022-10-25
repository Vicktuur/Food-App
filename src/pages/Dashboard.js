import '../App.css';
import "../styles/dashboard.css"
import lilies from '../assets/lilies.png'
import home from '../assets/home.png'
import profile from '../assets/profile.png'
import orders from '../assets/orders.png'
import cart from '../assets/cart.png'
import pics from '../assets/pics.png'
import fooda from '../assets/fooda.png'
import foodb from '../assets/foodb.png'
import foodc from '../assets/foodc.png'
import foodd from '../assets/foodd.png'
import foode from '../assets/foode.png'
import foodf from '../assets/foodf.png'
import Food from '../components/Food'

const Dashboard = () => {
  return (
    <div className='main'>
      <div className='menu'>
        <div className='logo'>
          <img src={lilies} className='lilies' alt='icon'/>
          <p>Lilies</p>
        </div>
        <ul>
          <li><img src={home} alt='icon' /> Dashboard</li>
          <li><img src={profile} alt='icon' /> Profile</li>
          <li><img src={orders} alt='icon' /> Orders</li>
          <li><img src={cart} alt='icon' /> Your cart</li>
        </ul>
      </div>
      <div className='foodlist'>
          <div className='greeting'>
            <div >
              <h3 className='heading'>Good morning, Oghenevwede!</h3>
              <p className='question'>What delicious meal are you craving today?</p>
            </div>
            <div><img src={pics} alt=''/></div>
          </div>
          <div className='dish-list'>
            <div>
              <Food img={fooda}/>
            </div>
            <div>
              <Food img={foodb}/>
            </div>
            <div>
              <Food img={foodc}/>
            </div>
            <div>
              <Food img={foodd}/>
            </div>
            <div>
              <Food img={foode}/>
            </div>
            <div>
              <Food img={foodf}/>
            </div>
          </div>
      </div>
    </div>
  )
}

export default Dashboard

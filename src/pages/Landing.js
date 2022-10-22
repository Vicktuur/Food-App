import '../App.css';
import '../styles/landing.css'
import {Link} from 'react-router-dom'
import lilies from '../assets/lilies.png'
import food1 from '../assets/food1.png'
import food2 from '../assets/food2.png'
import food3 from '../assets/food3.png'
import food4 from '../assets/food4.png'
import foodv from '../assets/foodv.png'
import playstore from '../assets/playstore.png'
import appstore from '../assets/appstore.png'
// import twitter from '../assets/twitter.png'
// import youtube from '../assets/youtube.png'
// import instagram from '../assets/instagram.png'


const Landing = () => {
  return (
    <div className='main'>
         <div className='Homepage'>
        <div className='nav'>
            <div className='lily-image'>
                <img src={lilies} alt='lilies'/>
                <p>Lilies</p>
            </div>
            <div className='nav-bar'>                  
                    <Link to="/" className='home'>Home</Link>
                    <Link to="/login" className='login'>Login</Link>
                    <div className='signup-button'>
                        <Link to="/register" className='signup'>Sign up</Link>
                    </div>
            </div>
        </div>
        <div className='section1'>
            <div>
                <h3>Order <span style={{color:'#E2B887'}}>food</span> anytime, anywhere</h3>
                <p>Browse from our list of specials to place your order and have food delivered to you in no time. Affordable, tasty and fast!</p>
                <div>
                    <Link className='playstore' to='https://play.google.com'><img src= {playstore} alt=''/></Link>
                    <Link className='appstore' to='https://play.google.com'><img src= {appstore} alt=''/></Link>
                </div>
            </div>
            <div>
                <img className='food1' src={food1} alt='foodimage'/>
            </div>
        </div>
        <div className='section2'>
            <div>
                <h3>Special Meals of the day!</h3>
                <p className='p1'>Check our sepecials of the day and get discounts on all our meals and swift delivery to what ever location within Ilorin.</p>
            </div>
            <div className='food-pics'>
                <div className='food2'>
                    <img src={food2} alt=''/>
                    <h3>Stir fry Pasta</h3>
                    <p>Stir fry pasta yada yada yada because of Sesan</p>
                </div> 
                <div className='food3'>
                    <img src={food3} alt=''/>
                    <h3>Meat Balls</h3>
                    <p>Stir fry pasta yada yada yada because of Sesan</p>
                </div> 
                <div className='food4'>
                    <img src={food4} alt=''/>
                    <h3>Burger Meal</h3>
                    <p>Stir fry pasta yada yada yada because of Sesan</p>
                </div> 
            </div>
        </div>
        <div classsName='section3'>
            <div className='update'>
                <h3>Get notified when we update!</h3>
                <p>Get notified when we add new items to our specials menu, update our price list of have promos!</p>
            </div>
            <div>
                <form action="">
                    <input className='input' type="email" placeholder="gregphillips@gmail.com​"></input>
                    <button className='button' type="submit"><span>Get notified​</span></button>
                </form>
            </div>
        </div>
        <div className='foodv'>
            <img src={foodv} alt=''/>
        </div>
        {/* <div classsName='footer'>
            <div className='section4'>
                <div>
                    <ul>
                        <li>Company</li>
                        <li>
                            <Link to=''>About Us</Link>
                        </li>
                        <li>
                            <Link to=''>Careers</Link>
                        </li>
                        <li>
                            <Link to=''>contact Us</Link>
                        </li>
                    </ul>
                </div>
                <div>
                    <ul>
                        <li>Support</li>
                        <li>
                            <Link to=''>Help Center</Link>
                        </li>
                        <li>
                            <Link to=''>Safety Center</Link>
                        </li>
                    </ul>
                </div>
                <div>
                    <ul>
                        <li>Legal</li>
                        <li>
                            <Link to=''>Cookies Policy</Link>
                        </li>
                        <li>
                            <Link to=''>Privacy Policy</Link>
                        </li>
                        <li>
                            <Link to=''>Terms of Service</Link>
                        </li>
                        <li>
                            <Link to=''>Dispute resolution</Link>
                        </li>
                    </ul>
                </div>
                <div>
                    <ul>
                        <li>Install App</li>
                        <li>
                            <Link to='https://play.google.com'><img src= {playstore} alt=''/></Link>
                        </li>
                        <li>
                            <Link to='https://play.google.com'><img src= {appstore} alt=''/></Link>
                        </li>
                    </ul>
                </div>
            </div>
            <div className='section5'>
                <div>
                    © 2021 LILIES, All rights reserved
                </div>
                <div>
                    <img src={instagram} alt='instagram'/>
                    <img src={twitter} alt='twitter'/>
                    <img src={youtube} alt='youtube'/>
                </div>
            </div>
        </div> 
         */}
    </div>
    </div>
  )
}
export default Landing
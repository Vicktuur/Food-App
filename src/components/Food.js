import '../App.css'
import styled from 'styled-components'

const Foodcomp = styled.div`
  width: 240px;
  height: 307px;
  background: rgba(255, 255, 255, 0.83);
  border: 0.3px solid rgba(0, 48, 46, 0.14);
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;

  h3 {
    font-weight: 600;
    font-size: 17px;
    line-height: 33px;
    color: #00302E;
  }
  .info {
    font-weight: 400;
    font-size: 11px;
    line-height: 21px;
    color: rgba(0, 0, 0, 0.69);
    width: 152px;
    height: 42px;
    margin-left: 40px;
  }
  .price {
    font-weight: 700;
    font-size: 13px;
    line-height: 33px;
    color: #00302E;
  }
  .cart {
    font-weight: 500;
    font-size: 13px;
    line-height: 33px;
    text-align: right;
    color: #06E775;
  }
  .prices {
    display: flex;
    justify-content: space-around;
    margin-top: 20px;
  }
`

export default function Food ({img}) {
  return (
    <Foodcomp>
      <div>
        <img src={img} alt='' />
          <h3>Stir Fry Pasta</h3>
          <p className='info'>The in-house pasta and chicken by chef Moose</p>
      </div>
      <div className='prices'>
        <p className='price'>N 1,000</p>
        <p className='cart'>Add to cart</p>
      </div>
    </Foodcomp>
  )
}

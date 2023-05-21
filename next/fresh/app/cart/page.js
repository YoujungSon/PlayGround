import age from './data';
import Hi from './hi';
export default function Cart() {
  let 장바구니 = ['Tomatoes', 'Pasta'];
  return (
    <div>
      <h4 className='title'>Cart {age}</h4>
      <Hi />
      <CartItem item={장바구니[0]} />
      <CartItem item={장바구니[1]} />
      <Banner content='롯데카드' />
      <RedButton color={'blue'} />
    </div>
  );
}
function Banner(props) {
  return <h5>{props.content} 결제 행사중</h5>;
}
function RedButton(props) {
  return <button style={{ backgroundColor: `${props.color}` }}>버튼</button>;
}
function CartItem(props) {
  return (
    <div className='cart-item'>
      <p>{props.item}</p>
      <p>$40</p>
      <p>1개</p>
    </div>
  );
}

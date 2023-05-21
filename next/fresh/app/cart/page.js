import age from './data';
import Hi from './hi';
export default function Cart() {
  return (
    <div>
      <h4 className='title'>Cart {age}</h4>
      <Hi />
      <CartItem />
      <CartItem />
      <CartItem />
    </div>
  );
}

function CartItem() {
  return (
    <div className='cart-item'>
      <p>상품명</p>
      <p>$40</p>
      <p>1개</p>
    </div>
  );
}

'use client';

import { useState } from 'react';

export default function List() {
  let 상품 = ['Tomatoes', 'Pasta', 'Cocount'];
  const [count, setCount] = useState(0);
  return (
    <div>
      <h4 className='title'>상품목록</h4>
      {상품.map((a, i) => {
        return (
          <div className='food' key={a}>
            <img src={`/food${i}.png`} alt='토마토' className='food-img' />
            <h4>{a} $40</h4>
            <button
              onClick={() => {
                setCount(count - 1);
              }}
            >
              -
            </button>
            <span>{count}</span>
            <button
              onClick={() => {
                setCount(count + 1);
              }}
            >
              +
            </button>
          </div>
        );
      })}
    </div>
  );
}

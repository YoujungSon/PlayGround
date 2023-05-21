'use client';

import { useState } from 'react';

export default function List() {
  let 상품 = ['Tomatoes', 'Pasta', 'Cocount'];
  const [count, setCount] = useState(Array(상품.length).fill(0));
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
                let copy = [...count];
                copy[i]--;
                setCount(copy);
              }}
            >
              -
            </button>
            <span>{count[i]}</span>
            <button
              onClick={() => {
                let copy = [...count];
                copy[i]++;
                setCount(copy);
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

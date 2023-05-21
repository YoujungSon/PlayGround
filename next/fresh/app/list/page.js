export default function List() {
  let 상품 = ['Tomatoes', 'Pasta', 'Cocount'];
  return (
    <div>
      <h4 className='title'>상품목록</h4>
      {상품.map((a, i) => {
        return (
          <div className='food' key={a}>
            <img src={`/food${i}.png`} alt='토마토' className='food-img' />
            <h4>{a} $40</h4>
          </div>
        );
      })}
    </div>
  );
}

export default function List() {
  let 상품 = ['Tomatoes', 'Pasta', 'Cocount'];
  return (
    <div>
      <h4 className='title'>상품목록</h4>
      {상품.map((value) => {
        return (
          <div className='food'>
            <h4>{value} $40</h4>
          </div>
        );
      })}
    </div>
  );
}

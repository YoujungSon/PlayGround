export default function SignIn() {
  return (
    <div className='p-20'>
      <h4>글작성</h4>
      <form action='/api/user/post' method='POST'>
        <input name='id' placeholder='아이디' />
        <input type='password' name='password' placeholder='비밀번호' />
        <button type='submit'>버튼</button>
      </form>
    </div>
  );
}

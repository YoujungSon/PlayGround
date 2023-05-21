import { connectDB } from '@/util/database';
import Link from 'next/link';

export default async function List() {
  const db = (await connectDB).db('forum');
  let result = await db.collection('post').find().toArray();
  return (
    <div className='list-bg'>
      {result.map((value) => {
        return (
          <Link href={`detail/${value._id}`}>
            <div className='list-item' key={value._id}>
              <h4>{value.title}</h4>
              <p>{value.content}</p>
            </div>
          </Link>
        );
      })}
    </div>
  );
}

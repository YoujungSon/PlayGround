import { connectDB } from '@/util/database';

export default async function handler(요청, 응답) {
  if (요청.method == 'POST') {
    const db = (await connectDB).db('forum');
    let result = await db.collection('user').findOne({ id: 요청.body.id });
    if (result) {
      return 응답.status(500).json('이미 등록된 아이디입니다.');
    }
    try {
      let db = (await connectDB).db('forum');
      let result = db.collection('user').insertOne(요청.body);
      응답.redirect(302, '/');
    } catch (error) {
      return 응답.status(500).json(error);
    }
  }
}

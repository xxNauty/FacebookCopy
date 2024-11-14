import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    try {
      const { login, password } = req.body;

      if (!login || !password) {
        return res.status(400).json({ message: 'Login and password are required.' });
      }

      const user = { login, password };

      return res.status(200).json({ message: 'Login successful', user });

    } catch (error) {
      console.error('Error in API route:', error);
      return res.status(500).json({ message: 'Internal Server Error' });
    }
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}
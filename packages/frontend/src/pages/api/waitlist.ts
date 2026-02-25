import type { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';

export default function handler(req: NextApiRequest, res: NextApiResponse){
  if(req.method !== 'POST') return res.status(405).end();
  const { email, role } = req.body || {};
  if(!email) return res.status(400).json({error:'missing email'});
  const file = path.join(process.cwd(),'waitlist.csv');
  const line = `${new Date().toISOString()},${email},${role || ''}\n`;
  try{
    fs.appendFileSync(file,line);
    return res.status(200).json({ok:true});
  }catch(e){
    console.error(e);
    return res.status(500).json({error:'write_failed'});
  }
}

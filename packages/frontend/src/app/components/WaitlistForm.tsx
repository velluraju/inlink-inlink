"use client";
import React, {useState} from 'react';

export default function WaitlistForm({role}:{role:'brand'|'influencer'}){
  const [email,setEmail]=useState('');
  const [status,setStatus]=useState<'idle'|'loading'|'success'|'error'>('idle');
  async function submit(){
    if(!email) return alert('Enter email');
    setStatus('loading');
    try{
      const res = await fetch('/api/waitlist',{method:'POST',headers:{'content-type':'application/json'},body:JSON.stringify({email,role})});
      if(res.ok){ setStatus('success'); setEmail(''); }
      else setStatus('error');
    }catch(e){ setStatus('error'); }
  }
  return (
    <div className="waitlist-form">
      <input aria-label="email" className="email-input" value={email} onChange={e=>setEmail(e.target.value)} placeholder="Enter your email" />
      <button className="btn-primary" onClick={submit} disabled={status==='loading'}>
        {status==='loading' ? 'Sending...' : 'Notify Me'}
      </button>
      {status==='success' && <div role="status" aria-live="polite" className="success">Thanks — you are on the waitlist</div>}
      {status==='error' && <div role="alert" className="error">Something went wrong — try again</div>}
    </div>
  )
}

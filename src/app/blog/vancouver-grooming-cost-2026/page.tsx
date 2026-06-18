'use client';
import Link from 'next/link';
import { useState } from 'react';

export default function Article() {
  const [likes, setLikes] = useState(24);
  return (
    <div style={{background:'#FFF9F0',minHeight:'100vh',padding:'20px 0'}}>
      <div style={{maxWidth:'800px',margin:'0 auto',padding:'0 16px'}}>
        <Link href="/blog" style={{color:'#8B7355'}}>← Back</Link>
        <article style={{background:'white',borderRadius:'16px',marginTop:'20px',padding:'32px 24px',border:'2px solid #E8DCC6'}}>
          <img src="https://images.unsplash.com/photo-1588943211346-0908a1fb0b01?q=80&w=1600" style={{width:'100%',height:'360px',objectFit:'cover',borderRadius:'12px',marginBottom:'20px'}}/>
          <h1 style={{fontSize:'30px',color:'#5C3D2E',fontFamily:'Georgia,serif'}}>How Much Does Dog Grooming Cost in Vancouver in 2026?</h1>
          <p style={{color:'#666',lineHeight:1.7}}>Wondering what you'll actually pay? We've tracked real prices from Kitsilano to North Vancouver across 12 studios.</p>
          <h2 style={{color:'#5C3D2E',marginTop:'24px'}}>Price Breakdown</h2>
          <p><strong>Small breeds:</strong> $65-$75 bath, $85-$95 full<br/><strong>Labs:</strong> $95-$110<br/><strong>Doodles:</strong> $125-$150</p>
          <p>At Paw Palace we charge $95 for Labs, $135 for Doodles — includes nail grind, ear cleaning, and blueberry facial.</p>
        </article>
        <div style={{background:'white',padding:'20px',marginTop:'20px',borderRadius:'12px',textAlign:'center',border:'2px solid #E8DCC6'}}>
          <button onClick={()=>setLikes(likes+1)} style={{background:'#5C3D2E',color:'white',padding:'10px 20px',border:'none',borderRadius:'8px'}}>👍 Helpful ({likes})</button>
        </div>
      </div>
    </div>
  );
                                                             }


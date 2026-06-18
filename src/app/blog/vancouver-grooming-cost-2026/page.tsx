'use client';
import Link from 'next/link';
import { useState } from 'react';

export default function Article() {
  const [likes, setLikes] = useState(18);
  
  return (
    <div style={{background:'#FFF9F0',minHeight:'100vh',padding:'20px 0'}}>
      <div style={{maxWidth:'800px',margin:'0 auto',padding:'0 16px'}}>
        <Link href="/blog" style={{color:'#8B7355'}}>← Back</Link>
        
        <article style={{background:'white',borderRadius:'16px',marginTop:'20px',padding:'32px 24px',border:'2px solid #E8DCC6'}}>
          <img 
            src="https://images.unsplash.com/photo-1548199973-03cce0bbc87b?q=80&w=1600" 
            style={{width:'100%',height:'360px',objectFit:'cover',borderRadius:'12px',marginBottom:'20px'}}
            alt="Dog in rain"
          />
          <h1 style={{fontSize:'30px',color:'#5C3D2E',fontFamily:'Georgia,serif'}}>
            How Often Should You Groom Your Dog in Vancouver's Rain?
          </h1>
          <div style={{lineHeight:'1.7',color:'#333',marginTop:'16px'}}>
            <p>Vancouver's rain is brutal on coats. Our groomers see the same pattern every fall: dogs come in every 8 to 10 weeks and leave matted.</p>
            <p>For most double-coated breeds and Doodles in Kitsilano, West End, and North Van, the sweet spot is a bath and brush every 3 to 4 weeks, with a full groom every 6 to 8 weeks.</p>
            <h2 style={{color:'#5C3D2E',marginTop:'24px'}}>The 4-Week Rule</h2>
            <p>Short-haired Labs can stretch to 6 weeks if you rinse paws after walks. We explain how to spot early matting behind ears and armpits.</p>
          </div>
        </article>

        <div style={{background:'white',padding:'20px',marginTop:'20px',borderRadius:'12px',textAlign:'center',border:'2px solid #E8DCC6'}}>
          <button 
            onClick={()=>setLikes(likes+1)} 
            style={{background:'#5C3D2E',color:'white',padding:'10px 20px',border:'none',borderRadius:'8px',fontWeight:'600',cursor:'pointer'}}
          >
            👍 Helpful ({likes})
          </button>
        </div>
      </div>
    </div>
  );
}

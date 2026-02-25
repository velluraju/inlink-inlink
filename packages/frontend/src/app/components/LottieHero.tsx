"use client";
import React, {useEffect, useRef} from 'react';
import lottie from 'lottie-web';

export default function LottieHero({src}:{src:string}){
  const ref = useRef<HTMLDivElement|null>(null);
  useEffect(()=>{
    if(!ref.current) return;
    const anim = lottie.loadAnimation({container: ref.current, renderer:'svg', loop:true, autoplay:true, path: src});
    return ()=> anim.destroy();
  },[src]);
  return <div ref={ref} style={{width:'100%',height:420}} aria-hidden />
}

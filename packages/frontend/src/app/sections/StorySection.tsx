import React from 'react';

export default function StorySection({title, children}:{title:string, children:React.ReactNode}){
  return (
    <section className="story card">
      <h2>{title}</h2>
      <div className="story-body">{children}</div>
    </section>
  )
}

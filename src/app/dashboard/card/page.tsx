import React from "react";

interface Repositorio{
  name:string,
  img:string,
  describe:string
}

export default function Cards({name,img,describe}:Repositorio){
  console.log(img)
    return(
        <>
        <div className="container">
        <figure className="bg-slate-100 rounded-xl p-8 dark:bg-slate-800">
  <img className="w-24 h-24 rounded-full mx-auto" src={String(img)} alt="" width="500" height="512"/>
  <div className="pt-6 space-y-4"/>
    <blockquote>
      <p className="text-lg font-medium">
        {describe}
      </p>
    </blockquote>
    <figcaption className="font-medium">
    <p>
       {name}
    </p>
    </figcaption>
</figure>
        </div>
        </>
    )
}
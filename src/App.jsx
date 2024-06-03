import { useEffect } from 'react';
import gsap from 'gsap';
import React, { useRef, useState } from 'react';
const App = () => {
  const jackref = useRef(null)
  const cockref = useRef(null)

  const [jackmoveX, setjackmoveX] = useState(0)
  const [jackmoveY, setjackmoveY] = useState(0)

  const [cockmoveX, setcockmoveX] = useState(0)
  const [cockmoveY, setcockmoveY] = useState(0)

    const jackmoving =(e)=>{
      setjackmoveX(e.clientX)
      setjackmoveY(e.clientY)
    }

    const cockcaught =()=>{
      console.log("pakad liya")
      const randomX= Math.floor(Math.random()*1200)
      const randomY= Math.floor(Math.random()*600)
      setcockmoveX(randomX)
      setcockmoveY(randomY)
    }

    useEffect(() => {
      gsap.to(cockref.current, {
        x: cockmoveX,
        y: cockmoveY,
        duration: 1,
        ease: "back",
      });
      gsap.to(jackref.current, {
        left: jackmoveX,
        top: jackmoveY,
        duration: 1,
        ease: "back",
      });
    }, [jackmoveX, jackmoveY, cockmoveX, cockmoveY]);
  
  return (
    <div className='main' onMouseMove={(e)=>{
      jackmoving(e)
    }}>
      <img className='jack' ref={jackref} src="/src/assets/jack.png" alt="" />
      <img className="cock" onClick={cockcaught} ref={cockref} src="/src/assets/cock.png" alt="" />

    </div>
  )
}

export default App

import './App.css'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, SpotLight } from '@react-three/drei'
// import { Model } from '../LowpolyMap'
import Targets from './Targets'
import CameraModule from './CameraModule'
import Test from './testLoader'
import { Model } from '../Skyrim'
import { Model2, Model3, Model4 } from '../Building'
import { useEffect, useRef, useState } from 'react'
import * as THREE from 'three'
import gsap from 'gsap'

function App() {
  const [location, setLocation] = useState(new THREE.Vector3(0, 0, 0))
  const [lightVis, setLightVis] = useState(false)
  const [intense, setIntense] = useState()
  const switchLightOn = () => {
    setLightVis(true);
  }
  const switchLightOff = () => {
    setLightVis(false)
  }
  const Spotspot = () => {
    let spotlightRef = useRef();

    useFrame(() => {
      gsap.to(spotlightRef.current.position, {
        x: location.x,
        y: location.y,
        z: location.z,
        ease: 'power1.inOut',
        duration: 2,
      }
      )
    })

    useEffect(() => {
      if (lightVis) {
        gsap.to(spotlightRef.current, {
          intensity: 3,
          ease: 'power1.inOut',
          duration: 3,
        })
      }
    }, [])
    useEffect(() => {
      if (!lightVis) {
        gsap.to(spotlightRef.current, {
          intensity: 0,
          ease: 'power2.inOut',
          duration: 2,
        })
      }
    }, [])
    return (
      <>
        <SpotLight penumbra={0.5} distance={100} decay={1} angle={1.9} ref={spotlightRef} position={location} intensity={0} />
      </>
    )
  }

  return (
    <>
      <Canvas shadows={true} >
        <ambientLight intensity={0.2} />
        <pointLight position={[5, 50, 5]} intensity={0.2} castShadow />
        {/* <Targets /> */}
        {/* <OrbitControls /> */}
        {/* <Test /> */}
        <Model />
        <Model2 setLocation={setLocation} switchLightOn={switchLightOn} switchLightOff={switchLightOff} />
        <Model3 setLocation={setLocation} switchLightOn={switchLightOn} switchLightOff={switchLightOff} />
        <Model4 setLocation={setLocation} switchLightOn={switchLightOn} switchLightOff={switchLightOff} />
        <CameraModule setLocation={setLocation} switchLightOn={switchLightOn} switchLightOff={switchLightOff} />
        <Spotspot lightVis={lightVis} location={location} />
      </Canvas>
    </>
  )
}

export default App

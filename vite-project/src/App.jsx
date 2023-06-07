import './App.css'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, SpotLight } from '@react-three/drei'
// import { Model } from '../LowpolyMap'
import Targets from './Targets'
import CameraModule from './CameraModule'
import Test from './testLoader'
import { Model } from '../Skyrim'
import { Model2, Model3, Model4 } from '../Building'
import { useRef, useState } from 'react'
import * as THREE from 'three'
import gsap from 'gsap'

function App() {
  const [location, setLocation] = useState(new THREE.Vector3(0, 0, 0))
  const [lightVis, setLightVis] = useState(false)
  const switchLight = () => {
    setLightVis(!lightVis);
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
      if (lightVis) {
        gsap.to(spotlightRef.current, {
          intensity: 1,
          ease: 'power1.inOut',
          duration: 2,
        })
      } else {
        gsap.to(spotlightRef.current, {
          intensity: 0,
          ease: 'power1.inOut',
          duration: 2,
        })
      }
    })
    return (
      <>
        <SpotLight penumbra={0.1} distance={100} decay={1} angle={1.9} ref={spotlightRef} position={location} intensity={lightVis ? 1 : 0} />
      </>
    )
  }

  return (
    <>
      <Canvas shadows={true} >
        <ambientLight intensity={0.2} />
        <pointLight position={[5, 50, 5]} intensity={0.5} castShadow />
        {/* <Targets /> */}
        <OrbitControls />
        {/* <Test /> */}
        <Model />
        <Model2 setLocation={setLocation} switchLight={switchLight} />
        <Model3 setLocation={setLocation} switchLight={switchLight} />
        <Model4 setLocation={setLocation} switchLight={switchLight} />
        {/* <CameraModule /> */}
        <Spotspot lightVis={lightVis} location={location}/>
      </Canvas>
    </>
  )
}

export default App

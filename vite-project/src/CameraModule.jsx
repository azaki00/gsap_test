import { PerspectiveCamera } from '@react-three/drei'
import * as THREE from 'three'
import React, { useEffect, useRef, useState } from 'react'
import { Vector3 } from 'three';
import { useFrame, useThree } from '@react-three/fiber';
import gsap from 'gsap';

const CameraModule = () => {
  let cameraRef = useRef();
  const { camera } = useThree();
  const [cameraPos, setCameraPos] = useState({
    x: 0,
    y: 170,
    z: 50
  })
  const [cameraTar, setCameraTar] = useState({
    x: 0,
    y: 0,
    z: 0
  })

  var tl = gsap.timeline();
  useEffect(() => {

    tl.to(cameraRef.current.position, {
      x: 5,
      y: 150,
      z: 5,
      duration: 2,
      ease: "power1"
    }).to(camera.position, {
      x: 40,
      y: 40,
      z: 40,
      duration: 3,
      ease: "power1"
    })

    // gsap.to(document.getElementById('root'), {
    //   opacity: 0.9,
    //   duration: 2,
    //   // ease: "power1.inout",
    // })
    // gsap.to(document.getElementById('skyrim'), {
    //   opacity: 1,
    //   duration: 3,
    //   delay:2,
    //   // ease: 'power1.inout'
    // })

    camera.lookAt(0,0,0);
    // gsap.to(cameraRef.current.target, {
    //   x: cameraTar.x,
    //   y: cameraTar.y,
    //   z: cameraTar.z,
    //   duration: 4,
    //   ease: "power1.inout",
    // })
  },[])


  return (
    <>
      <group ref={cameraRef}>
        <PerspectiveCamera far={40000} near={0.1} ref={camera} position={[0, 250, 0]}  makeDefault fov={70} />
      </group>
    </>
  )
}

export default CameraModule
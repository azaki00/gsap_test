import { PerspectiveCamera } from '@react-three/drei'
import * as THREE from 'three'
import React, { useEffect, useRef, useState } from 'react'
import { Vector3 } from 'three';
import { useFrame, useThree } from '@react-three/fiber';
import gsap from 'gsap';
import Targets from './Targets';

const CameraModule = () => {
  // let cameraRef = useRef();
  const { camera } = useThree();
  const [showWhiterun, setShowWhiterun] = useState(false);

  const [showWindhelm, setShowWindhelm] = useState(false);


  const [cameraPos, setCameraPos] = useState({
    x: 0,
    y: 170,
    z: 50
  })

  let initialLookat = new THREE.Vector3(0,0,0);
  
  let targetLookat = new THREE.Vector3(100,14,0);

  let targetLookat2 = new THREE.Vector3(-100,20, -15);

  const setTrue = () => {
    setShowWhiterun(true);
  }
  const setFalse = () => {
    setShowWhiterun(false);
  }
  const setTrue1 = () => {
    setShowWindhelm(true);
  }
  const setFalse1 = () => {
    setShowWindhelm(false);
  }
  var tl = gsap.timeline({repeat: -1});

  useEffect(() => {
    if (showWhiterun) {
      gsap.to(document.getElementById('loc-1'), {
        opacity: 1,
        duration: 1,
        pointerEvents: 'all',
      })
    } else {
      gsap.to(document.getElementById('loc-1'), {
        opacity: 0,
        duration: 1,
        pointerEvents: 'none',
      })
    }
    if (showWindhelm) {
      gsap.to(document.getElementById('loc-2'), {
        opacity: 1,
        duration: 1,
        pointerEvents: 'all',
      })
    } else {
      gsap.to(document.getElementById('loc-2'), {
        opacity: 0,
        duration: 1,
        pointerEvents: 'none',
      })
    }
  })


  useEffect(() => {

    gsap.to(document.getElementById('root'), {
      opacity: 1,
      duration: 2,
      ease: "power1.inOut",
    })
    //2
    gsap.to(document.getElementById('skyrim'), {
      opacity: 1,
      duration: 2,
      delay: 2,
      ease: 'power1.inOut'
    })
    //5
    gsap.to(document.getElementById('skyrim'), {
      opacity: 0,
      duration: 2,
      delay: 4,
      pointerEvents: 'none',
      ease: 'power1.inOut'
    })
    //7
    gsap.to(camera.position, {
      y: 70,
      duration: 5,
      ease: "power1.inOut",
      onUpdate: function () {

        camera.lookAt(new THREE.Vector3(0, 0, 0))
      },
    })
    //7
    // gsap.to(camera.position, {
    //   x: 50,
    //   y: 100,
    //   z: 50,
    //   duration: 2,
    //   delay: 7,
    //   ease: "power1.inOut",
    //   onUpdate: function () {
    //     camera.lookAt(new THREE.Vector3(0, 0, 0))
    //   },
    // })
    // //9

    //12
    tl
    // .to(camera.position, {
    //   x: 0,
    //   y: 100,
    //   z: 100,
    //   duration: 2,
    //   ease: "power1.inOut",
    //   onUpdate: function () {
    //     camera.lookAt(new THREE.Vector3(0, 0, 0))
    //   },
    // })
    .to(camera.position, {
      x: -40,
      y: 70,
      z: 40,
      duration: 5,
      ease: "power1.inOut",
      onUpdate: function () {
        camera.lookAt(new THREE.Vector3(0, 0, 0))
      },
    }).to(camera.position, {
      x: +40,
      y: 70,
      z: 40,
      duration: 10,
      ease: "power1.inOut",
      onStart: function () {
        setTrue();
      },
      onUpdate: function () {
        camera.lookAt(new THREE.Vector3(0, 0, 0))
      },
      onComplete: function () {
        setFalse();
      }
    }).to(initialLookat, {
      x: targetLookat.x ,
      y: targetLookat.y,
      z: targetLookat.z,
      duration: 2,
      ease: "power1.inOut",
      onUpdate: function () {
        camera.lookAt(initialLookat)
      },
    }).to(camera.position, {
      x: 80,
      y: 50,
      z: 30,
      duration: 7,
      onStart: function () {
        setTrue1();
      },
      onUpdate: function () {
        camera.lookAt(new THREE.Vector3(100, 14, 0))
      },
      onComplete: function () {
        setFalse1();
      },

    }).to(initialLookat, {
      x: targetLookat2.x,
      y: targetLookat2.y,
      z: targetLookat2.z,
      duration: 2,

      onUpdate: function () {
        camera.lookAt(initialLookat)
      },


    }).to(camera.position, {
      x: -100,
      y: 45,
      z: 30,
      duration: 5,

      onUpdate: function () {
        camera.lookAt(targetLookat2)
      },


    }).to(targetLookat2, {
      x: initialLookat.x ,
      y: initialLookat.y,
      z: initialLookat.z,
      duration: 2,
      ease: "power1.inOut",
      onUpdate: function () {
        camera.lookAt(targetLookat2)
      },
    }, 'endReset').to(camera.position, {
      x:  0,
      y: 150,
      z: 150,
      duration: 2,
      ease: "power1.inOut",
      onUpdate: function () {
      },
    }, 'endReset')
  }, [camera])
  useFrame(() => {
    camera.current.updateMatrixWorld();
  });

  return (
    <>
      {/* <group ref={cameraRef}> */}
      <PerspectiveCamera far={40000} near={0.1} ref={camera} position={[0, 150, 150]} makeDefault fov={70} />
      {/* </group> */}
    </>
  )
}

export default CameraModule
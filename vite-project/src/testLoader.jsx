import React, { forwardRef } from 'react'
import * as THREE from 'three'
import { useRef } from 'react';
import {useLoader} from '@react-three/fiber'
import {FBXLoader} from 'three/examples/jsm/loaders/FBXLoader'

//Load Shield3
const Test = forwardRef((props, ref) => {
    const wholeRef = useRef();
    const fbx = useLoader(FBXLoader, './public/test.fbx');
    if (fbx) {
      fbx.scale.set(0.02, 0.02, 0.02);
      fbx.traverse((child) => {
        if (child.isMesh) {
          child.material.side = THREE.DoubleSide;
          // const wireframeMaterial = new THREE.MeshBasicMaterial({ color: 0xffffff, wireframe: true });
          // child.material = wireframeMaterial;
        }
      });
    }
  
    return(
        <group ref={wholeRef}>
         <primitive ref={ref} object={fbx} onClick={() => props.setView(3)}/>
         </group>
    );
  });


export default Test
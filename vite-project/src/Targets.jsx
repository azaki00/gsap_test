import React, { useRef, useState } from 'react'

const Targets = (props) => {
    let refBall1 = useRef();
    let refBall2 = useRef();
    let refBall3 = useRef();
    const [hovered, setHovered] = useState({
        ball1: false,
        ball2: false,
        ball3: false
    });
    function handleTargetHover(target, isHovered) {
        setHovered(prevState => ({
          ...prevState,
          [target]: isHovered
        }));
      }
    
      return (
        <>
          <mesh ref={refBall1} position={[-100, 20, -20]} onPointerEnter={() => handleTargetHover("ball1", true)} onPointerLeave={() => handleTargetHover("ball1", false)}>
            <sphereGeometry args={[10, 32, 32]} />
            <meshBasicMaterial color={hovered.ball1 ? "green" : "red"} />
          </mesh>
          <mesh ref={refBall2} position={[100, 25, 0]} onPointerEnter={() => handleTargetHover("ball2", true)} onPointerLeave={() => handleTargetHover("ball2", false)}>
            <sphereGeometry args={[10, 32, 32]} />
            <meshBasicMaterial color={hovered.ball2 ? "green" : "red"} />
          </mesh>
          <mesh ref={refBall3} position={[-10, 25, 15]} onPointerEnter={() => handleTargetHover("ball3", true)} onPointerLeave={() => handleTargetHover("ball3", false)}>
            <sphereGeometry args={[10, 32, 32]} />
            <meshBasicMaterial color={hovered.ball3 ? "green" : "red"} />
          </mesh>
        </>
      );
    }
    
    export default Targets;
import './App.css'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
// import { Model } from '../LowpolyMap'
import Targets from './Targets'
import CameraModule from './CameraModule'
import Test from './testLoader' 
import { Model } from '../Skyrim'
import { Model2, Model3 } from '../Building'

function App() {
  return (
    <>
      <Canvas shadows={true} >
        <ambientLight intensity={0.5}/>
        <pointLight position={[5,50,5]} castShadow/>
        {/* <Targets /> */}
        {/* <Model /> */}
        {/* <OrbitControls /> */}
        {/* <Test /> */}
        <Model />
        <Model2 />
        <Model3 />
        <CameraModule />
      </Canvas>
    </>
  )
}

export default App

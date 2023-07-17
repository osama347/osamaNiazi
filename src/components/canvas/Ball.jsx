import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Decal, Float, Preload, useTexture } from '@react-three/drei';

import CanvasLoader from '../Loader';

const Ball = (props) => {
  const [decal] = useTexture([props.imageUrl]);

  return (
    <Float speed={1.75} floatIntensity={2}>
      <ambientLight intensity={0.25} />
      {/* Add directionalLightHelper for debugging */}
      <directionalLight position={[0, 0, 0.05]}>
        <mesh castShadow receiveShadow scale={2.75}>
          <icosahedronGeometry args={[1, 1]} />
          <meshStandardMaterial color={'#fff8eb'} flatShading={true} />

          <Decal map={decal} 
          position={[0, 0, 1]}
          />
        </mesh>
      </directionalLight>
    </Float>
  );
};

const BallCanvas = ({icon}) => {
  return (
    <Canvas frameloop="demand" gl={{ preserveDrawingBuffer: true }}>
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls enableZoom={false} maxPolarAngle={Math.PI / 2} minPolarAngle={Math.PI / 2} />
        <Ball imageUrl={icon} />
      </Suspense>
      
      <Preload all />
    </Canvas>
  );
};

export default BallCanvas;

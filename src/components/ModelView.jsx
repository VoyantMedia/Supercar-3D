import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

function ModelView() {
  const model = useLoader(GLTFLoader, '/models/scene.glb');

  return (
    <div className="canvas-container">
      <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
        {/* Adjust the camera position and field of view as needed */}
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <Suspense fallback={<span>Loading...</span>}>
          <primitive object={model.scene} position={[0, -1, 0]} scale={0.5} />
        </Suspense>
        <OrbitControls />
      </Canvas>
    </div>
  );
}

export default ModelView;

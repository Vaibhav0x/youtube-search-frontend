import React from 'react';
import { Canvas } from '@react-three/fiber';
// import DNAHelixStructure from './FloatingElements';
// import GeometricConstellation from './FloatingElements';
import FlowingParticleWaves from './FloatingElements';
// import MorphingDistortionSpheres from './FloatingElements';
// import QuantumFieldGrid from './FloatingElements';
// import CosmicNebula from './FloatingElements';

const Background3D = () => {
    return (
        <div className="absolute inset-0 opacity-30">
            <Canvas camera={{ position: [0, 0, 10], fov: 60 }}>
                <ambientLight intensity={0.5} />
                <pointLight position={[10, 10, 10]} />
                <FlowingParticleWaves />
            </Canvas>
        </div>
    );
};

export default Background3D;
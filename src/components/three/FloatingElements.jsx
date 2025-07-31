import React, { useRef, useMemo, useState } from 'react';
// import { Sphere } from '@react-three/drei';
import * as THREE from 'three';
import { Canvas, useFrame, extend } from '@react-three/fiber';
import { Sphere, Box, Torus, Octahedron, Text, Float, MeshDistortMaterial, MeshWobbleMaterial } from '@react-three/drei';
import { motion } from 'framer-motion';

// This create the floating Elements in the 3D background
// const FloatingElements = () => {
//     const groupRef = useRef();

//     useFrame((state) => {
//         if (groupRef.current) {
//             groupRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.2) * 0.1;
//             groupRef.current.rotation.y = state.clock.elapsedTime * 0.1;
//         }
//     });

//     return (
//         <group ref={groupRef}>
//             {[...Array(15)].map((_, i) => (
//                 <Sphere
//                     key={i}
//                     position={[
//                         (Math.random() - 0.5) * 20,
//                         (Math.random() - 0.5) * 20,
//                         (Math.random() - 0.5) * 20
//                     ]}
//                     scale={0.1 + Math.random() * 0.3}
//                 >
//                     <meshStandardMaterial
//                         color={new THREE.Color().setHSL(Math.random(), 0.7, 0.6)}
//                         transparent
//                         opacity={0.3}
//                     />
//                 </Sphere>
//             ))}
//         </group>
//     );
// };

// export default FloatingElements;


// This creates a DNA helix structure with floating spheres

// const DNAHelixStructure = () => {
//     const groupRef = useRef();
//     const helixRef = useRef();

//     const helixPoints = useMemo(() => {
//         const points = [];
//         for (let i = 0; i < 100; i++) {
//             const angle = (i / 100) * Math.PI * 6;
//             const radius = 3;
//             const height = (i / 100) * 20 - 10;

//             points.push({
//                 position1: [
//                     Math.cos(angle) * radius,
//                     height,
//                     Math.sin(angle) * radius
//                 ],
//                 position2: [
//                     Math.cos(angle + Math.PI) * radius,
//                     height,
//                     Math.sin(angle + Math.PI) * radius
//                 ],
//                 color: new THREE.Color().setHSL((i / 100), 0.8, 0.6)
//             });
//         }
//         return points;
//     }, []);

//     useFrame((state) => {
//         if (groupRef.current) {
//             groupRef.current.rotation.y = state.clock.elapsedTime * 0.3;
//         }
//     });

//     return (
//         <group ref={groupRef}>
//             {helixPoints.map((point, i) => (
//                 <group key={i}>
//                     <Sphere position={point.position1} scale={0.2}>
//                         <meshStandardMaterial color={point.color} transparent opacity={0.8} />
//                     </Sphere>
//                     <Sphere position={point.position2} scale={0.2}>
//                         <meshStandardMaterial color={point.color} transparent opacity={0.8} />
//                     </Sphere>
//                     {/* Connection line */}
//                     <mesh>
//                         <cylinderGeometry args={[0.05, 0.05, 6, 8]} />
//                         <meshStandardMaterial color={point.color} transparent opacity={0.4} />
//                         <primitive
//                             object={new THREE.Object3D()}
//                             position={[0, point.position1[1], 0]}
//                             rotation={[0, 0, Math.PI / 2]}
//                         />
//                     </mesh>
//                 </group>
//             ))}
//         </group>
//     );
// };

// export default DNAHelixStructure;


// This creates a geometric constellation with floating shapes
// const GeometricConstellation = () => {
//     const groupRef = useRef();
//     const meshRefs = useRef([]);

//     const positions = useMemo(() => {
//         return Array.from({ length: 20 }, () => ({
//             x: (Math.random() - 0.5) * 30,
//             y: (Math.random() - 0.5) * 30,
//             z: (Math.random() - 0.5) * 30,
//             rotationSpeed: Math.random() * 0.02 + 0.005,
//             color: new THREE.Color().setHSL(Math.random(), 0.8, 0.6),
//             size: Math.random() * 0.5 + 0.2
//         }));
//     }, []);

//     useFrame((state) => {
//         if (groupRef.current) {
//             groupRef.current.rotation.y = state.clock.elapsedTime * 0.1;
//         }

//         meshRefs.current.forEach((mesh, i) => {
//             if (mesh) {
//                 mesh.rotation.x += positions[i].rotationSpeed;
//                 mesh.rotation.z += positions[i].rotationSpeed * 0.5;
//                 mesh.position.y += Math.sin(state.clock.elapsedTime + i) * 0.01;
//             }
//         });
//     });

//     return (
//         <group ref={groupRef}>
//             {positions.map((pos, i) => (
//                 <Float key={i} speed={1.5} rotationIntensity={0.5} floatIntensity={0.5}>
//                     {i % 3 === 0 ? (
//                         <Octahedron
//                             ref={(el) => (meshRefs.current[i] = el)}
//                             position={[pos.x, pos.y, pos.z]}
//                             scale={pos.size}
//                         >
//                             <meshStandardMaterial color={pos.color} transparent opacity={0.6} />
//                         </Octahedron>
//                     ) : i % 3 === 1 ? (
//                         <Box
//                             ref={(el) => (meshRefs.current[i] = el)}
//                             position={[pos.x, pos.y, pos.z]}
//                             scale={pos.size}
//                         >
//                             <meshStandardMaterial color={pos.color} transparent opacity={0.4} wireframe />
//                         </Box>
//                     ) : (
//                         <Torus
//                             ref={(el) => (meshRefs.current[i] = el)}
//                             position={[pos.x, pos.y, pos.z]}
//                             scale={pos.size}
//                             args={[1, 0.3, 8, 16]}
//                         >
//                             <meshStandardMaterial color={pos.color} transparent opacity={0.5} />
//                         </Torus>
//                     )}
//                 </Float>
//             ))}
//         </group>
//     );
// };

// export default GeometricConstellation;

// This creates a flowing particle wave effect

const FlowingParticleWave = () => {
    const meshRef = useRef();
    const particlesRef = useRef();

    const particleCount = 200;
    const positions = useMemo(() => {
        const pos = new Float32Array(particleCount * 3);
        for (let i = 0; i < particleCount; i++) {
            pos[i * 3] = (Math.random() - 0.5) * 40;
            pos[i * 3 + 1] = (Math.random() - 0.5) * 40;
            pos[i * 3 + 2] = (Math.random() - 0.5) * 40;
        }
        return pos;
    }, []);

    useFrame((state) => {
        if (particlesRef.current) {
            const positions = particlesRef.current.geometry.attributes.position.array;
            for (let i = 0; i < particleCount; i++) {
                const i3 = i * 3;
                positions[i3 + 1] += Math.sin(state.clock.elapsedTime + positions[i3]) * 0.01;
                positions[i3] += Math.cos(state.clock.elapsedTime * 0.5 + positions[i3 + 2]) * 0.005;
            }
            particlesRef.current.geometry.attributes.position.needsUpdate = true;
        }
    });

    return (
        <points ref={particlesRef}>
            <bufferGeometry>
                <bufferAttribute
                    attach="attributes-position"
                    count={particleCount}
                    array={positions}
                    itemSize={3}
                />
            </bufferGeometry>
            <pointsMaterial
                size={0.3}
                color="#ff6b6b"
                transparent
                opacity={0.6}
                vertexColors={false}
            />
        </points>
    );
};
export default FlowingParticleWave;


// const MorphingDistortionSpheres = () => {
//     const groupRef = useRef();

//     const spheres = useMemo(() => {
//         return Array.from({ length: 8 }, (_, i) => ({
//             position: [
//                 Math.cos((i / 8) * Math.PI * 2) * 8,
//                 Math.sin((i / 8) * Math.PI * 2) * 8,
//                 (Math.random() - 0.5) * 10
//             ],
//             color: new THREE.Color().setHSL((i / 8), 0.7, 0.6),
//             speed: Math.random() * 0.02 + 0.01
//         }));
//     }, []);

//     useFrame((state) => {
//         if (groupRef.current) {
//             groupRef.current.rotation.y = state.clock.elapsedTime * 0.05;
//             groupRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.3) * 0.2;
//         }
//     });

//     return (
//         <group ref={groupRef}>
//             {spheres.map((sphere, i) => (
//                 <Float key={i} speed={2} rotationIntensity={0.8} floatIntensity={1}>
//                     <Sphere position={sphere.position} scale={1.5}>
//                         <MeshDistortMaterial
//                             color={sphere.color}
//                             attach="material"
//                             distort={0.4}
//                             speed={sphere.speed * 5}
//                             roughness={0.1}
//                             transparent
//                             opacity={0.7}
//                         />
//                     </Sphere>
//                 </Float>
//             ))}
//         </group>
//     );
// };

// export default MorphingDistortionSpheres;


// const QuantumFieldGrid = () => {
//     const gridRef = useRef();
//     const meshes = useRef([]);

//     const gridSize = 15;
//     const gridSpacing = 2;

//     useFrame((state) => {
//         meshes.current.forEach((mesh, i) => {
//             if (mesh) {
//                 const x = i % gridSize;
//                 const z = Math.floor(i / gridSize);
//                 const wave = Math.sin(state.clock.elapsedTime + x * 0.3 + z * 0.3) * 0.5;
//                 mesh.position.y = wave;
//                 mesh.rotation.y = state.clock.elapsedTime + i * 0.1;
//                 mesh.scale.setScalar(0.5 + wave * 0.3);
//             }
//         });
//     });

//     return (
//         <group ref={gridRef}>
//             {Array.from({ length: gridSize * gridSize }, (_, i) => {
//                 const x = (i % gridSize) * gridSpacing - (gridSize * gridSpacing) / 2;
//                 const z = Math.floor(i / gridSize) * gridSpacing - (gridSize * gridSpacing) / 2;
//                 const color = new THREE.Color().setHSL((i / (gridSize * gridSize)), 0.7, 0.6);

//                 return (
//                     <Box
//                         key={i}
//                         ref={(el) => (meshes.current[i] = el)}
//                         position={[x, 0, z]}
//                         scale={0.5}
//                     >
//                         <meshStandardMaterial color={color} transparent opacity={0.6} wireframe />
//                     </Box>
//                 );
//             })}
//         </group>
//     );
// };
// export default QuantumFieldGrid;



// const CosmicNebula = () => {
//     const cloudRef = useRef();
//     const starsRef = useRef();

//     const starPositions = useMemo(() => {
//         const positions = new Float32Array(500 * 3);
//         for (let i = 0; i < 500; i++) {
//             positions[i * 3] = (Math.random() - 0.5) * 50;
//             positions[i * 3 + 1] = (Math.random() - 0.5) * 50;
//             positions[i * 3 + 2] = (Math.random() - 0.5) * 50;
//         }
//         return positions;
//     }, []);

//     useFrame((state) => {
//         if (cloudRef.current) {
//             cloudRef.current.rotation.y = state.clock.elapsedTime * 0.02;
//             cloudRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.1) * 0.1;
//         }

//         if (starsRef.current) {
//             starsRef.current.rotation.y = -state.clock.elapsedTime * 0.01;
//         }
//     });

//     return (
//         <group>
//             {/* Stars */}
//             <points ref={starsRef}>
//                 <bufferGeometry>
//                     <bufferAttribute
//                         attach="attributes-position"
//                         count={500}
//                         array={starPositions}
//                         itemSize={3}
//                     />
//                 </bufferGeometry>
//                 <pointsMaterial size={0.1} color="white" transparent opacity={0.8} />
//             </points>

//             {/* Nebula clouds */}
//             <group ref={cloudRef}>
//                 {Array.from({ length: 6 }, (_, i) => (
//                     <Sphere
//                         key={i}
//                         position={[
//                             Math.cos(i) * 8,
//                             Math.sin(i) * 8,
//                             Math.cos(i * 2) * 8
//                         ]}
//                         scale={[3, 2, 3]}
//                     >
//                         <MeshWobbleMaterial
//                             color={new THREE.Color().setHSL(i / 6, 0.8, 0.4)}
//                             factor={0.6}
//                             speed={0.5}
//                             transparent
//                             opacity={0.3}
//                         />
//                     </Sphere>
//                 ))}
//             </group>
//         </group>
//     );
// };

// export default CosmicNebula;




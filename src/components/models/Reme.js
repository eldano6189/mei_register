import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

export default function Reme({ ...props }) {
  const group = useRef();
  const model = useRef();
  const { nodes, materials } = useGLTF("/models/reme.glb");

  useFrame(() => {
    model.current.rotation.y += 0.005;
  });

  const scale = 0.02;
  return (
    <group ref={group} {...props} dispose={null}>
      <group ref={model} position={[0, -2, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Tube_12.geometry}
          material={materials.Shelton}
          position={[0.01, 0, 0]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={scale}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Tube_18.geometry}
          material={materials.Shelton}
          position={[0.01, 0, 0]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={scale}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Tube_19.geometry}
          material={materials.Shelton}
          position={[0.01, 0, 0]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={scale}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Tube_20.geometry}
          material={materials.Shelton}
          position={[0.01, 0, 0]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={scale}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Tube_21.geometry}
          material={materials.Shelton}
          position={[0.01, 0, 0]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={scale}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Tube_13.geometry}
          material={materials.Shelton}
          position={[0.01, 0, 0]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={scale}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Tube_14.geometry}
          material={materials.Shelton}
          position={[0.01, 0, 0]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={scale}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Tube_15.geometry}
          material={materials.Shelton}
          position={[0.01, 0, 0]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={scale}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Tube_16.geometry}
          material={materials.Shelton}
          position={[0.01, 0, 0]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={scale}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Tube_17.geometry}
          material={materials.Shelton}
          position={[0.01, 0, 0]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={scale}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Tube_6.geometry}
          material={materials.Shelton}
          position={[0.01, 0, 0]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={scale}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Tube_7.geometry}
          material={materials.Shelton}
          position={[0.01, 0, 0]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={scale}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Tube_8.geometry}
          material={materials.Shelton}
          position={[0.01, 0, 0]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={scale}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Tube_9.geometry}
          material={materials.Shelton}
          position={[0.01, 0, 0]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={scale}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Tube_10.geometry}
          material={materials.Shelton}
          position={[0.01, 0, 0]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={scale}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Tube_11.geometry}
          material={materials.Shelton}
          position={[0.01, 0, 0]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={scale}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Tube_1.geometry}
          material={materials.Shelton}
          position={[0.01, 0, 0]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={scale}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Tube_5.geometry}
          material={materials.Shelton}
          position={[0.01, 0, 0]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={scale}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Tube_4.geometry}
          material={materials.Shelton}
          position={[0.01, 0, 0]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={scale}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Tube_3.geometry}
          material={materials.Shelton}
          position={[0.01, 0, 0]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={scale}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Tube_2.geometry}
          material={materials.Shelton}
          position={[0.01, 0, 0]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={scale}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Tube.geometry}
          material={materials.Shelton}
          position={[0.01, 0, 0]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={scale}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Tube_22.geometry}
          material={materials.Shelton}
          position={[0.01, 0, 0]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={scale}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sphere.geometry}
          material={materials.Shelton}
          position={[0.01, 0, 0]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={scale}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.horse.geometry}
          material={materials.Shelton}
          position={[0.01, 0, 0]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={scale}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Bolt.geometry}
          material={materials.Shelton}
          position={[0.01, 0, 0]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={scale}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Crown.geometry}
          material={materials.Shelton}
          position={[0.01, 0, 0]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={scale}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/models/reme.glb");

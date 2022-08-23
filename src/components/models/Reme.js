import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

export default function Reme({ ...props }) {
  const group = useRef();
  const model = useRef();
  const { nodes, materials } = useGLTF("/models/reme.glb");

  useFrame(() => {
    model.current.rotation.y -= 0.005;
  });

  const scale = 0.02;
  return (
    <group ref={group} {...props} dispose={null}>
      <group ref={model} position={[0, -2, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.eagle.geometry}
          material={materials["Charming Nature"]}
          position={[0.01, 0, 0]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={scale}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.chain.geometry}
          material={materials["Charming Nature"]}
          position={[0.01, 0, 0]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={scale}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.globe.geometry}
          material={materials["Charming Nature"]}
          position={[0.01, 0, 0]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={scale}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.horse.geometry}
          material={materials["Charming Nature"]}
          position={[0.01, 0, 0]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={scale}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Bolt.geometry}
          material={materials["Charming Nature"]}
          position={[0.01, 0, 0]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={scale}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Crown.geometry}
          material={materials["Charming Nature"]}
          position={[0.01, 0, 0]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={scale}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/models/reme.glb");

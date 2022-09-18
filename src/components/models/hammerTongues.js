//External imports
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

export default function HammerTongues({ ...props }) {
  //Component references
  const group = useRef();
  const crown = useRef();
  const { nodes, materials } = useGLTF("/models/hammerTongues.glb");

  useFrame(() => {
    crown.current.rotation.y -= 0.04;
  });

  return (
    <group ref={group} {...props} dispose={null} scale={0.18}>
      <group position={[0, -9, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.hammerHead.geometry}
          material={materials["Material.002"]}
          position={[4.29, 12.09, -0.78]}
          rotation={[3.09, 0.01, -2.31]}
          scale={1.16}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.hammerHandle.geometry}
          material={materials["Material.008"]}
          position={[0.27, 9.33, -0.64]}
          rotation={[3.1, 0, -2.32]}
          scale={[0.89, 7.37, 0.53]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.tongueLeft.geometry}
          material={materials["Material.002"]}
          position={[4.63, 4.42, 0.47]}
          rotation={[1.46, -0.02, -0.01]}
          scale={1.06}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.tongueRight.geometry}
          material={materials["Material.002"]}
          position={[5.69, 5.98, 0.42]}
          rotation={[-1.9, 1.18, 0.28]}
          scale={1.06}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.stand.geometry}
          material={materials["Material.001"]}
          position={[0.01, 3.19, 0]}
          scale={[7.56, 0.44, 7.56]}
        />
        <mesh
          ref={crown}
          castShadow
          receiveShadow
          geometry={nodes.crown.geometry}
          material={materials["Material.002"]}
          position={[-0.41, 16.14, -0.17]}
          scale={0.47}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane.geometry}
          material={materials["Material.002"]}
          position={[0.05, 1.3, 7.73]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[5.85, 0.49, 1]}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/models/hammerTongues.glb");

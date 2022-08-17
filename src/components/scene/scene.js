import { Suspense } from "react";

import {
  ContactShadows,
  Environment,
  OrbitControls,
  SpotLight,
} from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

export const ModelScene = ({ children }) => {
  const color1 = "blue";
  const color2 = "yellow";
  const color3 = "red";

  return (
    <Canvas shadowMap>
      <SpotLight
        position={[-4, 4, 2]}
        distance={5}
        color={color1}
        angle={0.15}
        attenuation={5}
        anglePower={8}
      />
      <SpotLight
        position={[0, 4, 2]}
        distance={5}
        color={color2}
        angle={0.15}
        attenuation={5}
        anglePower={8}
      />
      <SpotLight
        position={[4, 4, 2]}
        distance={5}
        color={color3}
        angle={0.15}
        attenuation={5}
        anglePower={8}
      />
      <SpotLight
        position={[-4, 4, -2]}
        distance={5}
        color={color1}
        angle={0.15}
        attenuation={5}
        anglePower={8}
      />
      <SpotLight
        position={[0, 4, -2]}
        distance={5}
        color={color2}
        angle={0.15}
        attenuation={5}
        anglePower={8}
      />
      <SpotLight
        position={[4, 4, -2]}
        distance={5}
        color={color3}
        angle={0.15}
        attenuation={5}
        anglePower={8}
      />
      <Environment preset={"studio"} />
      <OrbitControls
        minPolarAngle={Math.PI / 2}
        maxPolarAngle={Math.PI / 2}
        enableZoom={false}
        enablePan={false}
      />
      <Suspense fallback={null}>
        {children}
        <ContactShadows
          position={[0, -2, 0]}
          opacity={0.8}
          scale={10}
          blur={2}
          far={3}
        />
      </Suspense>
    </Canvas>
  );
};

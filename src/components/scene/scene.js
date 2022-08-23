import { Suspense } from "react";

import {
  ContactShadows,
  Environment,
  OrbitControls,
  SpotLight,
  Html,
  useProgress,
} from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

const Loader = () => {
  const { progress } = useProgress();
  return (
    <Html center zIndexRange={[0, 0]}>
      <h1>{progress.toFixed(0)}%</h1>
    </Html>
  );
};

export const ModelScene = ({ children }) => {
  const color1 = "#4169e1";
  const color2 = "#ffef00";
  const color3 = "#b12820";
  const angle = 0.3;
  const power = 5;
  const attenuation = 6;
  const distance = 10;

  return (
    <Canvas shadows>
      <SpotLight
        castShadow
        position={[-4, 4, 2]}
        distance={distance}
        color={color1}
        angle={angle}
        attenuation={attenuation}
        anglePower={power}
      />
      <SpotLight
        castShadow
        position={[0, 4, 2]}
        distance={distance}
        color={color2}
        angle={angle}
        attenuation={attenuation}
        anglePower={power}
      />
      <SpotLight
        castShadow
        position={[4, 4, 2]}
        distance={distance}
        color={color3}
        angle={angle}
        attenuation={attenuation}
        anglePower={power}
      />
      <SpotLight
        castShadow
        position={[-4, 4, -2]}
        distance={distance}
        color={color1}
        angle={angle}
        attenuation={attenuation}
        anglePower={power}
      />
      <SpotLight
        castShadow
        position={[0, 4, -2]}
        distance={distance}
        color={color2}
        angle={angle}
        attenuation={attenuation}
        anglePower={power}
      />
      <SpotLight
        castShadow
        position={[4, 4, -2]}
        distance={distance}
        color={color3}
        angle={angle}
        attenuation={attenuation}
        anglePower={power}
      />
      <Environment files="/models/hdr.hdr" />
      <OrbitControls
        minPolarAngle={Math.PI / 2}
        maxPolarAngle={Math.PI / 2}
        enableZoom={false}
        enablePan={false}
        autoRotate
      />
      <Suspense fallback={<Loader />}>
        {children}
        <ContactShadows
          position={[0, -2, 0]}
          opacity={0.6}
          scale={6}
          blur={2}
          far={4}
        />
      </Suspense>
    </Canvas>
  );
};

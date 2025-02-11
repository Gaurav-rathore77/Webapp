import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Sphere } from "@react-three/drei";
import { pointsInner, pointsOuter } from "./utils";
import Service from "./Service";
import Service2 from "./Service2";
import CardHang from "./CardHang";
import TextHead from "./TextHead";
import Footer from "../components/Footer";
import Banner from "./Banner";
const App = () => {
  const handleScroll = () => {
    window.scrollTo({
      top: window.innerHeight, // Next page की height पर scroll
      behavior: "smooth", // Smooth animation
    });
  };

  return (
    <>
    <div className="relative h-screen w-screen shadow-2xl">
      <div className="relative h-screen shadow-2xl">
      {/* Canvas */}
      <Canvas
        camera={{
          position: [10, -7.5, -5],
        }}
        className="fixed inset-0 bg-white dark:bg-gray-800"
      >
        <OrbitControls maxDistance={20} minDistance={10} />
        <directionalLight />
        <pointLight position={[-30, 0, -30]} power={10.0} />
        <PointCircle />
      </Canvas>

      {/* Centered Text */}
      <div className="absolute inset-0 flex items-center justify-center z-10 shadow-2xl">
        <TextHead/>
      </div>

      {/* Arrow Button */}
      <button
        onClick={handleScroll}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 bg-slate-800 text-white p-4 rounded-full shadow-lg hover:bg-slate-700 transition z-10"
        aria-label="Scroll Down"
      >
        ↓
      </button>

      {/* Second Page */}
      </div>
     <div className="relative">
      <CardHang/>
     </div >
      <Service/>
      <Service2/>
      <Banner/>
      <div className="relative inset-0 bg-gradient-radial from-transparent to-gray-800 opacity-75">
      <Footer/>
      </div>
    </div>
    </>
  );
};

const PointCircle = () => {
  const ref = useRef(null);

  useFrame(({ clock }) => {
    if (ref.current?.rotation) {
      ref.current.rotation.z = clock.getElapsedTime() * 0.05;
    }
  });

  return (
    <group ref={ref}>
      {pointsInner.map((point) => (
        <Point key={point.idx} position={point.position} color={point.color} />
      ))}
      {pointsOuter.map((point) => (
        <Point key={point.idx} position={point.position} color={point.color} />
      ))}
    </group>
  );
};

const Point = ({ position, color }) => {
  return (
    <Sphere position={position} args={[0.1, 10, 10]}>
      <meshStandardMaterial
        emissive={color}
        emissiveIntensity={0.5}
        roughness={0.5}
        color={color}
      />
    </Sphere>
  );
};

export default App;

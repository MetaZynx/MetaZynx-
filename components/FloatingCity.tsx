"use client";
import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function FloatingCity() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mountRef.current) return;

    // Scene
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, mountRef.current.clientWidth / mountRef.current.clientHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(mountRef.current.clientWidth, mountRef.current.clientHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    mountRef.current.appendChild(renderer.domElement);

    camera.position.set(0, 8, 18);
    camera.lookAt(0, 0, 0);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.4);
    scene.add(ambientLight);

    const orangeLight = new THREE.PointLight(0xE8440A, 3, 20);
    orangeLight.position.set(5, 8, 5);
    orangeLight.castShadow = true;
    scene.add(orangeLight);

    const navyLight = new THREE.PointLight(0x4A6FA5, 2, 25);
    navyLight.position.set(-6, 6, -4);
    scene.add(navyLight);

    const topLight = new THREE.DirectionalLight(0xffffff, 0.8);
    topLight.position.set(0, 15, 10);
    topLight.castShadow = true;
    scene.add(topLight);

    // --- BASE ISLAND ---
    const islandGroup = new THREE.Group();

    // Main island base — rocky terrain shape
    const islandGeo = new THREE.CylinderGeometry(5, 3.5, 1.5, 8, 1);
    const islandMat = new THREE.MeshStandardMaterial({
      color: 0x1B2D5B,
      roughness: 0.8,
      metalness: 0.2,
    });
    const island = new THREE.Mesh(islandGeo, islandMat);
    island.castShadow = true;
    island.receiveShadow = true;
    islandGroup.add(island);

    // Island bottom taper
    const bottomGeo = new THREE.CylinderGeometry(3.5, 0.5, 2, 8, 1);
    const bottom = new THREE.Mesh(bottomGeo, islandMat);
    bottom.position.y = -1.7;
    islandGroup.add(bottom);

    // Ground plane on island
    const groundGeo = new THREE.CylinderGeometry(4.8, 4.8, 0.2, 8);
    const groundMat = new THREE.MeshStandardMaterial({
      color: 0x0D1B35,
      roughness: 0.9,
    });
    const ground = new THREE.Mesh(groundGeo, groundMat);
    ground.position.y = 0.85;
    ground.receiveShadow = true;
    islandGroup.add(ground);

    // --- BUILDINGS ---
    const buildingMat = new THREE.MeshStandardMaterial({
      color: 0x1B2D5B,
      roughness: 0.3,
      metalness: 0.7,
    });
    const glowMat = new THREE.MeshStandardMaterial({
      color: 0xE8440A,
      emissive: 0xE8440A,
      emissiveIntensity: 0.6,
      roughness: 0.2,
      metalness: 0.8,
    });
    const accentMat = new THREE.MeshStandardMaterial({
      color: 0xF5A623,
      emissive: 0xF5A623,
      emissiveIntensity: 0.4,
    });

    // Building data: [x, z, width, depth, height]
    const buildings = [
      [0, 0, 0.8, 0.8, 4.5],      // tallest center
      [1.2, 0.5, 0.7, 0.7, 3.2],
      [-1.2, 0.3, 0.6, 0.6, 2.8],
      [0.5, -1.5, 0.9, 0.6, 3.8],
      [-0.8, -1.2, 0.7, 0.5, 2.2],
      [2, -0.5, 0.5, 0.5, 2.5],
      [-2, 0.8, 0.6, 0.6, 1.8],
      [1.5, 1.8, 0.5, 0.5, 2.0],
      [-1.5, -0.5, 0.4, 0.4, 3.0],
      [0.2, 1.8, 0.6, 0.6, 1.5],
      [2.5, 1.2, 0.4, 0.4, 1.8],
      [-2.5, -0.5, 0.5, 0.5, 1.2],
      [3, -1, 0.4, 0.4, 2.2],
      [-3, 1, 0.4, 0.4, 1.6],
    ];

    buildings.forEach(([x, z, w, d, h]) => {
      // Main building body
      const bGeo = new THREE.BoxGeometry(w, h, d);
      const b = new THREE.Mesh(bGeo, buildingMat.clone());
      b.position.set(x, 0.95 + h / 2, z);
      b.castShadow = true;
      b.receiveShadow = true;
      islandGroup.add(b);

      // Orange glow top
      const topGeo = new THREE.BoxGeometry(w * 0.8, 0.15, d * 0.8);
      const top = new THREE.Mesh(topGeo, Math.random() > 0.4 ? glowMat : accentMat);
      top.position.set(x, 0.95 + h + 0.08, z);
      islandGroup.add(top);

      // Windows — small emissive planes
      if (h > 2) {
        for (let floor = 0; floor < Math.floor(h / 0.6); floor++) {
          const windowGeo = new THREE.PlaneGeometry(w * 0.3, 0.12);
          const windowMat = new THREE.MeshBasicMaterial({
            color: Math.random() > 0.3 ? 0xF5A623 : 0xE8440A,
            transparent: true,
            opacity: Math.random() * 0.6 + 0.2
          });
          const win = new THREE.Mesh(windowGeo, windowMat);
          win.position.set(x, 0.95 + 0.4 + floor * 0.55, z + d / 2 + 0.01);
          win.rotation.y = 0;
          islandGroup.add(win);
        }
      }
    });

    // --- ROADS on island ---
    const roadMat = new THREE.MeshBasicMaterial({ color: 0x0D1B35 });
    const road1 = new THREE.Mesh(new THREE.PlaneGeometry(0.3, 9), roadMat);
    road1.rotation.x = -Math.PI / 2;
    road1.position.set(0, 0.96, 0);
    islandGroup.add(road1);
    const road2 = new THREE.Mesh(new THREE.PlaneGeometry(9, 0.3), roadMat);
    road2.rotation.x = -Math.PI / 2;
    road2.position.set(0, 0.96, 0);
    islandGroup.add(road2);

    // --- FLOATING PARTICLES around island ---
    const particleCount = 60;
    const particleGeo = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount; i++) {
      const angle = Math.random() * Math.PI * 2;
      const radius = Math.random() * 8 + 3;
      positions[i * 3] = Math.cos(angle) * radius;
      positions[i * 3 + 1] = (Math.random() - 0.3) * 6;
      positions[i * 3 + 2] = Math.sin(angle) * radius;
    }
    particleGeo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    const particleMat = new THREE.PointsMaterial({
      color: 0xE8440A,
      size: 0.08,
      transparent: true,
      opacity: 0.7
    });
    const particleSystem = new THREE.Points(particleGeo, particleMat);
    scene.add(particleSystem);

    // --- RING around island base ---
    const ringGeo = new THREE.TorusGeometry(6, 0.06, 8, 80);
    const ringMat = new THREE.MeshBasicMaterial({
      color: 0xE8440A,
      transparent: true,
      opacity: 0.3
    });
    const ring = new THREE.Mesh(ringGeo, ringMat);
    ring.rotation.x = Math.PI / 2;
    ring.position.y = -0.5;
    scene.add(ring);

    // Second ring
    const ring2Geo = new THREE.TorusGeometry(7.5, 0.03, 8, 80);
    const ring2Mat = new THREE.MeshBasicMaterial({
      color: 0x4A6FA5,
      transparent: true,
      opacity: 0.2
    });
    const ring2 = new THREE.Mesh(ring2Geo, ring2Mat);
    ring2.rotation.x = Math.PI / 2;
    ring2.position.y = -1;
    scene.add(ring2);

    scene.add(islandGroup);

    // Fog for depth
    scene.fog = new THREE.FogExp2(0x0A1628, 0.025);

    // Animation
    let floatTime = 0;
    let mouseX = 0;
    let mouseY = 0;
    const onMouseMove = (e: MouseEvent) => {
      mouseX = (e.clientX / window.innerWidth - 0.5) * 2;
      mouseY = (e.clientY / window.innerHeight - 0.5) * 2;
    };
    window.addEventListener("mousemove", onMouseMove);

    const animate = () => {
      floatTime += 0.008;

      // Float up and down
      islandGroup.position.y = Math.sin(floatTime) * 0.3;

      // Slow rotation
      islandGroup.rotation.y += 0.003;

      // Mouse parallax tilt
      islandGroup.rotation.x += (mouseY * 0.08 - islandGroup.rotation.x) * 0.05;
      islandGroup.rotation.z += (-mouseX * 0.05 - islandGroup.rotation.z) * 0.05;

      // Rings rotate opposite
      ring.rotation.z += 0.004;
      ring2.rotation.z -= 0.002;

      // Particles orbit
      particleSystem.rotation.y += 0.002;

      // Orange light pulse
      orangeLight.intensity = 2.5 + Math.sin(floatTime * 2) * 0.5;

      renderer.render(scene, camera);
      requestAnimationFrame(animate);
    };
    animate();

    const handleResize = () => {
      if (!mountRef.current) return;
      camera.aspect = mountRef.current.clientWidth / mountRef.current.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(mountRef.current.clientWidth, mountRef.current.clientHeight);
    };
    window.addEventListener("resize", handleResize);

    const currentMount = mountRef.current;
    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("resize", handleResize);
      currentMount?.removeChild(renderer.domElement);
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={mountRef}
      className="w-full h-[400px] md:h-[500px] relative z-10"
    />
  );
}

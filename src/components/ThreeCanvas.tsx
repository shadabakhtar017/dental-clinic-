import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

interface ThreeCanvasProps {
  className?: string;
}

export const ThreeCanvas: React.FC<ThreeCanvasProps> = ({ className = '' }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Check prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Scene setup
    const scene = new THREE.Scene();

    // Camera setup
    const camera = new THREE.PerspectiveCamera(
      45,
      container.clientWidth / container.clientHeight,
      0.1,
      1000
    );
    camera.position.set(0, 0, 7);

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: 'high-performance'
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.1;
    container.appendChild(renderer.domElement);

    // Group for the entire dental visual
    const dentalGroup = new THREE.Group();
    scene.add(dentalGroup);

    // Create Organic Anatomical Tooth Geometry
    // We synthesize a smooth, anatomical molar/incisor crown geometry using a lathe/subdivision or custom vertex morphed geometry
    const crownGeometry = new THREE.CylinderGeometry(1.2, 0.7, 2.2, 48, 32, false);
    const pos = crownGeometry.attributes.position;
    
    // Sculpt the cylinder into an organic tooth crown with natural cusp lobes and root taper
    for (let i = 0; i < pos.count; i++) {
      const x = pos.getX(i);
      const y = pos.getY(i);
      const z = pos.getZ(i);
      
      const angle = Math.atan2(z, x);
      const radius = Math.sqrt(x * x + z * z);
      
      // Multi-cusp morphological waves (4 distinct dental lobes)
      const cuspWave = Math.sin(angle * 4) * 0.18 * (y > 0 ? (y / 1.1) : 0.05);
      
      // Occlusal groove indentation on top
      let yMod = y;
      if (y > 0.9) {
        const topDist = radius / 1.2;
        yMod += Math.sin(topDist * Math.PI) * 0.12 - Math.pow(1 - topDist, 2) * 0.08;
      }
      
      // Natural buccal/lingual curve
      const buccalCurvature = (1 + Math.cos(angle * 2) * 0.1) * (1 - Math.abs(y) * 0.15);
      const newRadius = (radius + cuspWave) * buccalCurvature;
      
      pos.setX(i, Math.cos(angle) * newRadius);
      pos.setY(i, yMod);
      pos.setZ(i, Math.sin(angle) * newRadius);
    }
    crownGeometry.computeVertexNormals();

    // High-end Biomimetic Enamel Ceramic Material
    const enamelMaterial = new THREE.MeshPhysicalMaterial({
      color: new THREE.Color('#FFFFFF'),
      emissive: new THREE.Color('#002B36'),
      emissiveIntensity: 0.04,
      roughness: 0.18,
      metalness: 0.05,
      clearcoat: 0.9,
      clearcoatRoughness: 0.12,
      transmission: 0.45, // Soft translucent dental ceramic feel
      ior: 1.54, // Crown enamel refractive index
      thickness: 1.2,
      specularColor: new THREE.Color('#00B4D8'),
      specularIntensity: 0.8,
    });

    const toothMesh = new THREE.Mesh(crownGeometry, enamelMaterial);
    toothMesh.position.y = 0.1;
    dentalGroup.add(toothMesh);

    // Inner glowing core to represent dental pulp / vital energy
    const coreGeometry = new THREE.IcosahedronGeometry(0.75, 2);
    const coreMaterial = new THREE.MeshBasicMaterial({
      color: new THREE.Color('#00B4D8'),
      wireframe: true,
      transparent: true,
      opacity: 0.22,
    });
    const coreMesh = new THREE.Mesh(coreGeometry, coreMaterial);
    coreMesh.position.y = 0.2;
    dentalGroup.add(coreMesh);

    // Precision Aesthetic Ring / Orbit around the tooth (Digital Smile Design arc)
    const ringGeometry = new THREE.TorusGeometry(1.85, 0.018, 16, 100);
    const ringMaterial = new THREE.MeshStandardMaterial({
      color: new THREE.Color('#00B4D8'),
      roughness: 0.2,
      metalness: 0.8,
      emissive: new THREE.Color('#0077B6'),
      emissiveIntensity: 0.3,
    });
    const ringMesh = new THREE.Mesh(ringGeometry, ringMaterial);
    ringMesh.rotation.x = Math.PI / 2.6;
    ringMesh.rotation.y = Math.PI / 8;
    dentalGroup.add(ringMesh);

    // Floating Luminescent Dental Micro-Particles
    const particlesCount = 75;
    const particlePositions = new Float32Array(particlesCount * 3);
    const particleScales = new Float32Array(particlesCount);

    for (let i = 0; i < particlesCount; i++) {
      particlePositions[i * 3] = (Math.random() - 0.5) * 8;
      particlePositions[i * 3 + 1] = (Math.random() - 0.5) * 6;
      particlePositions[i * 3 + 2] = (Math.random() - 0.5) * 6;
      particleScales[i] = Math.random() * 0.05 + 0.02;
    }

    const particleGeometry = new THREE.BufferGeometry();
    particleGeometry.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));

    // Particle sprite or round points
    const particleCanvas = document.createElement('canvas');
    particleCanvas.width = 32;
    particleCanvas.height = 32;
    const pCtx = particleCanvas.getContext('2d');
    if (pCtx) {
      const gradient = pCtx.createRadialGradient(16, 16, 0, 16, 16, 16);
      gradient.addColorStop(0, 'rgba(0, 180, 216, 1)');
      gradient.addColorStop(0.5, 'rgba(0, 180, 216, 0.3)');
      gradient.addColorStop(1, 'rgba(0, 180, 216, 0)');
      pCtx.fillStyle = gradient;
      pCtx.fillRect(0, 0, 32, 32);
    }
    const particleTexture = new THREE.CanvasTexture(particleCanvas);

    const particleMaterial = new THREE.PointsMaterial({
      color: new THREE.Color('#00B4D8'),
      size: 0.12,
      map: particleTexture,
      transparent: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
      opacity: 0.75,
    });

    const particles = new THREE.Points(particleGeometry, particleMaterial);
    scene.add(particles);

    // Studio Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.7);
    scene.add(ambientLight);

    const keyLight = new THREE.DirectionalLight(0xffffff, 1.4);
    keyLight.position.set(5, 6, 5);
    scene.add(keyLight);

    const cyanRimLight = new THREE.DirectionalLight(0x00b4d8, 2.0);
    cyanRimLight.position.set(-6, -2, -4);
    scene.add(cyanRimLight);

    const softFillLight = new THREE.DirectionalLight(0x90e0ef, 0.8);
    softFillLight.position.set(0, -5, 4);
    scene.add(softFillLight);

    // Mouse Parallax tracking
    let targetX = 0;
    let targetY = 0;
    let mouseX = 0;
    let mouseY = 0;

    const handleMouseMove = (event: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const clientX = event.clientX - rect.left;
      const clientY = event.clientY - rect.top;
      mouseX = (clientX / rect.width - 0.5) * 2;
      mouseY = -(clientY / rect.height - 0.5) * 2;
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    // Handle Resize with ResizeObserver
    const handleResize = () => {
      if (!container) return;
      const width = container.clientWidth;
      const height = container.clientHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };

    const resizeObserver = new ResizeObserver(() => handleResize());
    resizeObserver.observe(container);

    // Animation Loop
    let animationFrameId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      if (!prefersReducedMotion) {
        // Smooth lerp towards target
        targetX += (mouseX * 0.4 - targetX) * 0.04;
        targetY += (mouseY * 0.3 - targetY) * 0.04;

        // Elegant floating & slow cinematic rotation
        dentalGroup.rotation.y = elapsedTime * 0.25 + targetX;
        dentalGroup.rotation.x = Math.sin(elapsedTime * 0.5) * 0.08 + targetY;
        dentalGroup.position.y = Math.sin(elapsedTime * 0.8) * 0.12;

        // Core pulsating glow
        const pulse = 1 + Math.sin(elapsedTime * 1.5) * 0.05;
        coreMesh.scale.set(pulse, pulse, pulse);
        coreMesh.rotation.y = -elapsedTime * 0.4;

        // Ring precession
        ringMesh.rotation.z = elapsedTime * 0.35;

        // Micro-particle slow orbital drift
        particles.rotation.y = elapsedTime * 0.04;
        particles.rotation.x = Math.sin(elapsedTime * 0.02) * 0.1;
      }

      renderer.render(scene, camera);
    };

    animate();

    // Cleanup on unmount
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
      resizeObserver.disconnect();
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
      crownGeometry.dispose();
      coreGeometry.dispose();
      ringGeometry.dispose();
      particleGeometry.dispose();
      enamelMaterial.dispose();
      coreMaterial.dispose();
      ringMaterial.dispose();
      particleMaterial.dispose();
      particleTexture.dispose();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className={`relative w-full h-full pointer-events-none ${className}`}
      aria-hidden="true"
    />
  );
};

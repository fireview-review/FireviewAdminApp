import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

const ThreeDCharacter = ({ modelUrl }) => {
    const mountRef = useRef(null);

    useEffect(() => {
        const currentMount = mountRef.current;
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, currentMount.clientWidth / currentMount.clientHeight, 0.1, 1000);
        const initialCameraPosition = new THREE.Vector3(1.12279572297596, 0.8536284682975395, -0.6378972487935892);
        const initialTarget = new THREE.Vector3(-0.1524600900224049, 0.4476697088807893, 0.07010403358594752);

        // Position and angle of the camera
        camera.updateMatrixWorld(true);  // Ensure the camera's world matrix is updated
        
        const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
        renderer.setSize(currentMount.clientWidth, currentMount.clientHeight);
        renderer.setClearColor(0x000000, 0); 

        currentMount.appendChild(renderer.domElement);
        const ambientLight = new THREE.AmbientLight(0x404040, 100);  // Intensity of 100 is very high, usually 1 or 2 is sufficient
        const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
        directionalLight.position.set(0, 1, 1);
        const pointLight = new THREE.PointLight(0xffffff, 1, 100);
        pointLight.position.set(10, 20, 20);
        scene.add(ambientLight, directionalLight, pointLight);

        const controls = new OrbitControls(camera, renderer.domElement);
        controls.enableDamping = true;  // Enable damping
        controls.dampingFactor = 0.05; 
        controls.update();

        const loader = new GLTFLoader();
        loader.load(modelUrl, (gltf) => {
            scene.add(gltf.scene);
            const box = new THREE.Box3().setFromObject(gltf.scene);
            gltf.scene.position.y = -box.min.y;
        });

        const gridHelper = new THREE.GridHelper(10, 10);
        scene.add(gridHelper);

        const animate = () => {
            requestAnimationFrame(animate);
            
            camera.position.lerp(initialCameraPosition, 0.05);
            controls.target.lerp(initialTarget, 0.05);
            controls.update();
            renderer.render(scene, camera);
        };
        animate();

        const resizeObserver = new ResizeObserver(() => {
            renderer.setSize(currentMount.clientWidth, currentMount.clientHeight);
            camera.aspect = currentMount.clientWidth / currentMount.clientHeight;
            camera.updateProjectionMatrix();
        });
        resizeObserver.observe(currentMount);

        return () => {
            resizeObserver.disconnect();
            currentMount.removeChild(renderer.domElement);
            controls.dispose();
        };
    }, [modelUrl]);

    return <div ref={mountRef} style={{ width: '100%', height: '100%' }} />;
};

export default ThreeDCharacter;

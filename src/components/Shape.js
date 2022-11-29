import React from 'react';

// Import three
import * as THREE from 'three';
// import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

// Import layers
import fragment from '../shader/fragment.glsl';
import vertex from '../shader/vertex.glsl';

// init

const camera = new THREE.PerspectiveCamera(
  70,
  window.innerWidth / window.innerHeight,
  0.01,
  10
);
camera.position.z = 1;

const scene = new THREE.Scene();

const material = new THREE.ShaderMaterial({
  vertexShader: vertex,
  fragmentShader: fragment,
  uniforms: {
    time: { value: 0 },
    resolution: { value: new THREE.Vector4() },
  },
  extensions: {
    derivatives: '#extension GL_OES_standard_derivatives : enable',
  },
  side: THREE.DoubleSide,
  wireframe: true,
});

const geometry = new THREE.PlaneGeometry(1, 1, 300, 300);

const plane = new THREE.Mesh(geometry, material);

scene.add(plane);

const renderer = new THREE.WebGLRenderer({
  antialias: true,
  wireframe: true,
});

renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setAnimationLoop(animation);
document.body.appendChild(renderer.domElement);

// animation

function animation(time) {
  renderer.render(scene, camera);
}

function Shape() {
  return <div className="shape"></div>;
}

export default Shape;

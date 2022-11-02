import React from 'react';
import * as THREE from 'three';

// new code

addObjects() {
  extensions: {
  },
  side: THREE.DoubleSide,
  uniforms: {
    time: {value: 0},
    resolution: {value: new THREE.Vector4()},
  };
  wireframe: true,
  vertexShader: vertex,
  fragmentShader: fragment, 
};

// init

const camera = new THREE.PerspectiveCamera(
  70,
  window.innerWidth / window.innerHeight,
  0.01,
  10
);
camera.position.z = 1;

const scene = new THREE.Scene();

const geometry = new THREE.PlaneGeometry(1, 1, 300, 1);
const material = new THREE.MeshNormalMaterial();

const plane = new THREE.Mesh(geometry, material);
scene.add(plane);

const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
// renderer.setAnimationLoop(animation);
document.body.appendChild(renderer.domElement);

// animation

// function animation(time) {
//   mesh.rotation.x = time / 2000;
//   mesh.rotation.y = time / 1000;

//   renderer.render(scene, camera);
// }

function Background() {
  return <div class="shape"></div>;
}

export default Background;

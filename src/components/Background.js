import React from 'react';
import * as THREE from 'three';

// new code
class Sketch {
addObjects() {
  extensions: {
  },
  side: THREE.DoubleSide,
  uniforms: {
    time: {value: 0},
    resolution: {value: new THREE.Vector4()},
  },
  wireframe: true,
  vertexShader: vertex,
  fragmentShader: fragment,
});

this.geometry = new THREE.PlaneGeometry(1,1,300,300);

this.plane = new THREE.Mesh(this.geometry, this.material);
this.scene.add(plane);
}

addLights(){
  const light1 = new THREE.AmbientLight(0xffffff, 0.5);
  this.scene.add(light1);


  const light2 = new THREE.DirectionalLight(0xffffff, 0.5);
  light2.position.set(0.5, 0, 0.866);
  this.scene.add(light2);
}

stop(){
  this.isPlaying = false;
}

play(){
  if(!this.isPlaying){
    this.isPlaying = true;
    this.render()
  }
}


// //
// // init

// const camera = new THREE.PerspectiveCamera(
//   70,
//   window.innerWidth / window.innerHeight,
//   0.01,
//   10
// );
// camera.position.z = 1;

// const scene = new THREE.Scene();

// const geometry = new THREE.PlaneGeometry(1, 1, 300, 1);
// const material = new THREE.MeshNormalMaterial();

// const plane = new THREE.Mesh(geometry, material);
// scene.add(plane);

// const renderer = new THREE.WebGLRenderer({ antialias: true });
// renderer.setSize(window.innerWidth, window.innerHeight);
// renderer.setAnimationLoop(animation);
// document.body.appendChild(renderer.domElement);

// animation();

// function animation(time) {
//   plane.rotation.x = time / 2000;
//   plane.rotation.y = time / 1000;

//   renderer.render(scene, camera);
// }

function Background() {
  return <div class="shape"></div>;
}

export default Background;

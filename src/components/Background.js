import React from 'react';

// Import three
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls';

// Import layers
import Fragment from '../shader/fragment';
import Vertex from '../vertex.glsl';

export class Sketch extends React.PureComponent {
  constructor(options) {
    this.scene = new THREE.Scene();

    this.container = options.dom;
    this.width = this.container.offsetWidth;
    this.height = this.container.offsetHeight;
    this.renderer = new THREE.WebGLRenderer();
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    this.renderer.setSize(this.width, this.height);
    this.renderer.setClearColor(0xeeeeee, 1);
    this.renderer.physicallyCorrectLights = true;
    this.renderer.outputEncoding = THREE.sRGBEncoding;

    this.container.appendChild(this.renderer.domElement);

    this.camera = new THREE.PerspectiveCamera(
      70,
      this.width / this.height,
      0.001,
      1000
    );
  }
}

function Background() {
  return <div class="shape"></div>;
}

export default Background;

// // viwport
// var SCREEN_WIDTH = 1000;
// var SCREEN_HEIGHT = 600;

// //renderer
// var renderer = new THREE.WebGLRenderer();
// renderer.setSize(SCREEN_WIDTH, SCREEN_HEIGHT);
// document.body.appendChild(renderer.domElement);

// //scene
// var scene = new THREE.Scene();

// //camera
// var camera = new THREE.PerspectiveCamera(
//   45,
//   SCREEN_WIDTH / SCREEN_HEIGHT,
//   1,
//   1000
// );
// var vFOV = camera.fov * (Math.PI / 180);
// camera.position.z = SCREEN_HEIGHT / (2 * Math.tan(vFOV / 2));

// //plane
// var geometry = new THREE.PlaneGeometry(300, 300, 300, 300);
// var material = new THREE.MeshBasicMaterial({
//   color: 0xffff00,
//   side: THREE.DoubleSide,
//   wireframe: true,
// });
// var plane = new THREE.Mesh(geometry, material);
// scene.add(plane);

// function render() {
//   requestAnimationFrame(render);
//   plane.rotation.y += 0.1;
//   renderer.render(scene, camera);
// }

// render();

// // new code
// class Sketch {
// addObjects() {
//   extensions: {
//   },
//   side: THREE.DoubleSide,
//   uniforms: {
//     time: {value: 0},
//     resolution: {value: new THREE.Vector4()},
//   },
//   wireframe: true,
//   vertexShader: Vertex,
//   fragmentShader: Fragment,
// });

// this.geometry = new THREE.PlaneGeometry(1,1,300,300);

// this.plane = new THREE.Mesh(this.geometry, this.material);
// this.scene.add(plane);
// }

// addLights(){
//   const light1 = new THREE.AmbientLight(0xffffff, 0.5);
//   this.scene.add(light1);

//   const light2 = new THREE.DirectionalLight(0xffffff, 0.5);
//   light2.position.set(0.5, 0, 0.866);
//   this.scene.add(light2);
// }

// stop(){
//   this.isPlaying = false;
// }

// play(){
//   if(!this.isPlaying){
//     this.isPlaying = true;
//     this.render()
//   }

// render(){
//   if(!this.isPlaying) return;
//   this.time += 0.05;
//   this.material.uniforms.time.value = this.time;
//   requestAnimationFrame(this.render.bind(this));
//   this.renderer.render(this.scene, this.camera);
// }
// }

// new Sketch({
//   dom: document.getElementsByClassName("shape")
// });

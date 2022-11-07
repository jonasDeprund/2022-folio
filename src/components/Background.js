import React from 'react';
import * as THREE from 'three';
// Import layers
import Fragment from './fragment.glsl';
import Vertex from './fragment.glsl';

// new code
export class Sketch {
addObjects() {
  extensions: {
  },
  side: THREE.DoubleSide,
  uniforms: {
    time: {value: 0},
    resolution: {value: new THREE.Vector4()},
  },
  wireframe: true,
  vertexShader: Vertex,
  fragmentShader: Fragment,
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

render(){
  if(!this.isPlaying) return;
  this.time += 0.05;
  this.material.uniforms.time.value = this.time;
  requestAnimationFrame(this.render.bind(this));
  this.renderer.render(this.scene, this.camera);
}
}

new Sketch({
  dom: document.getElementsByClassName("shape")
});


function Background() {
  return <div class="shape"></div>;
}

export default Background;

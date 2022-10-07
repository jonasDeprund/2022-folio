import React from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { GLTFExporter } from 'three/examples/jsm/exporters/GLTF';
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader';
import fragment from './shader/fragment.glsl';
import vertex from './shader/vertex.glsl';
import GUI from 'lil-gui';
import gsap from 'gsap'

// code

export default class Sketch {
  addObjects() {
    extensions:{
    },
    side: THREE.DoubleSide,
    uniforms: {
      time: {value: 0},
      resolution: {value: new THREE.Vector4()},
    },
    wireframe: true,
    vertexShader: vertex,
    fragmentShader: fragment
});

this.geometry = new THREE.PlaneGeometry(1,1,1,1);

this.plane = new THREE.Mesh(this.geometry, this.material);
this.scene.add(this.plane);
}

addLights(){
  const light1 = new THREE.AmbientLight(0xffff, 0.5);
  this.scene.add(light1);

  const light2 = new THREE.AmbientLight(0xffff, 0.5);
  light2.position.set(0.5, 0, 0, 0.866);
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

new Sketch();

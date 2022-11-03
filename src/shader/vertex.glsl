uniform float time;
varying vec2 vUv;
varying vec3 vPosition;
uniform vec2 pixels;
float PI = 3.1415;

void main(){
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(postion, 1.0);
}
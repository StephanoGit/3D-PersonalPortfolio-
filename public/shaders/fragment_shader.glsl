export default /* glsl */`
uniform float uTime;

varying float vDisplacement;

varying vec3 vPosition;
varying vec3 vNormal;
varying vec2 vUv;

void main() {
	gl_FragColor = vec4(vec3(0.925, 0.356, 0.176), 1.0 );
}
`;

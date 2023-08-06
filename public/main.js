import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import {RenderPass} from 'three/examples/jsm/postprocessing/RenderPass';
import {EffectComposer} from 'three/examples/jsm/postprocessing/EffectComposer';
import {UnrealBloomPass} from 'three/examples/jsm/postprocessing/UnrealBloomPass';


import vertexShader from './shaders/vertex_shader.glsl';
import fragmentShader from './shaders/fragment_shader.glsl';
import vertexPars from './shaders/vertex_pars.glsl';
import vertexMain from './shaders/vertex_main.glsl';
import fragmentPars from './shaders/fragment_pars.glsl';
import fragmentMain from './shaders/fragment_main.glsl';

let tick;
let renderScene, composer, bloomPass, layer;
let scene, camera, renderer, controls;
let dirLight, ambientLight;
let geometry, material, sphere;

function getTick(){
    return Math.floor(Date.now() % 1000) / 10000;
}

function animate() {
    if (material.userData.shader === undefined) {
        controls.update();
        // renderer.render(scene, camera);
        composer.render();
        requestAnimationFrame(animate);
        return;
    }

    tick = getTick();
    if (tick < 0.05){
        material.userData.shader.uniforms.uTime.value = 0.1 - tick;
    } else {
        material.userData.shader.uniforms.uTime.value = tick;
    }

    // renderer.render(scene, camera);
    controls.update();
    composer.render();
    requestAnimationFrame(animate);
}

function setupLight(){
    dirLight = new THREE.DirectionalLight('#ec5b2d', 0.6);
    dirLight.position.set(4, 4, 4);

    ambientLight = new THREE.AmbientLight('#e04b1d', 0.5);
    scene.add(dirLight, ambientLight);
}


function setup(){
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
    renderer = new THREE.WebGLRenderer({ antialias: true, alpha: false});

    controls = new OrbitControls( camera, renderer.domElement );

    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);
    renderer.setClearColor(0x1a1a1a);
    scene.background = new THREE.Color(0x1a1a1a);

    camera.position.set( 0, 0, 3);

    renderScene = new RenderPass(scene, camera);
    composer = new EffectComposer(renderer);
    composer.addPass(renderScene);

    bloomPass = new UnrealBloomPass( new THREE.Vector2(window.innerWidth, window.innerHeight), 0.4, 0.1, 0.3);
    composer.addPass(bloomPass);


    setupLight();
    createSphere();
}

function createSphere(){
    geometry = new THREE.IcosahedronGeometry(1, 200);
    material = new THREE.MeshStandardMaterial({
        onBeforeCompile: (shader) => {
            material.userData.shader = shader
            shader.uniforms.uTime = {value: 0}
    
            const parsVertexString = /* glsl */`#include <displacementmap_pars_vertex>`
            shader.vertexShader = shader.vertexShader.replace(parsVertexString, parsVertexString + vertexPars)
            const mainVertexString = /* glsl */`#include <displacementmap_vertex>`
            shader.vertexShader = shader.vertexShader.replace(mainVertexString, mainVertexString + vertexMain)
    
            const parsFragmentString = /* glsl */`#include <bumpmap_pars_fragment>`
            shader.fragmentShader = shader.fragmentShader.replace(parsFragmentString, parsFragmentString + fragmentPars)
            const mainFragmentString = /* glsl */`#include <normal_fragment_maps>`
            shader.fragmentShader = shader.fragmentShader.replace(mainFragmentString, mainFragmentString + fragmentMain)
        }
    });

    sphere = new THREE.Mesh(geometry, material);
    scene.add(sphere);
}

window.addEventListener('resize', function() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});

setup();
animate();
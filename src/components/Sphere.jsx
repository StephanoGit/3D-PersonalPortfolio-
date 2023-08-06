import React, { Suspense} from 'react';
import { Canvas, useFrame} from '@react-three/fiber';
import { OrbitControls, Preload } from '@react-three/drei';
import CanvasLoader from './Loader';

import {MeshStandardMaterial} from 'three';

import vertexShader from '../../public/shaders/vertex_shader.glsl';
import fragmentShader from '../../public/shaders/fragment_shader.glsl';
import vertexPars from '../../public/shaders/vertex_pars.glsl';
import vertexMain from '../../public/shaders/vertex_main.glsl';
import fragmentPars from '../../public/shaders/fragment_pars.glsl';
import fragmentMain from '../../public/shaders/fragment_main.glsl';

const material = new MeshStandardMaterial({
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

const Sphere = () => {
    useFrame(({ clock }) => {
        const a = clock.getElapsedTime()
        material.userData.shader.uniforms.uTime.value = a/8
    })

    return (
        <mesh material={material}>
            <ambientLight intensity={0.8} color='#ec5b2d' />
            <directionalLight intensity={0.6} color='#ec5b2d' position={[4, 4, 4]} />
            <icosahedronGeometry args={[1, 50]}/>
        </mesh>
    )
}

const SphereCanvas = () => {
    return (
        <Canvas
            shadows
            camera={{position: [0, 0, 3], fov: 75}}
            gl={{ preserveDrawingBuffer: true}}
            style={{ backgroundColor: '#1e1e1e'}}
        >
            <Suspense fallback={<CanvasLoader/>}>
                <OrbitControls
                    enableZoom={false}
                    maxPolarAngle={Math.PI /2}
                    minPolarAngle={Math.PI /2}
                />
                <Sphere/>
            </Suspense>
            <Preload all/>
        </Canvas>
    )
}

export default SphereCanvas
export default /* glsl */`
normal = perturbNormalArb( - vViewPosition, normal, vec2(dFdx(vDisplacement), dFdy(vDisplacement)), faceDirection ); 
`;
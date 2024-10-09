/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Author: Andy Cuccaro (https://sketchfab.com/andycuccaro)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/tux-157de95fa4014050a969a8361a83d366
Title: Tux
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'

const Head = (props) => {
  const group = useRef()
  const { nodes, materials } = useGLTF('/models/tux.glb')

  // Add rotation to the model
  useFrame(() => {
    if (group.current) {
      group.current.rotation.y += 0.005 // Adjust the speed of the rotation

    }
  })

  return (
    <group ref={group} {...props} dispose={null}>
      <group position={[0.002, -0.027, -0.719]} rotation={[-Math.PI / 2, 0, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Tux-printable_0'].geometry}
          material={materials.black}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Tux-printable_1'].geometry}
          material={materials.white}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Tux-printable_2'].geometry}
          material={materials.orange}
        />
      </group>
    </group>
  )
}

useGLTF.preload('/models/tux.glb')
export default Head

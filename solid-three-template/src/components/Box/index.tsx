import { createSignal, useFrame, useThree, type Component } from 'solid-three'
import { Mesh } from 'three'

const Box: Component = () => {
    let mesh: Mesh | undefined
    const [hovered, setHovered] = createSignal(false)

    useFrame(() => (mesh!.rotation.y += 0.01))
    useThree((state) => {
        console.log(state.camera)
    })

    return (
        <mesh
            ref={mesh as any}
            onPointerEnter={(e) => setHovered(true)}
            onPointerLeave={(e) => setHovered(false)}>
            <boxBufferGeometry />
            <meshStandardMaterial color={hovered() ? 'blue' : 'green'} />
        </mesh>
    )
}

export default Box

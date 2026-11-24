// url=https://www.figma.com/file/pxtjUok7Q004cBfBtOmCSD/Offtrail?node-id=345-21318
// source=src/components/layout/Nav.tsx
// component=Nav
import figma from 'figma'

const instance = figma.selectedInstance

const variant = instance.getEnum('Style', {
  Opaque: 'opaque',
  Translucent: 'translucent',
})

const textOf = (name: string) => {
  const node = instance.findText(name)
  return node && node.type === 'TEXT' ? node.textContent : undefined
}

const explore = textOf('Explore')
const hosts = textOf('Hosts')
const map = textOf('Map')

export default {
  example: figma.code`
    <Nav
      variant="${variant}"
      ${
        explore || hosts || map
          ? figma.code`links={[
        ${explore ? figma.code`{ label: "${explore}", href: "/explore" },` : ''}
        ${hosts ? figma.code`{ label: "${hosts}", href: "/hosts" },` : ''}
        ${map ? figma.code`{ label: "${map}", href: "/map" },` : ''}
      ]}`
          : ''
      }
    />
  `,
  imports: ['import { Nav } from "@/components/layout/Nav"'],
  id: 'nav',
  metadata: { nestable: true },
}

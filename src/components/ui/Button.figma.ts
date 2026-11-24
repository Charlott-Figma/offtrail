// url=https://www.figma.com/file/pxtjUok7Q004cBfBtOmCSD/Offtrail?node-id=2031-594
// source=src/components/ui/Button.tsx
// component=Button
import figma from 'figma'

const instance = figma.selectedInstance

const label = instance.getString('Label')
const variant = instance.getEnum('Colour', {
  Brand: 'primary',
  'Transparent White': 'secondary',
  'Transparent Black': 'ghost',
})
const size = instance.getEnum('Size', {
  Large: 'lg',
  Medium: 'md',
})

export default {
  example: figma.code`
    <Button variant="${variant}" size="${size}">
      ${label}
    </Button>
  `,
  imports: ['import { Button } from "@/components/ui/Button"'],
  id: 'button',
  metadata: { nestable: true },
}

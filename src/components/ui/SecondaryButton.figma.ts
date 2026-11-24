// url=https://www.figma.com/file/pxtjUok7Q004cBfBtOmCSD/Offtrail?node-id=626-6830
// source=src/components/ui/SecondaryButton.tsx
// component=SecondaryButton
import figma from 'figma'

const instance = figma.selectedInstance

const label = instance.getString('Label')

export default {
  example: figma.code`<SecondaryButton>${label}</SecondaryButton>`,
  imports: ['import { SecondaryButton } from "@/components/ui/SecondaryButton"'],
  id: 'secondary-button',
  metadata: { nestable: true },
}

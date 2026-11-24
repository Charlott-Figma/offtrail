// url=https://www.figma.com/file/pxtjUok7Q004cBfBtOmCSD/Offtrail?node-id=56-6811
// source=src/components/ui/PrimaryButton.tsx
// component=PrimaryButton
import figma from 'figma'

const instance = figma.selectedInstance

const label = instance.getString('Label')

export default {
  example: figma.code`<PrimaryButton>${label}</PrimaryButton>`,
  imports: ['import { PrimaryButton } from "@/components/ui/PrimaryButton"'],
  id: 'primary-button',
  metadata: { nestable: true },
}

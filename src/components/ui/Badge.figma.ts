// url=https://www.figma.com/file/pxtjUok7Q004cBfBtOmCSD/Offtrail?node-id=344-19284
// source=src/components/ui/Badge.tsx
// component=Badge
import figma from 'figma'

const instance = figma.selectedInstance

const label = instance.getString('Label')
const showIndicator = instance.getBoolean('Show indicator')

export default {
  example: figma.code`<Badge showIndicator={${showIndicator ? 'true' : 'false'}}>${label}</Badge>`,
  imports: ['import { Badge } from "@/components/ui/Badge"'],
  id: 'badge',
  metadata: {
    nestable: true,
    props: {
      label,
      showIndicator,
    },
  },
}

// url=https://www.figma.com/file/pxtjUok7Q004cBfBtOmCSD/Offtrail?node-id=345-20186
// source=src/components/ui/Card.tsx
// component=Card
import figma from 'figma'

const instance = figma.selectedInstance

const name = instance.getString('Name')
const title = instance.getString('Title')
const location = instance.getString('Location')
const eventIndicator = instance.getString('Event indicator')

export default {
  example: figma.code`
    <Card
      name="${name}"
      title="${title}"
      location="${location}"
      eventIndicator="${eventIndicator}"
    />
  `,
  imports: ['import { Card } from "@/components/ui/Card"'],
  id: 'card',
  metadata: {
    nestable: true,
    props: {
      name,
      title,
      location,
      eventIndicator,
    },
  },
}

// url=https://www.figma.com/file/pxtjUok7Q004cBfBtOmCSD/Offtrail?node-id=344-19307
// source=src/components/ui/TableRow.tsx
// component=TableRow
import figma from 'figma'

const instance = figma.selectedInstance

const eventName = instance.getString('Event name')
const date = instance.getString('Date')
const name = instance.getString('Name')

const badge = instance.findInstance('Badge')
let location
if (badge && badge.type === 'INSTANCE') {
  const label = badge.executeTemplate().metadata?.props?.label
  if (typeof label === 'string') location = label
}

export default {
  example: figma.code`
    <TableRow
      eventName="${eventName}"
      date="${date}"
      name="${name}"
      ${location ? figma.code`location="${location}"` : ''}
    />
  `,
  imports: ['import { TableRow } from "@/components/ui/TableRow"'],
  id: 'table-row',
  metadata: {
    nestable: true,
    props: {
      eventName,
      date,
      name,
      location,
    },
  },
}

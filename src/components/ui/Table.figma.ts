// url=https://www.figma.com/file/pxtjUok7Q004cBfBtOmCSD/Offtrail?node-id=344-19456
// source=src/components/ui/Table.tsx
// component=Table
import figma from 'figma'

const instance = figma.selectedInstance

const headerLabels = instance.findLayers((node) => node.name === 'Label')
const headerText = (index: number) => {
  const node = headerLabels[index]
  return node && node.type === 'TEXT' ? node.textContent : ''
}

const eventLabel = headerText(0)
const dateLabel = headerText(1)
const hostLabel = headerText(2)
const locationLabel = headerText(3)

const rowNodes = instance.findLayers(
  (node) => node.name === 'Table row' && node.type === 'INSTANCE',
)

const rowSnippet = (index: number) => {
  const node = rowNodes[index]
  if (!node || node.type !== 'INSTANCE') return undefined
  const props = node.executeTemplate().metadata?.props
  const eventName = typeof props?.eventName === 'string' ? props.eventName : ''
  const date = typeof props?.date === 'string' ? props.date : ''
  const name = typeof props?.name === 'string' ? props.name : ''
  const location = typeof props?.location === 'string' ? props.location : ''
  return figma.code`{ eventName: "${eventName}", date: "${date}", name: "${name}"${location ? figma.code`, location: "${location}"` : ''} }`
}

const row0 = rowSnippet(0)
const row1 = rowSnippet(1)
const row2 = rowSnippet(2)
const row3 = rowSnippet(3)
const row4 = rowSnippet(4)

const cta = instance.findInstance('Primary Button')
let ctaCode
if (cta && cta.type === 'INSTANCE') {
  ctaCode = cta.executeTemplate().example
}

export default {
  example: figma.code`
    <Table
      labels={{
        event: "${eventLabel}",
        date: "${dateLabel}",
        host: "${hostLabel}",
        location: "${locationLabel}",
      }}
      rows={[
        ${row0 ?? ''}
        ${row1 ? figma.code`, ${row1}` : ''}
        ${row2 ? figma.code`, ${row2}` : ''}
        ${row3 ? figma.code`, ${row3}` : ''}
        ${row4 ? figma.code`, ${row4}` : ''}
      ]}
      ${ctaCode ? figma.code`cta={${ctaCode}}` : ''}
    />
  `,
  imports: ['import { Table } from "@/components/ui/Table"'],
  id: 'table',
  metadata: { nestable: false },
}

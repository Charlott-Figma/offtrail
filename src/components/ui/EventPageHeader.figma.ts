// url=https://www.figma.com/file/pxtjUok7Q004cBfBtOmCSD/Offtrail?node-id=345-20620
// source=src/components/ui/EventPageHeader.tsx
// component=EventPageHeader
import figma from 'figma'

const instance = figma.selectedInstance

const headline = instance.getString('Headline')

const actionNodes = instance.findLayers(
  (node) => node.name === 'Secondary Button' && node.type === 'INSTANCE',
)
const action0 =
  actionNodes[0] && actionNodes[0].type === 'INSTANCE'
    ? actionNodes[0].executeTemplate().example
    : undefined
const action1 =
  actionNodes[1] && actionNodes[1].type === 'INSTANCE'
    ? actionNodes[1].executeTemplate().example
    : undefined

export default {
  example: figma.code`
    <EventPageHeader
      imageSrc=""
      imageAlt="${headline}"
      headline="${headline}"
      actions={
        <>
          ${action0}
          ${action1}
        </>
      }
    />
  `,
  imports: ['import { EventPageHeader } from "@/components/ui/EventPageHeader"'],
  id: 'event-page-header',
  metadata: { nestable: false },
}

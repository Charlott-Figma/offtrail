// url=https://www.figma.com/file/pxtjUok7Q004cBfBtOmCSD/Offtrail?node-id=345-20209
// source=src/components/ui/CommunitySpotlight.tsx
// component=CommunitySpotlight
import figma from 'figma'

const instance = figma.selectedInstance

const card = instance.findInstance('Card')
let name = ''
let title = ''
let location = ''
let eventIndicator = ''
if (card && card.type === 'INSTANCE') {
  const props = card.executeTemplate().metadata?.props
  if (typeof props?.name === 'string') name = props.name
  if (typeof props?.title === 'string') title = props.title
  if (typeof props?.location === 'string') location = props.location
  if (typeof props?.eventIndicator === 'string') eventIndicator = props.eventIndicator
}

export default {
  example: figma.code`
    <CommunitySpotlight
      imageSrc=""
      imageAlt="${name}"
      name="${name}"
      title="${title}"
      location="${location}"
      eventIndicator="${eventIndicator}"
    />
  `,
  imports: ['import { CommunitySpotlight } from "@/components/ui/CommunitySpotlight"'],
  id: 'community-spotlight',
  metadata: { nestable: false },
}

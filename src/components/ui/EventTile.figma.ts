// url=https://www.figma.com/file/pxtjUok7Q004cBfBtOmCSD/Offtrail?node-id=345-20886
// source=src/components/ui/EventTile.tsx
// component=EventTile
import figma from 'figma'

const instance = figma.selectedInstance

const eventName = instance.getString('Event name')
const location = instance.getString('Location')
const time = instance.getString('Time')
const openSpots = instance.getString('Open spots')
const month = instance.getString('Month')
const day = instance.getString('Day')

export default {
  example: figma.code`
    <EventTile
      event={{
        slug: "",
        name: "${eventName}",
        city: "${location}",
        timeRange: "${time}",
        spotsShort: "${openSpots}",
        dayLabel: "${month}",
        dayNumber: "${day}",
        heroImageSrc: "",
        imageAlt: "${eventName}",
      }}
    />
  `,
  imports: ['import { EventTile } from "@/components/ui/EventTile"'],
  id: 'event-tile',
  metadata: { nestable: false },
}

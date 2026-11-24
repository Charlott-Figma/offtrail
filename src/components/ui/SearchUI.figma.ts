// url=https://www.figma.com/file/pxtjUok7Q004cBfBtOmCSD/Offtrail?node-id=344-19253
// source=src/components/ui/SearchUI.tsx
// component=SearchUI
import figma from 'figma'

const instance = figma.selectedInstance

const labels = instance.findLayers((node) => node.name === 'Label')
const placeholders = instance.findLayers((node) => node.name === 'Placeholder text')

const labelAt = (index: number) => {
  const node = labels[index]
  return node && node.type === 'TEXT' ? node.textContent : ''
}
const placeholderAt = (index: number) => {
  const node = placeholders[index]
  return node && node.type === 'TEXT' ? node.textContent : ''
}

const whereLabel = labelAt(0)
const wherePlaceholder = placeholderAt(0)
const whatLabel = labelAt(1)
const whatPlaceholder = placeholderAt(1)
const whenLabel = labelAt(2)
const whenPlaceholder = placeholderAt(2)

export default {
  example: figma.code`
    <SearchUI
      fields={[
        { label: "${whereLabel}", placeholder: "${wherePlaceholder}" },
        { label: "${whatLabel}", placeholder: "${whatPlaceholder}" },
        { label: "${whenLabel}", placeholder: "${whenPlaceholder}" },
      ]}
    />
  `,
  imports: ['import { SearchUI } from "@/components/ui/SearchUI"'],
  id: 'search-ui',
  metadata: { nestable: true },
}

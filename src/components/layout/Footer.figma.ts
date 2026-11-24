// url=https://www.figma.com/file/pxtjUok7Q004cBfBtOmCSD/Offtrail?node-id=614-1194
// source=src/components/layout/Footer.tsx
// component=Footer
import figma from 'figma'

const instance = figma.selectedInstance

const taglineNode = instance.findText('Tagline')
const tagline = taglineNode && taglineNode.type === 'TEXT' ? taglineNode.textContent : ''

const footerTexts = instance.findLayers((node) => node.name === 'Footer text')
const footerText = (index: number) => {
  const node = footerTexts[index]
  return node && node.type === 'TEXT' ? node.textContent : ''
}
const copyright = footerText(0)
const rightText = footerText(1)

const linkNodes = instance.findLayers((node) => node.name === 'Link')
const linkText = (index: number) => {
  const node = linkNodes[index]
  return node && node.type === 'TEXT' ? node.textContent : undefined
}

const hrefFor = (label: string) => {
  if (label === 'Explore') return '/explore'
  if (label === 'Hosts') return '/hosts'
  if (label === 'Resources') return '/resources'
  if (label === 'Map') return '/map'
  return '/'
}

const link0 = linkText(0)
const link1 = linkText(1)
const link2 = linkText(2)
const link3 = linkText(3)

const linkSnippet = (label: string | undefined) =>
  label ? figma.code`{ label: "${label}", href: "${hrefFor(label)}" },` : ''

export default {
  example: figma.code`
    <Footer
      copyright="${copyright}"
      rightText="${rightText}"
      tagline="${tagline}"
      links={[
        ${linkSnippet(link0)}
        ${linkSnippet(link1)}
        ${linkSnippet(link2)}
        ${linkSnippet(link3)}
      ]}
    />
  `,
  imports: ['import { Footer } from "@/components/layout/Footer"'],
  id: 'footer',
  metadata: { nestable: false },
}

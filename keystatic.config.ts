// When: 2026-03-26 | By: claude-sonnet-4-6 | What: Keystatic CMS config for products and pages collections
import { config, collection, fields } from '@keystatic/core'

export default config({
  storage: {
    kind: 'github',
    repo: 'opr77w/finch-publishing',
  },
  ui: {
    brand: { name: 'Finch Publishing' },
  },
  collections: {
    products: collection({
      label: 'Guides',
      slugField: 'name',
      path: 'src/content/products/*',
      format: { data: 'json' },
      schema: {
        name: fields.slug({ name: { label: 'Name' } }),
        tagline: fields.text({ label: 'Tagline' }),
        description: fields.text({ label: 'Description', multiline: true }),
        longDescription: fields.text({ label: 'Long description', multiline: true }),
        price: fields.number({ label: 'Price' }),
        available: fields.checkbox({ label: 'Available to buy' }),
        image: fields.text({ label: 'Image path' }),
        dimensions: fields.text({ label: 'Dimensions' }),
        buyUrl: fields.text({ label: 'Buy URL' }),
        writer: fields.text({ label: 'Writer name' }),
        writerBio: fields.text({ label: 'Writer bio', multiline: true }),
        illustrator: fields.text({ label: 'Illustrator name' }),
        illustratorBio: fields.text({ label: 'Illustrator bio', multiline: true }),
        specs: fields.array(
          fields.text({ label: 'Spec' }),
          { label: 'Specs', itemLabel: props => props.value }
        ),
      },
    }),
    pages: collection({
      label: 'Pages',
      slugField: 'title',
      path: 'src/content/pages/*',
      format: { data: 'json' },
      schema: {
        title: fields.slug({ name: { label: 'Page' } }),
        heroHeadline: fields.text({ label: 'Hero headline', multiline: true }),
        heroSubtitle: fields.text({ label: 'Hero subtitle', multiline: true }),
        heroPrimaryCta: fields.text({ label: 'Hero primary CTA label' }),
        heroSecondaryCta: fields.text({ label: 'Hero secondary CTA label' }),
      },
    }),
  },
})

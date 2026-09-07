import { defineConfig } from 'unocss'

const brand = {
  blue: 'var(--brand-blue)',
  red: 'var(--brand-red)',
  yellow: 'var(--brand-yellow)',
}

export default defineConfig({
  theme: {
    colors: {
      brand,
    },
  },
  rules: [
    [
      'bg-brand-stripes',
      {
        'background-image': `linear-gradient(to right, ${brand.blue} 0 33.34%, ${brand.red} 33.34% 66.67%, ${brand.yellow} 66.67% 100%)`,
      },
    ],
    [
      'bg-brand-stripes-v',
      {
        'background-image': `linear-gradient(to bottom, ${brand.blue} 0 33.34%, ${brand.red} 33.34% 66.67%, ${brand.yellow} 66.67% 100%)`,
      },
    ],
    [
      'border-l-brand-stripes',
      {
        'border-left': '0.5rem solid',
        'border-radius': '0.5rem',
        'border-image': `linear-gradient(to bottom, ${brand.blue} 0 33.3333%, ${brand.red} 33.3333% 66.6667%, ${brand.yellow} 66.6667% 100%) 1`,
      },
    ],
  ],
})

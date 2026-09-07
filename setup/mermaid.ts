import type { MermaidSetup } from '@slidev/types'
import { defineMermaidSetup } from '@slidev/types'

export default defineMermaidSetup((): ReturnType<MermaidSetup> => {
  return {
    theme: 'base',
    themeVariables: {
      fontFamily: 'Sora, ui-sans-serif, system-ui, sans-serif',
      fontSize: '16px',

      background: '#f6fbfc',
      mainBkg: '#f6fbfc',
      textColor: '#0b1120',
      titleColor: '#0b1120',

      primaryColor: '#dff8fb',
      primaryBorderColor: '#04a9b8',
      primaryTextColor: '#0b1120',

      secondaryColor: '#fef0d2',
      secondaryBorderColor: '#d99612',
      secondaryTextColor: '#0b1120',

      tertiaryColor: '#ffe1e5',
      tertiaryBorderColor: '#dd2c3d',
      tertiaryTextColor: '#0b1120',

      lineColor: '#04a9b8',
      nodeBorder: '#04a9b8',
      clusterBkg: '#eef8f9',
      clusterBorder: '#04a9b8',
      defaultLinkColor: '#04a9b8',
      edgeLabelBackground: '#f6fbfc',

      actorBkg: '#dff8fb',
      actorBorder: '#04a9b8',
      actorTextColor: '#0b1120',
      actorLineColor: '#04a9b8',
      signalColor: '#04a9b8',
      signalTextColor: '#0b1120',
      labelBoxBkgColor: '#fef0d2',
      labelBoxBorderColor: '#d99612',
      labelTextColor: '#0b1120',
      loopTextColor: '#0b1120',
      noteBkgColor: '#fef0d2',
      noteBorderColor: '#d99612',
      noteTextColor: '#0b1120',

      pie1: '#04a9b8',
      pie2: '#fe4352',
      pie3: '#febe29',
      pieOuterStrokeColor: '#0b1120',
      pieTitleTextColor: '#0b1120',
      pieSectionTextColor: '#0b1120',
    },
    themeCSS: `
      .node rect, .node polygon, .node path, .node circle {
        rx: 10px;
        ry: 10px;
        filter: drop-shadow(0 6px 14px rgba(4, 169, 184, 0.16));
      }
      .cluster rect, rect.cluster {
        rx: 16px;
        ry: 16px;
        fill: var(--diagram-cluster-bg, #eef8f9) !important;
      }
      .cluster-label span, .cluster text {
        color: var(--diagram-cluster-text, #0b1120) !important;
        fill: var(--diagram-cluster-text, #0b1120) !important;
      }
      .edgePath .path {
        stroke-width: 2px;
      }
      .edgeLabel {
        border-radius: 4px;
      }
    `,
    flowchart: {
      curve: 'basis',
      padding: 18,
      // htmlLabels sizes nodes from an estimated text width that runs a
      // few px narrower than the actual rendered Sora glyphs, clipping
      // the last character or two. SVG text labels size nodes from the
      // real rendered bbox instead, so they can't drift out of sync.
      htmlLabels: false,
    },
  }
})

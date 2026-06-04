---
title: 'Modular Design System'
subtitle: 'A scalable component library powering four product teams'
thumbnail: '../../assets/projects/two/photo-1618005182384-a83a8bd57fbe.jpg'
liveUrl: 'https://storybook.example.com'
techstack: ['React', 'TypeScript', 'Storybook', 'Figma', 'CSS Modules']
period:
  start: '2020-01'
  end: '2020-09'
roles: ['Technical Lead', 'Design Systems Engineer']
overview: 'Led the creation of a shared component library to eliminate UI inconsistency across four product teams shipping in parallel. The system now powers over 120 components used in production.'
outcomes:
  - title: '40% faster feature delivery'
    description: 'Teams reduced UI implementation time by reusing tested, accessible components instead of building from scratch.'
  - title: 'Zero accessibility regressions'
    description: 'Automated WCAG checks in CI caught 100% of accessibility issues before merge, down from 8–12 manual QA hours per sprint.'
  - title: 'Single source of truth'
    description: 'Designers and engineers collaborated from one Figma library connected via Code Connect, ending design drift across teams.'
---

## Challenge

Four product squads were shipping features independently with no shared component library. This created compounding problems: UI inconsistency visible to users, duplicated engineering effort, and accessibility regressions that weren't caught until late in QA. Any UI change required updates in four separate codebases.

## Actions

I led a cross-functional initiative to design and build a shared component library from the ground up. I started with an audit of the existing four codebases, cataloguing every UI pattern and identifying the 20 components that covered 80% of the UI surface area. From there I established a token-based design language in Figma, then built the React component library in TypeScript with Storybook as the documentation surface.

I introduced automated accessibility testing via `axe-core` integrated into the CI pipeline, and set up semantic versioning with a changelog so teams could adopt updates at their own pace. I ran weekly design system office hours to gather feedback and support adoption.

## Results

Within six months, all four teams had migrated their primary UI flows to the design system. New feature UI was going from design to production in 40% less time. Accessibility regressions dropped to zero in CI-gated merges. The system became the foundation for a new product line launched to 200,000 users six months later.

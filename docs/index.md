---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "fibbo"
  text: "Creating games should be easy"
  image:
    src: /logo.png
    alt: Fibbo Logo
  actions:
    - theme: brand
      text: Quick start
      link: /getting-started/installation
    - theme: alt
      text: Fundamentals
      link: /guide/fundamentals

features:
  - title: No configuration needed ⚙️
    details: Everything is set up for you out of the box.
  - title: Typescript support 🦺
    details: Full typescript support.
  - title: 2D and 3D support 🎮
    details: Create 2D and 3D games with the same API.
---

## Made with Fibbo

- [Fibbo's 2D Playground](https://fibbo.dev/playground-2d/) - A 2D playground to test Fibbo's 2D features.
- [Fibbo's 3D Playground](https://fibbo.dev/playground-3d/) - A 3D playground to test Fibbo's 3D features.
- [Rocket Starflop](https://gugustinette.github.io/rocket-starflop/) - An arcade shoot'em up game.

## Our Team

<script setup>
import { VPTeamMembers } from 'vitepress/theme'

const members = [
  {
    avatar: 'https://www.github.com/gugustinette.png',
    name: 'Gugustinette',
    title: 'Creator',
    links: [
      { icon: 'github', link: 'https://github.com/gugustinette' },
      { icon: 'bluesky', link: 'https://bsky.app/profile/gugustinette.com' },
    ]
  },
]
</script>

<VPTeamMembers size="small" :members="members" />

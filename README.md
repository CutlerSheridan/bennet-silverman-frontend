# Bennet Silverman Portfolio (Frontend)

## Directing portfolio redesign

Backend repo [here](https://github.com/CutlerSheridan/bennet-silverman-backend).

#### TODO NEXT

- play with 'view reel' style

#### TODO LATER

##### Features

##### Behavior

- stop hamburger links from loading twice
- get rid of chevron svg + css if unused

##### Style

- change header from fixed position to absolute
- decrease max-width of open hamburger menu
- ? inverse colors of hamburger icon
- remove header link highlight
- ? add current page indication
- style home page Contact footer
- remove border-top from index.css

##### Notes

- Project taken over after 1.0 from Ryan Johnson
- Not familiar with Gatsby or Sass so everything bootstrapped from there
- all .css files originate from me

#### CHANGELOG

_1.2.1_

- get landing video autoplaying on mobile
  - just had to switch 'playsInLine' to 'playsInline'
- prevent horizontal overscroll on iOS Safari
  - had to add: ":root, body { overflow-x: hidden; position: relative }"

_1.2.0_

- start making landing page mobile-friendly
- add webm version of test-vid

_1.1.6_

- cover logo on homepage
- change size, spacing of landing h1
- change size of intro text
- adjust placement of landing info
- adjust landing video size, placement

_1.1.5_

- add onVideo style to Button in index.js
- add reel button over splash video
- make chevron bounce
- revert chevron color

_1.1.4_

- restructure landing page CSS to make info placement code cleaner
- add Contact button to landing page
- fix landing page height
- change chevron color

_1.1.3_

- add icon pack via Gatsby Script element in index.tsx
- add downward chevron to landing page
- justify intro text
- hide landing video overflow-x via :root in index.css

_1.1.2_

- adjust intro text sizing
- adjust intro text placement

_1.1.1_

- style intro text a bit
- add temp video to landing page
- make landing vid circular
- adjust landing vid size
- adjust landing vid placement

_1.1.0_

- create Landing component
- create Landing style
- add contact button to bottom of home page

_1.0.1_

- Initial commit
- add .gitignore

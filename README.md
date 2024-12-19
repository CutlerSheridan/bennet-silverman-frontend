# Bennet Silverman Portfolio (Frontend)

## Directing portfolio redesign

Backend repo [here](https://github.com/CutlerSheridan/bennet-silverman-backend).

#### TODO NEXT

- make website responsive between mobile and 1250px

#### TODO LATER

##### Features

##### Behavior

- stop hamburger links from loading twice
- get rid of chevron svg + css if unused

##### Style

- play with color palette
- remove header link highlight
- ? add current page indication
- remove border-top from index.css

##### Notes

- Project taken over after 1.0 from Ryan Johnson
- Not familiar with Gatsby or Sass so everything bootstrapped from there
- all .css files originate from me

##### TYLER NOTES

- darker background
- more circles on landing
- try making intro bio circular
- put logo in circle, maybe 1/4th circle in corner

##### BENNET NOTES

- play with video on other side

#### CHANGELOG

_1.3.2_

- add HomeContactSection
- make landing heading bigger
- make hamburger lines bigger

_1.3.1_

- reroute Bio to landing page
- reorder hamburger menu options
- improve landing video drop shadow

_1.3.0.1_ (branch: main)

- merge vimeo-splash branch

_1.3.0_ (branch: vimeo-splash)

- replace landing video with Vimeo player
- get vimeo vid correct size
- center vimeo vid in wrapper
- shape vimeo vid into circle
- add dark filter over reel
- hide 'unmute' button on vid
- cover logo on landing page
- adjust infoWrapper placement

_1.2.7_ (branch: main)

- add paint stroke behind landing heading
- match paint color to yellow

_1.2.6_

- adjust font weight, size
- refactor chevron placement code
- change intro font

_1.2.5_

- change size of header logo ::before
- add circle behind hamburger
- change hamburger icon size
- move intro text down
- decrease max-width of open hamburger menu

_1.2.4_

- add CSS to make intro text a circle
- revert intro text to paragraph
- add SerialB fonts
- style intro text with SerialB typeface
- add padding-bottom to Landing so mobile has space under 'contact' button
- make header static
- change header logo to initials
- add circle behind header logo
- make header logo clickable

_1.2.3_

- change "view reel" button background to be translucent black using ::before pseudoelement
- round corners on reel button

_1.2.2_

- hide chevron on mobile

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

# Bennet Silverman Portfolio (Frontend)

## Directing portfolio redesign

Backend repo [here](https://github.com/CutlerSheridan/bennet-silverman-backend).

#### TODO NEXT

#### TODO LATER

##### Features

##### Behavior

- stop hamburger links from loading twice
- make sure <Link> is only used for _internal_ links (e.g. not instagram)

##### Style

##### Notes

- Project taken over after 1.0 from Ryan Johnson
- Not familiar with Gatsby or Sass so everything bootstrapped from there
- all .css files originate from me

##### NOTES FOR BENNET

- for landing video, he should have a video on vimeo called "current reel," then also have one called "2024 directing reel" or whatever that's the same video, but current reel should always be updated and it'll auto-update on the site
- recommend keeping selected video count to multiples of 3

#### CHANGELOG

_2.0.6_

- clean up comments

_2.0.5_

- darken background so overscroll matches shaded page edge
- remove WorksGrid link styling in SquiggleLink.tsx so each button's ::after background is only controlled by index.css
- improve filter button selector
  - these last two notes should make selected tab show up once deployed—for some reason, after deploying, the filter buttons did not have the words "FilterButtons" in their classes

_2.0.4_

- relocate font files

_2.0.3_

- adjust instructions for Bennet

_2.0.2_

- fix "view reel" url

_2.0.1_

- clean up comments
- delete unused files

_2.0.0_

- swap in final splash video

_1.5.4_ (branch: main)

- fix Alpen logo getting cut off vertically, what the fuck
  - had to add `object-fit: contain`
- match contact company logo sizes
- flip landing page layout

_1.5.3_ (branch: landing-resize)

- adjust hero video size
- adjust hero video placement
- make all landing text more responsive
- adjust landing text placement
- get rid of a tooooon of media breakpoints
- change all 800px landing breakpoints to 850
- adjust chevron breakpoints
- get rid of chevron svg + css

_1.5.2.1_ (branch: main)

- merge landing-resize
- delete landing-resize

_1.5.2_ (branch: landing-resize)

- update bio copy
- remove squiggle animation
- make squiggle visible before first click (on WorksGrid, set firstClick's initial state to false)

_1.5.1_

- mock up options for paint stroke on landing page bottom contact section
- change header logo to "B" instead of "BS"
- make header logo a little bigger

_1.5.0_

- add letter-spacing on contact page
- make agency logos smaller
- add brush stroke to Contact page's heading
- change fonts, spacing, sizes of text on Contact page
- make sure contact selectors are specific enough they don't change work grids video thumbnail size
- improve header logo
- adjust landing page heading
- make mobile emphasis on landing page smaller
- remove "reel" tab from video grid
- make contact text at bottom of home page misaligned

_1.4.4_

- adjust responsive font sizes
- add text to Contact section on home page
- adjust contact button in Contact section

_1.4.3_

- change intro font
- make all fonts match
- add letter spacing to buttons
- make green darker in color scheme
- make Works background transparent so inset drop shadow displays
  - add !important so Safari never gets confused

_1.4.2_

- add fonts Staatliches and League Gothic
- make heading Staatliches

_1.4.1_

- add darkened inset drop shadow to background
- adjust iOS Safari top bar color to match darker green via SEO component in the <meta name='theme-color' /> element

_1.4.0_

- add paint stroke to header logo
- change logo to BS
- make website responsive between mobile and 1250px

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

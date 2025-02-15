## [1.4.0] - 2025-02-11

> Floating Button Version with Dynamic Tag {version} on Changelog page

### Added

- New components / changelog floating-version.tsx
- Button popover to open version-toc below @media 1024px
- Dynamic tag by section ID #version
- Dynamic url tag #version
- Dynamic version indikator on floating version when scrolling section by ID

### Improved

- change icon version history
- responsive version-toc
- improvement components to changelog page

## [1.3.8] - 2025-02-08

> Responsive Table of Content

### Added

- Components terminal MagicUI
- Components card Shadcn
- New mob-toc for a better experience on mobile devices
- New Components scroll to top button
- Scroll to top :blog-post
- Scroll to top :docs-post

### Improved

- lib/markdown for generated dynamic toc on markdown
- Responsive Table of Content below @media 1024px
- Improve docs page

## [1.3.6] - 2025-02-01

> Appears more modern editor for Docu Play

![version 1.3.6 - Playground](https://docubook.pro/images/new-editor.png)

### Added

- Line Number for editor
- editor.css

### Improved

- Better Design for Editor
- Similar to Github Editor
- Moved Handler Element (copy, download, reset and fullscreen) on Header

## [1.3.5] - 2025-01-30

> it's Easy to Write Markdown with Playground

![version 1.3.5 - Playground](https://docubook.pro/images/img-playground.png)

### Added

- New Playground Page
- New Playground Layout
- Toolbar for Markdown Components
- Fullscreen Mode to Focus Editing Your Content
- Copy to Clipboard Your Content
- Download Your Content as index.mdx
- Reset Your Content without refresh the Browser
- Only Large Screen for Better Experience

## [1.3.1] - 2025-01-20

> Snippet Feature to Easily Write Markdown and Call DocuBook Components

![version 1.3.1 - Snippet Features](https://docubook.pro/images/snippet.png)

### Added

- New Feature Snippet for Markdown Components
- Support Snippet for Visual Studio Code

### Removed

- remove props icon and props description for accordion components

## [1.3.0] - 2024-12-31

> Release Note Feature to Make it Easier to Write Changelogs

### Added

- New Release Note Feature
- New Layout for Changelog page
- New Changelog page
- Add Release Note Component
- Easily write release notes directly from the CHANGELOG.md file
- TOC for versioning
- Write with the markdown tag
- Add lib / changelog.ts

### Improved

- Improvement Responsive feature image for Version Entry
- Improvement Layout for changelog page
- Improvement Padding on mobile devices
- Only use containers of md size
- Improvement syntax.css for ul>li classes

### Fixed

- Fix og:image not showing on Page.tsx
- Fix text-indent on class li

### Removed

- Remove excessive padding
- Remove Logo on Footer

## [1.2.0] - 2024-12-22

> New Accordion Component : Support content plain text, html and all markdown component

### Added

- add New Accordion

### Improved

- Props Improvement
- Support Dynamic Content for Accordion

## [1.1.0] - 2024-12-15

> Major Update : Easily manage set up with docu.json

### Added

- add docu.json file
- add openGraph (title, description, image)
- add Dynamic metadata
- Generate metadata as openGraph
- openGraph support for .mdx

### Improved

- routes-config from json
- Frontmatter improvement
- Edit the content of footer.tsx simply via the docu.json file
- Edit the content of navbar.tsx simply via the docu.json file

## [1.0.7] - 2024-12-14

> Easily updates your DocuBook Version with CLI npx update_docu

### Added

- CLI npx update_docu (update features into docubook existing directory)
- Playground (easily to written content)
- New Button component
- Navbar external link conditions
- CLI npx create_docu

### Improved

- Searchbar Improvement
- Navigation Improvement
- Edit on Github Improvement

### Removed
- Remove CLI npx create-docu (on this version not usage dash `-`)

## [1.0.6] - 2024-11-24

> New Components, Fix and Improvement

### Added

- New Card component
- New Tooltips component

### Fixed

- change root folder

### Improved

- logo on navbar & footer
- easily change logo

## [1.0.5] - 2024-11-16

> Add New Features and Improvement for this version

### Added

- New Youtube component
- edit this page - easily manage directory content via the github repo
- support installation via cli commant npx create-docu

### Improved

- keyboard shortcut command + k or ctrl + k to open search dialog

## [1.0.0] - 2024-11-10

> Initial release of DocuBook to create interactive nested docs with MDX

### Added

- Initial release of DocuBook
- Basic documentation structure
- Markdown support with MDX
- Responsive design
- Search functionality
- Dark mode support

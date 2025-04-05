# Changelog

## [0.1.0] - 2025-03-29

### Added
- Created basic structure for PaulMac's Merch Store website
- Added navigation menu with Home, Products, Music, About Us, Jobs, and Contact sections
- Implemented music section with video player and playlist
- Added background music player with controls
- Created initial styling for the website

## [0.2.0] - 2025-03-29

### Added
- Added Jobs section to the main content
- Created scripts.js file with navigation and music player functionality
- Added figcaption to the video player

### Changed
- Enhanced the music section to properly fit within the page structure
- Improved responsive design for different screen sizes
- Updated CSS to show active sections based on URL hash
- Modified video player to maintain aspect ratio
- Adjusted playlist container styling for better usability

## [1.0.0] - 2025-04-02

### Added
- Implemented shuffle functionality for music playlist
- Added auto-play feature to automatically play next video when current one ends

### Changed
- Modified layout to keep header, navigation, and footer always visible
- Updated CSS to make only the music section content scrollable
- Improved player controls with visual feedback for shuffle state

## [1.1.0] - 2025-04-02

### Changed
- Replaced all div elements with semantic HTML5 elements to comply with project rules
- Used figure, figcaption, aside, article, section, and fieldset elements
- Ensured consistent application of semantic HTML throughout the website

## [1.2.0] - 2025-04-02

### Added
- Added NWJNS logo to the navigation bar
- Created subtle hover effects for the logo
- Added hyperlink to NJZ logo in navigation, linking to the band's wiki page

### Changed
- Modernized navigation links with equal padding and refined hover effects
- Adjusted navigation layout to accommodate the logo
- Increased navigation text size for better visibility and usability

## [1.3.0] - 2025-04-03

### Changed
- Enhanced header and footer with subtle shadows and borders
- Added visual continuity between page elements
- Improved overall aesthetic while maintaining the existing color scheme

## [1.4.0] - 2025-04-03

### Changed
- Enlarged music container section for better viewing experience
- Increased video player dimensions for more comfortable viewing
- Enlarged playlist container to match video height
- Expanded playlist area to show more items at once

## [1.5.0] - 2025-04-03

### Added
- Implemented products section with premium tea collection
- Created responsive 3×3 grid layout with semantic HTML structure
- Added hover effects and visual enhancements for product cards

### Changed
- Optimized image display with proper aspect ratio handling
- Used proper semantic HTML (ul/li with figure/figcaption) for product grid
- Implemented responsive breakpoints for various screen sizes

## [1.6.0] - 2025-04-03

### Changed
- Replaced NewJeans/NJZ music collection with Tea House Jazz BGM collection
- Updated music section description to match new tea house theme
- Standardized music naming format to "Tea House Jazz BGM - [Title]"
- Added new relaxing jazz background music options for tea room ambiance
- Unified site theme around tea products and complementary music

### Removed
- NewJeans/NJZ music videos that didn't fit the tea house theme

## [1.7.0] - 2025-04-03

### Changed
- Reduced navigation logo size for better proportions
- Fixed HTML structure of logo container by removing incorrect closing tags
- Added height limitation to ensure logo displays properly in all viewports
- Refined logo container padding and margins for improved visual balance

## [1.8.0] - 2025-04-03

### Added
- Added "Home of organic since 2025" tagline to the logo using figcaption
- Implemented elegant cursive typography for the tagline
- Created subtle hover effect for the tagline text

### Changed
- Updated product section introduction with B2B business model information
- Added contact email for product inquiries (makatea.2025@gmail.com)
- Enhanced styling for business model announcement paragraph
- Maintained existing product display while updating business approach

## [1.9.0] - 2025-04-04

### Changed
- Enlarged product cards to display only the first row completely in the products section
- Increased row gap between product grid items from 30px to 50px
- Enhanced product images with larger max-height (280px) for better visibility
- Added additional padding to product cards (25px) for improved visual presentation
- Increased bottom margin below product images for better spacing
- Increased vertical padding in the product grid container for balanced layout

## [2.0.0] - 2025-04-04

### Added
- Implemented interactive product modal system when clicking product cards
- Added navigation arrows to browse between products in the modal
- Created detailed product descriptions for each tea variety
- Implemented keyboard navigation support (arrow keys and Escape)

### Changed
- Enhanced user experience with smooth transitions and animations
- Used semantic HTML for modal structure (article and figure elements)
- Added backdrop blur effect when modal is active
- Increased tagline font size from 0.95em to 1.2em for better visibility
- Improved letter spacing in tagline for enhanced readability

## [2.1.0] - 2025-04-04

### Added
- Added pricing information for each product in the modal display
- Created price element with distinct styling to highlight product costs
- Implemented price mapping in JavaScript for dynamic price display
- Enhanced modal description with visual separation between description, price, and contact

### Changed
- Updated modal UI to better accommodate the additional pricing information
- Improved visual hierarchy in modal with borders and background colors

## [2.2.0] - 2025-04-04

### Added
- Added price display to each product card in the main product grid
- Created consistent pricing style with decorative separating border
- Integrated visual hierarchy that makes prices easily scannable

### Changed
- Enhanced product cards to include both description and pricing information
- Improved product card layout with proper spacing for price display
- Added subtle background highlight to make price information stand out

## [2.3.0] - 2025-04-04

### Changed
- Adjusted product price position to appear directly beneath the product name
- Reduced spacing between product name and price for better visual connection
- Refined price styling to better integrate with product card layout
- Improved visual hierarchy of product information in cards

## [2.4.0] - 2025-04-05

### Changed
- Reduced overall size of product grid to ensure first row is fully visible without scrolling
- Decreased product card padding from 20px to 15px for more compact layout
- Reduced product image maximum height from 240px to 210px
- Decreased spacing between grid items from 30px to 20px vertically
- Made text elements slightly smaller and reduced margins for better space efficiency
- Optimized spacing in the product description paragraph for better overall layout

## [2.5.0] - 2025-04-05

### Changed
- Fine-tuned product grid sizing to show full first row and partial second row
- Reduced vertical margins and padding throughout product section
- Adjusted product section's maximum height for better content visibility
- Increased product image height slightly to 220px while decreasing other spacing
- Optimized business model paragraph for more compact presentation

## [2.6.0] - 2025-04-05

### Added
- Implemented Jobs section with application form and resume upload functionality
- Created form validation for name, email, and phone fields using HTML5 pattern validation
- Added position selection dropdown with options for various job roles
- Implemented conditional field visibility for "Other" position specification
- Added form styling with validation feedback for better user experience

### Changed
- Optimized section layout with compact headers to maximize visible form content
- Enhanced styling of form elements to match site's visual theme
- Customized select dropdown styling for consistent appearance across browsers
- Used semantic HTML elements for form structure including fieldsets and legends
- Improved form layout to ensure all essential fields are visible without scrolling

## [2.7.0] - 2025-04-05

### Added
- Added clickable mailto link to email address in the contact section while maintaining original text appearance
- Added tea leaf decoration icons to the header with proper theming
- Implemented interactive confetti animation effect when clicking on the navigation logo
- Added subtle sway animation to the tea leaf decorations

### Changed
- Enhanced header and footer with texture gradients and refined details
- Improved overall visual hierarchy with subtle shadows and border effects
- Replaced green tea leaf with forest green color that complements the gold/brown theme
- Optimized the nav-logo to support confetti animation with proper positioning
- Fixed conflicting animations on decorative elements
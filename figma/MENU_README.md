# TURUQ Menu Component

This menu component provides a full-screen overlay menu that appears when the hamburger icon is clicked. The design closely matches the provided Figma design with the exact positioning, colors, fonts, and layout.

## Files Created

1. **menu.html** - Complete HTML structure for the menu overlay
2. **menu-styles.css** - Comprehensive CSS styling for the menu component
3. **menu.js** - JavaScript functionality for menu show/hide behavior

## Features

### Design Elements

- **Header Navigation**: Includes WEBZINE, ARCHIVE, ABOUT, SUBSCRIBE links
- **Logo**: TURUQ logo in red (#D64545) using Oswald font
- **Close Button**: Hamburger icon with close overlay
- **Search Icon**: Positioned on the right side
- **Category Sidebar**: Left navigation with categories (FICTION, ARTICLES, PHOTO ESSAY, SERIES, REVIEW, INTERVIEW, PODCAST)
- **Article Cards**: Featured article card and smaller article cards with images, titles, and metadata
- **Typography**: Uses Rachana for article content, Poppins for UI text, Oswald for headings

### Interactions

- **Menu Toggle**: Click hamburger icon to open, close button to close
- **Keyboard Support**: ESC key closes the menu
- **Category Navigation**: Click categories to change active state
- **Hover Effects**: Smooth transitions on navigation links and article cards
- **Responsive Design**: Adapts to different screen sizes

### Colors & Styling

- **Primary Red**: #D64545 (brand color)
- **Article Titles**: #A82A2A (dark red)
- **Text**: #000000 (black)
- **Borders**: 1px solid black (#000)
- **Background**: White (#FFF)
- **Meta Text**: rgba(0, 0, 0, 0.45) for dates

## Integration

The menu has been integrated into all existing HTML pages:

- `index.html`
- `archives.html`
- `article.html`
- `category.html`

### Required Includes

Each page includes:

```html
<!-- In <head> -->
<link rel="stylesheet" href="menu-styles.css" />

<!-- Before closing </body> -->
<script src="menu.js"></script>
```

### HTML Structure

The menu overlay is included at the bottom of each page's body:

```html
<div id="menu-overlay" class="menu-overlay" style="display: none;">
  <!-- Complete menu structure -->
</div>
```

## Technical Details

### CSS Classes

- `.menu-overlay` - Main overlay container
- `.menu-header` - Header section with navigation
- `.menu-content` - Main content area
- `.menu-sidebar` - Left category navigation
- `.menu-articles` - Article cards section
- `.menu-category-active` - Active category state
- `.menu-article-featured` - Large featured article card
- `.menu-article-small` - Smaller article cards

### JavaScript Functions

- `showMenu()` - Display the menu overlay
- `hideMenu()` - Hide the menu overlay with animation
- Category click handlers for active state
- Hover effects for enhanced UX

### Responsive Breakpoints

- **1440px and below**: Adjusted container widths
- **1200px and below**: Stacked layout, collapsed sidebar
- **768px and below**: Mobile-optimized layout
- **480px and below**: Smallest screen optimization

## Browser Support

The menu component uses modern CSS features and should work in all modern browsers that support:

- CSS Grid
- CSS Flexbox
- CSS Transitions
- ES6 JavaScript features

## Usage Notes

1. The menu automatically prevents body scrolling when open
2. Clicking outside the menu content will close it
3. The design maintains exact pixel measurements from the original Figma design
4. All fonts, spacing, and colors match the provided specifications
5. Images are displayed with proper aspect ratios and positioning

## Customization

To modify the menu content:

1. **Categories**: Edit the `.menu-categories` section in the HTML
2. **Articles**: Update the `.menu-articles` section with new content
3. **Styling**: Modify `menu-styles.css` for visual changes
4. **Behavior**: Update `menu.js` for interaction changes

The component is fully self-contained and can be easily maintained or extended.

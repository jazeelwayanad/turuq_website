# Search Overlay System

## Overview

The search overlay system provides a full-screen search interface that matches the design provided in the Figma mockup. It integrates seamlessly with the existing website architecture and menu system.

## Features

- **Full-screen search overlay** with cream background (#FFEDD9)
- **Toggle functionality** - Search icon opens overlay, close button closes it
- **Responsive design** - Works on desktop, tablet, and mobile devices
- **Live search functionality** - Filter results as you type
- **Keyboard navigation** - Enter to search, Escape to close
- **Integration with menu system** - Smooth transitions between menu and search
- **Article previews** - Displays search results in card format

## Files

### Core Files

1. **search-overlay.css** - Styles for the search overlay
2. **search-overlay.js** - JavaScript functionality for search behavior

### Updated Files

All HTML pages have been updated to include:

- Link to `search-overlay.css` in the `<head>`
- Search overlay HTML structure before closing `</body>`
- Script tag for `search-overlay.js`

## Implementation Details

### HTML Structure

The search overlay consists of:

```html
<div id="search-overlay" class="search-overlay">
  <div class="search-container">
    <!-- Header with navigation and close button -->
    <div class="search-header">...</div>

    <!-- Search content area -->
    <div class="search-content">
      <!-- Search title -->
      <h2 class="search-title">SEARCH HERE</h2>

      <!-- Search input with button -->
      <div class="search-input-container">...</div>

      <!-- Search results -->
      <div class="search-results">...</div>
    </div>
  </div>
</div>
```

### CSS Classes

#### Layout Classes

- `.search-overlay` - Main overlay container (fixed positioning)
- `.search-container` - Content wrapper (1440px max-width)
- `.search-header` - Top navigation bar
- `.search-content` - Main content area

#### Component Classes

- `.search-input-container` - Search input wrapper
- `.search-input` - Text input field
- `.search-button` - Search button with icon
- `.search-results` - Results container
- `.search-article-card` - Individual result cards

#### State Classes

- `.show` - Overlay visible state
- `.hide` - Overlay hidden state

### JavaScript Functions

#### Public Functions

- `showSearchOverlay()` - Display the search overlay
- `hideSearchOverlay()` - Hide the search overlay
- `performSearch()` - Execute search functionality
- `filterSearchResults(searchTerm)` - Filter results based on input

#### Event Handlers

- Search icon click → Show overlay
- Close button click → Hide overlay
- Escape key → Hide overlay
- Enter key in input → Perform search
- Hamburger menu in search → Switch to menu overlay

## Usage

### Basic Integration

The search overlay is automatically integrated into all pages. No additional setup is required.

### Triggering Search

Search can be triggered by:

1. Clicking any `.search-icon` element
2. Clicking any `.menu-search-icon` element (from menu overlay)
3. Calling `showSearchOverlay()` programmatically

### Closing Search

Search can be closed by:

1. Clicking the close button (red circle with X)
2. Pressing the Escape key
3. Clicking outside the content area
4. Calling `hideSearchOverlay()` programmatically

## Responsive Behavior

### Desktop (1440px+)

- Full design as per Figma mockup
- Three-column search results
- Complete navigation visible

### Tablet (768px - 1439px)

- Adjusted container width
- Single-column search results
- Responsive navigation

### Mobile (< 768px)

- Simplified navigation (navigation links hidden)
- Smaller fonts and spacing
- Touch-optimized button sizes
- Single-column layout

## Search Functionality

### Current Implementation

- **Live filtering** - Results filter as you type
- **Title and author search** - Searches through article titles and author names
- **Highlight matching terms** - Search terms highlighted in results

### Future Enhancements

The search system is designed to be easily extended with:

- Backend API integration
- Advanced search filters
- Search history
- Search suggestions
- Category-based filtering

## Styling Specifications

### Colors

- Background: `#FFEDD9` (cream)
- Primary accent: `#D64545` (red)
- Text: `#000000` (black)
- Placeholder text: `#C4B098` (muted brown)
- Article titles: `#A82A2A` (dark red)

### Typography

- Headers: Oswald font family
- Body text: Poppins font family
- Article titles: Rachana font family

### Layout

- Container: 1440px max-width
- Border radius: 20px for cards, 129px for search input
- Consistent spacing following design system

## Integration with Menu System

The search overlay integrates seamlessly with the existing menu system:

1. **From main pages**: Click search icon → opens search overlay
2. **From menu overlay**: Click search icon → closes menu, opens search
3. **From search overlay**: Click hamburger → closes search, opens menu

This creates a smooth user experience with logical navigation flow.

## Browser Compatibility

- Modern browsers (Chrome, Firefox, Safari, Edge)
- IE11+ (with polyfills for newer JavaScript features)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance Considerations

- **Lazy loading** - Search overlay HTML is present but hidden
- **CSS transitions** - Smooth animations without JavaScript
- **Event delegation** - Efficient event handling
- **Minimal DOM manipulation** - Optimized for performance

## Maintenance

### Adding New Search Results

To add new articles to search results, update the `.search-results` section in each HTML file with new `.search-article-card` elements.

### Customizing Search Logic

Modify the `filterSearchResults()` function in `search-overlay.js` to implement custom search logic.

### Styling Updates

All visual changes should be made in `search-overlay.css` following the existing class structure.

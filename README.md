# Sandton Fleurs - Project Structure Guide

## File Organization

After refactoring, your project has been organized as follows:

```
sandtonfleurs/
├── index.html                 # Main HTML file
├── products.html              # Products section template (reference)
├── js/
│   └── main.js               # All JavaScript functionality
├── README.md                 # This file
```

## Key Changes

### 1. **Separated JavaScript Functionality** (`js/main.js`)

All JavaScript has been moved to an external file for better:

- Maintainability
- Reusability
- Code organization
- Caching efficiency

### 2. **Products Section Modularized**

The products section is now easier to maintain with:

- Centralized product data
- Dynamic product rendering
- Separate carousel functionality

### 3. **Product Carousel with Dynamic Image Sizing**

The carousel now supports:

- **Multiple variations per product** - Display different angles/styles of the same product
- **Dynamic image sizing** - Images scale to fit the container while maintaining aspect ratio
- **Thumbnail navigation** - Click thumbnails to jump to specific variations
- **Previous/Next buttons** - Navigate between variations
- **Variation counter** - Shows current position (e.g., "2 / 5")

## How to Add Product Variations

### Step 1: Edit Product Data

Open `js/main.js` and find the `products` array (around line 1-100).

### Step 2: Add Variations Array

For each product, add a `variations` array with image URLs:

```javascript
{
  id: 1,
  name: "Classic Red Roses",
  type: "Red Roses",
  buds: 20,
  price: 800,
  image: "https://images.unsplash.com/photo-1...", // Thumbnail

  // ADD THIS: Array of variation images
  variations: [
    "https://images.unsplash.com/photo-1-front-view.jpg",
    "https://images.unsplash.com/photo-2-side-view.jpg",
    "https://images.unsplash.com/photo-3-top-view.jpg",
  ],

  description: "...",
  details: "..."
}
```

### Step 3: Upload Your Images

Once you upload your product variation images, update the URLs in the `variations` array.

## Carousel Features

### Dynamic Image Sizing

The carousel automatically adjusts to different image sizes:

- **Taller images** - Centered vertically with full width available
- **Wider images** - Centered horizontally with full height available
- **Different aspect ratios** - Each image maintains its natural proportions

### Example with Different Sizes

```javascript
variations: [
  "url-to-landscape-image.jpg", // 1600x900
  "url-to-portrait-image.jpg", // 800x1200
  "url-to-square-image.jpg", // 1000x1000
];
```

All images will display beautifully without distortion!

## File Descriptions

### `index.html`

Main page structure with:

- Header/Navigation
- Hero section
- Products container (populated by JS)
- Services section
- Gallery section
- About section
- Testimonials
- Contact section
- Footer
- Product modal with carousel

### `js/main.js`

Contains all functionality:

- **Product Data**: Central location for all product information
- **loadProducts()**: Renders product cards dynamically
- **Carousel Functions**:
  - `openProductModal()` - Opens modal and initializes carousel
  - `displayCarouselImage()` - Shows specific variation
  - `carouselNext()` / `carouselPrev()` - Navigation
  - `generateThumbnails()` - Creates thumbnail strip
- **Modal Controls**: Open/close functionality
- **Mobile Menu**: Responsive navigation toggle
- **WhatsApp Integration**: All order buttons and messaging
- **Smooth Scrolling**: Anchor link animations
- **Header Effects**: Scroll shadow effect

### `products.html`

Reference template showing the HTML structure of the products section and carousel UI.

## How to Customize

### Change Product Information

Edit the `products` array in `js/main.js`:

```javascript
{
  id: 1,
  name: "Your Product Name",
  type: "Product Type",
  buds: 25,  // Your custom metric
  price: 950,
  image: "thumbnail-url",
  variations: ["image1.jpg", "image2.jpg"],
  description: "Your description",
  details: "Additional details"
}
```

### Modify Carousel Styling

The carousel CSS is in the `<style>` tag within the product modal in `index.html`. Customize:

- `.carousel-main` - Main display area
- `.carousel-btn` - Navigation buttons
- `.carousel-thumbnail` - Thumbnail styling
- `.carousel-controls` - Control panel layout

### Change Carousel Colors/Buttons

Edit these CSS classes:

- Background: `.carousel-main { background-color: #f5f5f5; }`
- Button color: `.carousel-btn { background-color: #000; }`
- Thumbnail active state: `.carousel-thumbnail.active { border-color: #000; }`

## Linking to External CSS (Optional)

If you want to move carousel styles to a separate CSS file:

1. Create `css/carousel.css`
2. Copy the carousel styles from the `<style>` tag
3. Link in `index.html`:

```html
<link rel="stylesheet" href="css/carousel.css" />
```

## WhatsApp Integration

All buttons use the WhatsApp Business API. The functions are:

- `orderService(serviceName)` - Service order links
- `sendCustomWhatsApp()` - Custom message from contact form
- Inline WhatsApp handlers on product cards

Update the phone number `27762183239` in `js/main.js` if needed.

## Adding More Products

1. Add a new object to the `products` array in `js/main.js`
2. Give it a unique `id`
3. Add all required fields (name, price, image, variations, description, details)
4. Save and refresh the page - it will appear automatically!

## Testing the Carousel

1. Open index.html in your browser
2. Click "Details" on any product card
3. If the product has multiple variations, you'll see:
   - Previous/Next buttons
   - Thumbnail strip
   - Variation counter (e.g., "2 / 5")
4. Click thumbnails or use buttons to navigate

## Browser Compatibility

Works on all modern browsers:

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile browsers (iOS Safari, Chrome Mobile)

## Tips for Best Results

### Image Optimization

- Keep images under 1MB each for faster loading
- Use JPG for photos, PNG for graphics
- Recommended resolution: 800-1200px width for web
- Different sizes work fine - carousel adjusts automatically

### Product Setup

- Use a high-quality thumbnail image as the main `image`
- Add 2-3 variations minimum for the carousel to be useful
- Keep descriptions concise
- Always fill in all product fields

### Performance

- Lazy load images if you have many products (optional enhancement)
- Compress images to reduce load time
- Cache busting with URL parameters if images change

## Troubleshooting

**Carousel not showing?**

- Check that variations array is not empty
- Verify image URLs are correct
- Check browser console for errors (F12)

**Images appearing stretched?**

- All images should maintain aspect ratio automatically
- If not, check CSS `.carousel-image` class

**Buttons not working?**

- Verify `js/main.js` is linked correctly in index.html
- Check that all elements have correct IDs (see main.js)
- Test in browser console: `console.log(products)`

## Future Enhancements

Potential improvements you can add:

1. Auto-rotate carousel (with pause on hover)
2. Keyboard navigation (arrow keys)
3. Swipe gestures for mobile
4. Image lazy loading
5. Zoom functionality
6. Gallery view option
7. Wishlist feature
8. Product ratings

## Questions?

Refer to the code comments in `js/main.js` for detailed explanations of each function.

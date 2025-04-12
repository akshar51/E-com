# 🛒 E-Commerce Frontend Project

This is a frontend-only e-commerce website built using **HTML**, **CSS**, **Bootstrap**, and **JavaScript**. It includes a dynamic UI with product listings, a responsive layout, a shopping cart (offcanvas), animations, and more.

---

## 🚀 Features

- **Responsive Design:** Works on all screen sizes using Bootstrap 5.
- **Sticky Navbar:** Always-visible navigation with category links.
- **Animated Hero Banner:** Eye-catching intro section with CSS animations.
- **Product Cards:** Displayed in a responsive grid with an "Add to Cart" button.
- **Offcanvas Shopping Cart:** Add, remove, and view items in a slide-out cart.
- **Scroll-to-Top Button:** Smooth scrolling UX feature.
- **Dynamic Cart Count:** Real-time item count displayed in navbar.

---

## 🧱 Project Structure

```
/project-root
│
├── index.html        # Main HTML file (layout, structure, content)
├── css/
│   └── style.css     # Custom styles (banner, cards, cart)
├── js/
│   └── script.js     # JavaScript logic (cart, scroll, UI interaction)
├── assets/
│   └── img/          # Product and logo images
```

---

## 📝 File Descriptions

### 1. `index.html`

- Bootstrap-based layout with a sticky navbar, banner, and product grid.
- Each product card has an `Add to Cart` button.
- Contains an offcanvas component that acts as the shopping cart.

### 2. `css/style.css`

- Custom styling for:
  - Banner section (`.banner`, `.marquee`)
  - Scroll-to-top button
  - Card hover effects and layout tweaks
  - Overrides to Bootstrap components

### 3. `js/script.js`

Handles all interactivity:

- **Cart Functions:**
  - `addToCart()`: Adds items and updates the cart UI
  - `addQuantity()` / `removeQuantity()`: Adjusts quantities in the cart
  - `cartDisplay()` & `toggleBtn()`: Renders cart and updates cart badge

- **Scroll Button:**
  - Appears when scrolling down
  - Smooth scrolls to top on click

---

## 📦 How to Use

1. Clone or download the project:
   ```bash
   git clone https://github.com/yourusername/ecommerce-site.git
   ```
2. Open `index.html` in your browser.
3. Click "Add" on products to test the cart functionality.
4. Use the cart icon to open the offcanvas panel.

---

## 🛠 Technologies Used

- **HTML5** – Markup language
- **CSS3** – Styling with some animations
- **JavaScript (ES6)** – Frontend logic and DOM manipulation
- **Bootstrap 5** – Responsive grid and UI components
- **Font Awesome & Bootstrap Icons** – For cart, rupee signs, and action buttons

---

## 📸 Screenshots

> Add some preview screenshots here of your site, cart, and banner.

---

## 📚 Future Improvements

- Backend integration (Node.js, Firebase, etc.)
- Product filtering and search logic
- Persistent cart using local storage
- Checkout and payment flow

---

## 🤝 Contributing

Feel free to fork this repo and submit pull requests for improvements or features.

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

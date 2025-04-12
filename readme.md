# 🛒 E-Commerce Frontend Project

This is a frontend-only e-commerce website built using **HTML**, **CSS**, **Bootstrap**, and **JavaScript**. It includes a dynamic UI with product listings, a responsive layout, a shopping cart (offcanvas), animations, and more.

🔗 **Live Preview**: [https://e-com-rouge.vercel.app/](https://e-com-rouge.vercel.app/)

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
│   └── style.css     # Custom styles
├── js/
│   └── script.js     # JavaScript logic (cart, scrolling, etc.)
├── assets/
│   └── img/          # Images, product thumbnails
```

---

## 📝 File Descriptions

### 1. `index.html`

- Bootstrap-based layout with a sticky navbar, banner, and product grid.
- Each product card has an `Add to Cart` button.
- Contains an offcanvas component that acts as the shopping cart.

### 2. `style.css`

- Custom styling for:
  - Banner section (`.banner`, `.banner h1`)
  - Scroll-to-top button
  - Animations using `@keyframes`
  - Overrides to default Bootstrap styling

### 3. `script.js`

Handles all interactivity:

- **Cart Functions:**
  - `addToCart()`: Adds items and updates the UI.
  - `addQuantity() / removeQuantity()`: Adjust quantity.
  - `cartDisplay()`: Renders cart and bill summary.

- **Scroll Button:**
  - Appears when scrolling down.
  - Smooth scrolls to top on click.

---

## 📦 How to Use

1. Clone or download the project:
   ```bash
   git clone https://github.com/yourusername/ecommerce-site.git
   cd ecommerce-site
   ```
2. Open `index.html` in your browser.
3. Interact with product cards and view the cart.

---

## 🛠 Technologies Used

- **HTML5**
- **CSS3**
- **JavaScript (ES6)**
- **Bootstrap 5**
- **Font Awesome** (icons)

---

## 📚 Future Improvements

- Backend integration (Node.js, Firebase, etc.)
- User authentication and login
- Product detail pages
- Checkout and payment integration
- Admin panel to manage products

---

## 🤝 Contributing

Pull requests are welcome! For major changes, please open an issue first.

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).

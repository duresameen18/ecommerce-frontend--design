# Complete Frontend Development Task Guide

## Project Setup Instructions

### 1. Create Project Folder Structure
```
ecommerce-frontend-design/
│
├── index.html              (Home page)
├── products.html           (Product listing page)
├── product-detail.html     (Product details page)
│
├── css/
│   ├── style.css          (Main styles)
│   ├── header.css         (Header styles)
│   ├── footer.css         (Footer styles)
│   └── responsive.css     (Responsive styles)
│
├── js/
│   └── script.js          (JavaScript functionality)
│
├── images/
│   └── (your product images and assets)
│
└── README.md              (Project documentation)
```

### 2. Initialize Git Repository

Open terminal/command prompt and run:

```bash
# Navigate to your project folder
cd path/to/ecommerce-frontend-design

# Initialize git
git init

# Create README
echo "# E-Commerce Frontend Design" > README.md

# Add all files
git add .

# First commit
git commit -m "Initial project setup"

# Create repository on GitHub (go to github.com)
# Then connect and push:
git remote add origin https://github.com/YOUR_USERNAME/ecommerce-frontend-design.git
git branch -M main
git push -u origin main
```

### 3. Weekly Workflow

After each week's work:
```bash
git add .
git commit -m "Week 1: Completed header and footer"
git push origin main
```

---

## Week 1: Header & Footer
**Focus**: Navigation bar, logo, search bar, footer with links

## Week 2: Home & Product Listing Pages
**Focus**: Hero section, product cards, grid layout

## Week 3: Product Details & Interactivity
**Focus**: Product detail page, JavaScript interactions, dropdown menus

---

## Tools You'll Need

1. **Code Editor**: VS Code (recommended)
2. **Browser**: Chrome or Firefox (for testing)
3. **Git**: For version control
4. **GitHub Account**: For code submission

---

## Evaluation Checklist

- [ ] Design matches Figma file closely
- [ ] Semantic HTML5 tags used
- [ ] Clean, organized CSS with comments
- [ ] Responsive on different desktop screen sizes
- [ ] All weekly tasks completed on time
- [ ] Code pushed to GitHub regularly

---

## Tips for Success

1. **Study the Figma design carefully** before coding
2. **Use CSS variables** for colors and spacing (maintainability)
3. **Comment your code** to explain sections
4. **Test frequently** in browser while coding
5. **Commit to GitHub** after each major feature
6. **Ask for help** if stuck on something

Good luck! 🚀

# 🛍️ Tech Tadka Store

> A fully-functional single-page shopping store for the **Tech Tadka With Shubham** YouTube channel.

![Tech Tadka Store](https://img.shields.io/badge/TechTadka-Store-ff5c35?style=for-the-badge)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

---

## ✨ Features

- 🏠 **Home** — Hero banner, trending products, promo sale banner, new arrivals
- 🛍️ **Products** — Full catalog with live search + category filters
- 📦 **Categories** — 8 category cards + featured collection banners
- 📋 **My Orders** — Order history with Delivered / Shipping / Processing status
- ❤️ **Wishlist** — Save products with heart toggle
- 👤 **Profile** — Sign in to view stats, orders, tier badge
- 🛒 **Cart Sidebar** — Add/remove items, quantity controls, GST calculation
- 💳 **Checkout** — 3-step flow: Address → Payment → Confirmation
- 🔐 **Auth Modal** — Sign In / Register + Google / GitHub social login

---

## 📁 Project Structure

```
techtadka-store/
│
├── index.html              ← Main entry point
│
├── css/
│   ├── base.css            ← CSS variables, reset, buttons, toast
│   ├── navbar.css          ← Navigation bar styles
│   ├── components.css      ← Product cards, cart, filters, orders
│   ├── pages.css           ← Hero, stats, banners, profile
│   ├── modals.css          ← Auth, product detail, checkout modals
│   └── responsive.css      ← Mobile / tablet breakpoints
│
└── js/
    ├── data.js             ← Products array + sample orders
    ├── state.js            ← App-level state variables
    ├── render.js           ← Page & card render functions
    ├── cart.js             ← Cart & wishlist logic
    ├── auth.js             ← Login / Register / Logout
    ├── checkout.js         ← Checkout steps & order flow
    ├── ui.js               ← Navigation & toast notifications
    └── app.js              ← DOMContentLoaded init
```

---

## 🚀 Deploy to GitHub Pages

```bash
# 1. Clone or create your repo
git init
git add .
git commit -m "🚀 Initial commit — Tech Tadka Store"
git remote add origin https://github.com/YOUR_USERNAME/techtadka-store.git
git push -u origin main

# 2. Enable GitHub Pages
# Go to repo → Settings → Pages → Source: Deploy from branch → main / root → Save
# Your site will be live at: https://YOUR_USERNAME.github.io/techtadka-store/
```

---

## 🌐 Other Deploy Options

| Platform | Command / Steps |
|----------|----------------|
| **Netlify** | Drag & drop the folder at [netlify.com/drop](https://app.netlify.com/drop) |
| **Vercel** | `npx vercel` in the project folder |
| **Cloudflare Pages** | Connect GitHub repo in the dashboard |

---

## 🎨 Tech Stack

- **Vanilla HTML / CSS / JavaScript** — zero dependencies
- **Google Fonts** — Syne (headings) + DM Sans (body)
- **CSS Custom Properties** — easy theming via `:root` variables

---

## 📺 Made for Tech Tadka With Shubham

Subscribe → [youtube.com/@TechTadkaWithShubham](https://youtube.com)

---

*Built with ❤️ for the Tech Tadka community*

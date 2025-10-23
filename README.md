# 📦 My Wire App – Full-Stack Wire Product App
**My Wire App** is a smart mobile application for managing wire products. Users can browse products, add them to a cart, and manage their account. The app is built with **React Native**, supports a backend with **Node.js/Express**, and demonstrates a full-stack mobile solution.


---

## 🚀 Features

* 📦 Browse a catalog of wire products
* 🖼 View product images and details
* 🛒 Add products to cart and manage items
* 📱 Bottom tab navigation (Products, Cart, Account)
* ⚡ Offline-ready with local assets
* 🌐 Backend API support for products and cart submissions
* 🐳 Supports Docker for backend containerization

---

## 🛠 Tech Stack

* **Frontend:** React Native + Expo
* **Backend:** Node.js + Express
* **State Management:** React Context (CartContext)
* **Navigation:** React Navigation (Bottom Tabs + Stack Navigator)
* **UI Components:** Custom reusable components (Card, Button)
* **Assets:** Images stored locally in `assets/` folder
* **Containerization:** Optional Docker for backend

---

## ⚡ How It Works

1. Start backend server → Provides `/products` and `/cart` endpoints.
2. Open app → Home screen displays all products (from local assets or backend API).
3. Tap a product → Opens Product Detail screen with image, name, price, and “Add to Cart” button.
4. Add products to cart → Manage items in Cart screen.
5. Cart submissions can be sent to backend API.

---

## 📂 Project Structure

```
MyWireApp/
├─ backend/               # Node.js backend
│   ├─ server.js          # Express server
│   ├─ package.json
│   └─ data/products.json # Product data
├─ App.tsx                # Root frontend component
├─ index.ts               # Frontend entry
├─ assets/                # Images & icons
├─ component/             # Reusable components (Card.tsx, Button.tsx)
├─ screen/                # Screens (HomeScreen, ProductDetailScreen, CartScreen, AccountScreen)
├─ context/               # CartContext.tsx
├─ api/                   # API helpers (for backend calls)
├─ screenshot/            # App screenshots
└─ package.json           # Frontend dependencies
```

---

## 🖼 Demo :- 

![MyWireApp](https://github.com/user-attachments/assets/dd4db05c-ea58-49cf-85d7-c6662e6ac00d)



---

## 🛠 Backend Setup

1. Navigate to backend folder:

```bash
cd backend
```

2. Install dependencies:

```bash
npm install
```

3. Start backend server:

```bash
npm start
```

**Default backend URLs:**

* Products: `http://localhost:3000/products`
* Cart: `http://localhost:3000/cart`
* Health check: `http://localhost:3000/health`

---

## 🛠 Frontend Setup

1. Navigate to frontend root:

```bash
cd MyWireApp
```

2. Install dependencies:

```bash
npm install
```

3. Update API URL in `api/api.ts` if using backend:

```ts
export const BASE_URL = 'http://localhost:3000';
```

4. Run the app:

```bash
npx expo start
```

or

```bash
npx react-native run-android
```

---

## 📌 Notes

* Frontend is fully functional offline using local assets.
* Cart state is managed using React Context.
* Backend provides product data and accepts cart submissions.
* Screenshots are stored in `screenshot/` folder for documentation.
* Docker can be used to containerize backend.

---

## 👨‍💻 Author

**Rishikesh Yadav** – Startup-focused developer | React Native & Full-Stack Enthusiast
🔗 [GitHub Profile](https://github.com/your-github-link)

---

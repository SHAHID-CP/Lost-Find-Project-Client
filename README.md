# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.



# 📅 Project Name: WhereIsIt

## 🌟 Purpose
এই প্রজেক্টটির মূল লক্ষ্য হল – হারিয়ে যাওয়া ও পাওয়া জিনিসপত্রের তথ্য একটি ইউজার-ফ্রেন্ডলি প্ল্যাটফর্মে সংরক্ষণ ও খোঁজার সুযোগ করে দেওয়া। এখানে ইউজাররা হারানো বা পাওয়া কোনো বস্তু পোস্ট করতে পারবেন এবং অন্যরা তা দেখে যোগাযোগ করতে পারবেন।

## 🔗 Live URL
[👉 View the Live Website](https://beautiful-marigold-d08b9c.netlify.app/)

---

## 🚀 Key Features

- 🔍 **User-friendly Interface** – সহজ ও পরিষ্কার ডিজাইন
- ⚡ **Fast Performance** – Vite ব্যবহার করে আল্ট্রা ফাস্ট লোডিং টাইম
- 📱 **Fully Responsive** – মোবাইল ও ডেস্কটপ উভয়ের জন্য উপযোগী
- 🔐 **Authentication** – Firebase দিয়ে ইউজার অথেন্টিকেশন
- 🖱️ **Interactive Tooltips** – React Tooltip দিয়ে ইনফরমেটিভ হোভার টিপস
- ⌨️ **Animated Text Effects** – React Simple Typewriter দিয়ে চমৎকার টাইপিং এনিমেশন
- 📢 **Toast Notifications** – React Toastify দিয়ে রিয়েলটাইম ইউজার নোটিফিকেশন
- 💡 **Attractive UI** – DaisyUI এবং TailwindCSS ব্যবহার করে তৈরি

---

## 📦 NPM Packages Used

এই প্রজেক্টে ব্যবহৃত গুরুত্বপূর্ণ npm প্যাকেজগুলো নিচে দেওয়া হল:


- [`@lottiefiles/dotlottie-react`](https://www.npmjs.com/package/@lottiefiles/dotlottie-react) – Lottie এনিমেশন ব্যবহারের জন্য
- [`@tailwindcss/vite`](https://www.npmjs.com/package/@tailwindcss/vite) – Vite এর সাথে TailwindCSS ইন্টিগ্রেশনের জন্য
- [`axios`](https://www.npmjs.com/package/axios) – API call এর জন্য Lightweight HTTP client
- [`firebase`](https://www.npmjs.com/package/firebase) – ইউজার অথেন্টিকেশন এবং রিয়েলটাইম ডেটা ব্যবস্থাপনার জন্য
- [`motion`](https://www.framer.com/motion/) – চমৎকার React Animation লাইব্রেরি (Framer Motion ভিত্তিক)
- [`react`](https://reactjs.org/) – Core React লাইব্রেরি UI তৈরির জন্য
- [`react-dom`](https://reactjs.org/docs/react-dom.html) – DOM এ React কম্পোনেন্ট রেন্ডার করার জন্য
- [`react-router-dom`](https://reactrouter.com/) – SPA রাউটিং ব্যবস্থাপনার জন্য
- [`react-toastify`](https://fkhadra.github.io/react-toastify/) – ইউজার নোটিফিকেশনের জন্য
- [`react-icons`](https://react-icons.github.io/react-icons/) – প্রচুর আইকন সাপোর্ট সহ Icon Library
- [`react-tooltip`](https://react-tooltip.com/) – হোভার টুলটিপ দেখানোর জন্য
- [`react-simple-typewriter`](https://www.npmjs.com/package/react-simple-typewriter) – টাইপিং এনিমেশন ইফেক্টের জন্য
- [`tailwindcss`](https://tailwindcss.com/) – Utility-first CSS framework
- [`daisyui`](https://daisyui.com/) – TailwindCSS এর জন্য component-based UI ফ্রেমওয়ার্ক

- ---


## ⚙️ Installation & Setup

### 📥 Clone Repositories

# Clone Frontend
```bash
git clone https://github.com/Programming-Hero-Web-Course11/b11a11-client-side-CodesWithshahid.git
cd b11a11-client-side-CodesWithshahid
npm install
npm run dev
```
# Clone Backend
```bash
git clone https://github.com/Programming-Hero-Web-Course11/b11a11-server-side-CodesWithshahid.git
cd b11a11-server-side-CodesWitshahid
npm install
npm run dev
```

---

## 🔒 Environment Variables

### 🔹 Client (.env)

```env
VITE_API_KEY=your_firebase_key
VITE_AUTH_DOMAIN=your_firebase_auth
VITE_PROJECT_ID=your_project_id
VITE_STORAGE_BUCKET=your_storage_bucket
VITE_MESSAGING_SENDER_ID=your_sender_id
VITE_APP_ID=your_app_id
VITE_API_URL=https://backend-eta.vercel.app
```

### 🔹 Server (.env)

```env
VITE_FIREBASE_API_KEY=your_firebase_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_firebase_auth_domain
VITE_FIREBASE_PROJECT_ID=your_firebase_project_id
VITE_BACKEND_URL=http://localhost:5000

```

---

## 📤 Image Upload

- Users can upload product images using Imgbb
- Supported on both **Add** and **Update** forms
- Upload triggered through a secure backend API

---

## 🚀 Deployment

### 🔹 Frontend (Firebase)

```bash
npm run build
firebase deploy
```

### 🔹 Backend (Vercel Serverless)

- Routes inside `/api/` folder
- Export handlers using CommonJS/ES6
- Follow [Vercel Docs](https://vercel.com/docs/functions) for structure

---

## 🧪 Testing

- Backend routes tested via Postman
- Firebase test users used for auth
- UI feedback tested via forms, toasts, and edge cases

---

## 📫 Contact

📧 Email: [shaahid.045@gmail.com](mailto:shaahid.045@gmail.com)
🔗 LinkedIn: [Shahid Islam](https://linkedin.com/in/shaahid-cp)

---

## 🧑‍🎓 Author

Made with 💻 by **Md. Shahid Islam**
Lost & Find Project © 2025

---


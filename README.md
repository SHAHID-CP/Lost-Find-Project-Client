# 📅 Project Name: WhereIsIt

## 🌟 Purpose
এই প্রজেক্টটির মূল লক্ষ্য হল – হারিয়ে যাওয়া ও পাওয়া জিনিসপত্রের তথ্য একটি ইউজার-ফ্রেন্ডলি প্ল্যাটফর্মে সংরক্ষণ ও খোঁজার সুযোগ করে দেওয়া। এখানে ইউজাররা হারানো বা পাওয়া কোনো বস্তু পোস্ট করতে পারবেন এবং অন্যরা তা দেখে যোগাযোগ করতে পারবেন।

![Banner](https://i.ibb.co.com/YTW3gxfg/Screenshot-2025-08-23-154923.png)
## 🔗 Live URL
[👉 View the Live Website](https://beautiful-marigold-d08b9c.netlify.app/)

## 📸 Screenshot 
![WhereIsIt Screenshot](./screenshot.png)

## 🛠️ Main Technologies Used
- React  
- Vite  
- Firebase  
- TailwindCSS  
- DaisyUI  

## 🚀 Core Features
- সহজ ও পরিষ্কার ইউজার ইন্টারফেস  
- আল্ট্রা ফাস্ট লোডিং টাইম (Vite এর মাধ্যমে)  
- সম্পূর্ণ রেসপন্সিভ ডিজাইন  
- Firebase Authentication সাপোর্ট  
- React Tooltip দিয়ে ইনফরমেটিভ হোভার টিপস  
- React Simple Typewriter দিয়ে টাইপিং এনিমেশন  
- React Toastify দিয়ে রিয়েলটাইম নোটিফিকেশন  
- DaisyUI ও TailwindCSS দিয়ে আকর্ষণীয় UI  

## 📦 Dependencies Used
- [`@lottiefiles/dotlottie-react`](https://www.npmjs.com/package/@lottiefiles/dotlottie-react) – Lottie এনিমেশন ব্যবহারের জন্য  
- [`@tailwindcss/vite`](https://www.npmjs.com/package/@tailwindcss/vite) – Vite এর সাথে TailwindCSS ইন্টিগ্রেশনের জন্য  
- [`axios`](https://www.npmjs.com/package/axios) – API কলের জন্য Lightweight HTTP client  
- [`firebase`](https://www.npmjs.com/package/firebase) – ইউজার অথেন্টিকেশন ও ডেটা ব্যবস্থাপনার জন্য  
- [`motion`](https://www.framer.com/motion/) – React Animation লাইব্রেরি (Framer Motion ভিত্তিক)  
- [`react`](https://reactjs.org/) – Core React লাইব্রেরি  
- [`react-dom`](https://reactjs.org/docs/react-dom.html) – React কম্পোনেন্ট রেন্ডার করার জন্য  
- [`react-router-dom`](https://reactrouter.com/) – SPA রাউটিং ব্যবস্থাপনার জন্য  
- [`react-toastify`](https://fkhadra.github.io/react-toastify/) – ইউজার নোটিফিকেশনের জন্য  
- [`react-icons`](https://react-icons.github.io/react-icons/) – আইকন লাইব্রেরি  
- [`react-tooltip`](https://react-tooltip.com/) – হোভার টুলটিপ দেখানোর জন্য  
- [`react-simple-typewriter`](https://www.npmjs.com/package/react-simple-typewriter) – টাইপিং এনিমেশন ইফেক্টের জন্য  
- [`tailwindcss`](https://tailwindcss.com/) – Utility-first CSS framework  
- [`daisyui`](https://daisyui.com/) – TailwindCSS এর জন্য UI কম্পোনেন্ট ফ্রেমওয়ার্ক  

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


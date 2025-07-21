
# 📥 ShortsSaver – Download YouTube Shorts & Instagram Reels Free

ShortsSaver is a blazing fast and watermark-free online downloader built with **React** and **Node.js**, designed to fetch and save **YouTube Shorts** and **Instagram Reels** instantly.  
No login. No ads. Just paste and download.

<img width="353" height="351" alt="image" src="https://github.com/user-attachments/assets/c29a4857-294f-44c6-8f5c-5d59a9439bb0" />


---

## ScreenShort

<img width="1600" height="749" alt="image" src="https://github.com/user-attachments/assets/262a3b32-c32d-4484-9e6d-9071959b7a16" />


---

## 🔧 Tech Stack

| Frontend | Backend | Other |
|----------|---------|-------|
| React + Vite + TailwindCSS | Node.js + Express | Firebase (Auth, Storage), Helmet (SEO), React Helmet, Google Analytics, Render (Hosting) |

---

## ✨ Features

✅ Download YouTube Shorts  
✅ Download Instagram Reels *(coming soon)*  
✅ No watermark  
✅ Mobile responsive  
✅ Real-time download preview  
✅ SEO optimized pages (OpenGraph, Twitter Card, Meta Tags)  
✅ Google Analytics Integration  
✅ Deployed API backend

---

## 📁 Folder Structure

### shortsaver-client

```
public/
  └── favicon.ico
src/
  ├── components/
  │   ├── Header.jsx
  │   ├── VideoForm.jsx
  │   ├── VideoPreview.jsx
  ├── pages/
  │   └── Home.jsx
  ├── App.jsx
  ├── main.jsx
  └── index.css
```

### yt-downloader-backend

```
index.js
package.json
node_modules/
```

---

## ⚙️ Local Development

### ✅ Clone the Repo

```bash
git clone https://github.com/yourusername/shortssaver.git
cd shortssaver
```

### ✅ Run Backend (Node.js + Express)

```bash
cd yt-downloader-backend
npm install
npm start
```

### ✅ Run Frontend (Vite + React)

```bash
cd shortsaver-client
npm install
npm run dev
```

---

## 🌐 Deployment

- **Frontend** deployed on **Netlify**
- **Backend** deployed on **Render** / **Railway**

---

## 📈 Analytics

Google Analytics is integrated to track:
- Page views
- Downloads
- Source traffic

---

## 🧠 SEO Metadata

- Meta tags: `title`, `description`, `keywords`, `robots`
- OpenGraph: `og:title`, `og:description`, `og:image`
- Twitter Card: `summary_large_image`
- Canonical URL
- Favicon

---

## 📌 TODOs

- [ ] Add Instagram Reels support
- [ ] Mobile app (PWA)
- [ ] Add download history and user profiles
- [ ] Backend validation and rate-limiting

---

## 🤝 Contribution

Pull requests are welcome. For major changes, open an issue first to discuss what you'd like to change.  
Don't forget to give this repo a ⭐ if you like it!

---

## 📄 License

MIT License

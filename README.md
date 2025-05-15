# 🎥 Video Annotation App

A modern web application that allows users to annotate videos with custom time-based notes. Built with React and Tailwind CSS, this app demonstrates interactive media handling, stateful components, and a responsive UI.

## 🔗 Live Demo

👉 [View Live App](https://video-annotation-chi.vercel.app/)

## 📸 Overview

Users can:

- Play and pause a video
- Add timestamped annotations
- View, edit, and delete annotations
- Jump to a video timestamp by clicking on a note
- Copy annotations as JSON

## ⚙️ Tech Stack

- ⚛️ **React** – UI built with reusable components
- 🎨 **Tailwind CSS** – For utility-first styling and responsiveness
- 🧠 **useRef** & **useState** – For DOM control and annotation logic

## 🧠 Features

- Timestamped video annotations
- Click-to-jump functionality
- Fully responsive layout
- Minimal, distraction-free UI

## 📁 Folder Structure

```
src/
├── assets/
├── components/
├── utils/
├── App.css
├── App.jsx
├── index.css
├── main.jsx

```

## 💡 Key Concepts & Hooks

| Feature                     | Approach / Hook                                        |
| --------------------------- | ------------------------------------------------------ |
| Access current video time   | `useRef` + `video.currentTime`                         |
| Auto display annotations    | `useEffect` + `setInterval` or `requestAnimationFrame` |
| Seek video programmatically | `videoRef.current.currentTime = x`                     |
| Show overlays briefly       | `setTimeout` for display timing                        |
| Upload video                | `FileReader` and `URL.createObjectURL()`               |

## 📬 Contact

Feel free to connect or reach out:

- Portfolio: [sheetal-naik.vercel.app](https://sheetal-naik.vercel.app)
- Email: [sheetalnaik310@gmail.com](mailto:sheetalnaik310@gmail.com)
- LinkedIn: [linkedin.com/in/developer-sheetalnaik](https://linkedin.com/in/developer-sheetalnaik)

---

**Built with ❤️ by [Sheetal Naik]**

# Video Annotation Tool

## 🎯 **Goal**

A tool where users can upload/play a video and add annotations (text/tags/comments) at specific timestamps.

---

## 🧱 **Core Features**

1. **Video Playback**

   * Upload or select a video (via `<input type="file">`)
   * Standard controls: play, pause, seek

2. **Timestamped Annotations**

   * Capture current time on button press (`videoRef.current.currentTime`)
   * Attach a comment/tag to that timestamp

3. **Annotation List Panel**

   * Display annotations sorted by time
   * Click to jump to specific timestamp in video

4. **Overlay Annotations (optional)**

   * Show annotation on video at the right moment
   * Fade out after a few seconds or on user dismiss

---

## 🛠️ **Tech Stack**

* **React** (Vite + Tailwind for setup)
* **Zustand or Context API** for state management
* **React Hook Form / Formik** for annotation input
* **FileReader API** for local video playback
* **Optional**: `react-player` for better video support (especially from URLs)

---

## 🧠 **Component Breakdown**

```
App
├── VideoPlayer (video element, ref, controls)
├── AnnotationForm (input field + timestamp display)
├── AnnotationList (list, clickable timestamps)
└── Overlay (absolute-positioned floating annotation)
```

---

## 💡 **Key Concepts & Hooks**

| Feature                     | Approach / Hook                                        |
| --------------------------- | ------------------------------------------------------ |
| Access current video time   | `useRef` + `video.currentTime`                         |
| Auto display annotations    | `useEffect` + `setInterval` or `requestAnimationFrame` |
| Seek video programmatically | `videoRef.current.currentTime = x`                     |
| Show overlays briefly       | `setTimeout` for display timing                        |
| Upload video                | `FileReader` and `URL.createObjectURL()`               |

---

## 📁 **Data Structure Example**

```js
[
  {
    id: 1,
    timestamp: 12.5,
    text: "Scene change - highlight object",
  },
  {
    id: 2,
    timestamp: 34.7,
    text: "Add note about color palette",
  },
]
```

---

## 🧪 **Stretch Features**

* Tag filtering (`#character`, `#background`, etc.)
* Annotation editing & deleting
* Export annotations to JSON
* Keyboard shortcuts (`A` to annotate, `→`/`←` to seek)
* Snap to frame (approximate nearest second)
* Zoom into video timeline (like a waveform editor)


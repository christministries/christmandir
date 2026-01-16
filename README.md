# Bible App & PWA Project

A comprehensive, web-based Bible application hosted on GitHub Pages. This project is designed as a **Progressive Web App (PWA)**, meaning it can be installed on mobile and desktop devices just like a native app.

## 🚀 Live Demo
You can view the live project here:
**(https://www.christmandir.com)**

## 📂 Project Structure

Here is an overview of the files included in this repository:

### Core Pages
* **`index.html`** - The main landing page / home screen of the application.
* **`bible.html`** - The primary interface for reading scripture.
* **`stories.html`** - A dedicated section for biblical stories.
* **`quiz.html`** - An interactive quiz module to test knowledge.
* **`dailyverse.html`** - Displays a specific verse for the day (often used for daily inspiration).

### PWA & System Files
* **`install.html`** - A custom install prompt or guide to help users add the app to their home screen.
* **`sw.js`** - The **Service Worker**. This script enables offline functionality and caching, making the app load instantly even on slow networks.
* **`manifest.json`** - The configuration file that tells the browser how your app should behave when installed (name, colors, orientation).
* **`icon-192.png`** - App icon for standard home screens and task switchers.
* **`icon-512.png`** - High-resolution app icon for splash screens and larger displays.

## 📱 Features
* **Offline Access:** Thanks to the Service Worker (`sw.js`), visited pages are cached and can be accessed without an internet connection.
* **Installable:** Users can "Add to Home Screen" on iOS and Android for a full-screen, app-like experience.
* **Interactive Content:** Includes quizzes and stories alongside standard text.

## 🛠️ How to Deploy
1.  Upload all files listed above to your GitHub repository.
2.  Go to **Settings** > **Pages**.
3.  Under **Source**, select `Deploy from a branch`.
4.  Select `main` (or `master`) branch and `/ (root)` folder.
5.  Click **Save**. GitHub will provide your live URL shortly.

## 📝 Customization
To update the app icons, simply replace `icon-192.png` and `icon-512.png` with your own images, ensuring the filenames and dimensions match exactly.

---
*Created for GitHub Pages deployment.*

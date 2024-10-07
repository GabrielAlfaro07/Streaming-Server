# Streaming-Server
ITCR - IC6600 - Project

## Overview

Welcome to the Streaming Server Project! This project is a full-stack application providing seamless streaming of audio and video content. Built with React for the frontend, an **NGINX** load balancer, and Flask for the backend, it offers features like media playback, search, and personalized favorites management through Firebase.

## Features

- **Firebase Authentication:** Secure Google login using Firebase Authentication.
- **Favorites Management:** Store and manage user-specific favorites (music and movies) in Firestore.
- **Audio and Video Playback:** Smooth playback with play, pause, and skip controls for both audio and video content.
- **Load Balancing:** NGINX is used to distribute incoming traffic across multiple server instances, ensuring high availability and improved performance.
- **Search Functionality:** Easily search and filter through available media.
- **Backend Media Service:** The Flask server serves media metadata and files, making it efficient for media retrieval.
  
## Tech Stack

- **Frontend:** React
- **Backend:** Flask
- **Authentication & Database:** Firebase (Authentication and Firestore)
- **Media Playback:** Custom React components for AudioPlayer and VideoPlayer
- **Load Balancer:** NGINX

## Getting Started

To get started with the project, follow these steps:

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/YourUsername/YourProject.git
   ```

2. **Install Dependencies:**
Navigate to the project directory and install the required dependencies:
   ```bash
   npm install
   ```
   
3. **Set up Firebase:**
Make sure you configure your Firebase project and add your credentials to the firebaseConfig.js file in the project.
   
4. **Start the Flask servers:**
   ```bash
   python server_1.py
   python server_2.py
   ```

5. **Run the Project:**
Start the React development server:
   ```bash
   npm start
   ```

## Notes

1. This proyect uses React, Python and Nginx, so, you need to install these tools to run the code.
2. Make sure Firebase authentication and Firestore are properly set up in your Firebase console.
3. The Flask server serves the media files and metadata; ensure it is running alongside the React app. You can adjust media files and metadata through the Flask server.
4. You can copy the configuration for Nginx, it is located on nginx.conf.

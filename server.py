from flask import Flask, send_from_directory
from flask_cors import CORS  # Import CORS
import os
import socket

app = Flask(__name__)

# Enable CORS for all routes
CORS(app)

# Directories where your movie and music files are stored
MOVIES_FOLDER = "movies"
MUSIC_FOLDER = "music"

@app.route('/movies')
def list_movies():
    # List all movie files in the movies folder
    movie_files = os.listdir(MOVIES_FOLDER)
    return {"movies": movie_files}

@app.route('/music')
def list_music():
    # List all music files in the music folder
    music_files = os.listdir(MUSIC_FOLDER)
    return {"music": music_files}

@app.route('/movies/<filename>')
def movies(filename):
    # Serve the requested movie file from the movies folder
    print(f"Serving movie file: {filename}")  # Debugging line
    return send_from_directory(MOVIES_FOLDER, filename)

@app.route('/music/<filename>')
def music(filename):
    # Serve the requested music file from the music folder
    print(f"Serving music file: {filename}")  # Debugging line
    return send_from_directory(MUSIC_FOLDER, filename)

def obtener_ip_local():
    # Function to get the local IP address
    hostname = socket.gethostname()
    return socket.gethostbyname(hostname)

if __name__ == '__main__':
    # Set up the port and get the local IP
    PORT = 5000
    ip_local = obtener_ip_local()

    # Print the URL to access the server from other devices
    print(f"The server is running at: http://{ip_local}:{PORT}")

    # Start the Flask app
    app.run(host='0.0.0.0', port=PORT)

from flask import Flask, send_from_directory
import os
from flask_cors import CORS

app = Flask(__name__)

# Enable CORS for all routes
CORS(app)

# Metadata for movies and music
movies_metadata = {
    "Coldplay - Viva La Vida (Official Video).mp4": {"id": "1", "name": "Coldplay - Viva La Vida (Official Video)", "genre": "Music"},
    "Y2meta.app-Aprende React ahora! curso completo para crear aplicaciones.mp4": {"id": "2", "name": "Aprende React ahora! curso completo para crear aplicaciones", "genre": "Educational"},
}

music_metadata = {
    "Deemo - Sakuzyo - Altale.mp3": {"id": "1", "name": "Altale - Deemo", "artist": "Sakuzyo", "genre": "Electronic"},
    "Gusty Garden Galaxy - Super Mario Galaxy.mp3": {"id": "2", "name": "Gusty Garden Galaxy - Super Mario Galaxy", "artist": "Nintendo", "genre": "Videogames"},
}

MOVIES_FOLDER = "movies"
MUSIC_FOLDER = "music"

@app.route('/movies')
def list_movies():
    # List movie files synchronously
    if not os.path.exists(MOVIES_FOLDER):
        return {"error": "'movies' folder does not exist"}, 404
    
    movie_files = os.listdir(MOVIES_FOLDER)
    movie_files = [file for file in movie_files if file in movies_metadata]
    return {"movies": [{"file": file, **movies_metadata[file]} for file in movie_files]}

@app.route('/music')
def list_music():
    # List music files synchronously
    if not os.path.exists(MUSIC_FOLDER):
        return {"error": "'music' folder does not exist"}, 404

    music_files = os.listdir(MUSIC_FOLDER)
    music_files = [file for file in music_files if file in music_metadata]
    return {"music": [{"file": file, **music_metadata[file]} for file in music_files]}

@app.route('/movies/<filename>')
def movies(filename):
    # Serve movie files synchronously
    if not os.path.exists(os.path.join(MOVIES_FOLDER, filename)):
        return {"error": "File not found"}, 404

    return send_from_directory(MOVIES_FOLDER, filename)

@app.route('/music/<filename>')
def music(filename):
    # Serve music files synchronously
    if not os.path.exists(os.path.join(MUSIC_FOLDER, filename)):
        return {"error": "File not found"}, 404

    return send_from_directory(MUSIC_FOLDER, filename)

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5001)

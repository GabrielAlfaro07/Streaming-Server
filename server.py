from flask import Flask, send_from_directory
import os
import asyncio
from flask_cors import CORS

app = Flask(__name__)

# Enable CORS for all routes
CORS(app)

# Metadata for movies and music
movies_metadata = {
    "Coldplay - Viva La Vida (Official Video).mp4": {"name": "Coldplay - Viva La Vida (Official Video)", "genre": "Music"},
#    "video2.mp4": {"name": "Inception", "genre": "Thriller"},
}

music_metadata = {
    "Deemo - Sakuzyo - Altale.mp3": {"name": "Altale - Deemo", "artist": "Sakuzyo", "genre": "Electronic"},
#    "LitNon.mp3": {"name": "Literally Nonsense", "artist": "Eve", "genre": "J-pop"},
}

MOVIES_FOLDER = "movies"
MUSIC_FOLDER = "music"

@app.route('/movies')
async def list_movies():
    # List movie files asynchronously
    movie_files = await asyncio.to_thread(os.listdir, MOVIES_FOLDER)
    movie_files = [file for file in movie_files if file in movies_metadata]
    return {"movies": [{"file": file, **movies_metadata[file]} for file in movie_files]}

@app.route('/music')
async def list_music():
    # List music files asynchronously
    music_files = await asyncio.to_thread(os.listdir, MUSIC_FOLDER)
    music_files = [file for file in music_files if file in music_metadata]
    return {"music": [{"file": file, **music_metadata[file]} for file in music_files]}

@app.route('/movies/<filename>')
async def movies(filename):
    # Serve movie files asynchronously
    return await asyncio.to_thread(send_from_directory, MOVIES_FOLDER, filename)

@app.route('/music/<filename>')
async def music(filename):
    # Serve music files asynchronously
    return await asyncio.to_thread(send_from_directory, MUSIC_FOLDER, filename)

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)

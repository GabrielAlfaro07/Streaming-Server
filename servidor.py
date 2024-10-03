from flask import Flask, send_from_directory, render_template_string
import os

app = Flask(__name__)

# Estructura de películas
movies_metadata = {
    "video1.mp4": {"name": "The Matrix", "genre": "Science Fiction"},
    "video2.mp4": {"name": "Inception", "genre": "Thriller"},
}

# Estructura de canciones
music_metadata = {
    "StayWithMe.mp3": {"name": "Stay With Me", "artist": "Miki Mitsubara", "genre": "J-pop"},
    "LitNon.mp3": {"name": "Literally Nonsense", "artist": "Eve", "genre": "J-pop"},
}

MOVIES_FOLDER = "movies"
MUSIC_FOLDER = "music"

@app.route('/')
def index():
    # Verifica si las carpetas existen
    if not os.path.exists(MOVIES_FOLDER):
        return "<h1>Error: 'movies' folder does not exist.</h1>", 404

    if not os.path.exists(MUSIC_FOLDER):
        return "<h1>Error: 'music' folder does not exist.</h1>", 404

    # Lista los archivos de películas y música de manera sincrónica
    movie_files = os.listdir(MOVIES_FOLDER)
    music_files = os.listdir(MUSIC_FOLDER)

    # Filtra archivos existentes en el diccionario de metadatos
    movie_files = [file for file in movie_files if file in movies_metadata]
    music_files = [file for file in music_files if file in music_metadata]

    # HTML simple para mostrar las listas de películas y música con su información
    html_template = """
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Media Server</title>
    </head>
    <body>
        <h1>Spotflix</h1>

        <h2>Movies</h2>
        <ul>
        {% for file in movie_files %}
            <li>
                <strong>{{ movies_metadata[file].name }}</strong> 
                ({{ movies_metadata[file].genre }})
                <a href="{{ url_for('movies', filename=file) }}">Watch</a>
            </li>
        {% endfor %}
        </ul>

        <h2>Music</h2>
        <ul>
        {% for file in music_files %}
            <li>
                <strong>{{ music_metadata[file].name }}</strong> 
                by {{ music_metadata[file].artist }} 
                ({{ music_metadata[file].genre }})
                <a href="{{ url_for('music', filename=file) }}">Listen</a>
            </li>
        {% endfor %}
        </ul>
    </body>
    </html>
    """
    return render_template_string(html_template, movie_files=movie_files, music_files=music_files, movies_metadata=movies_metadata, music_metadata=music_metadata)

@app.route('/movies/<filename>')
def movies(filename):
    # Enviar archivos de películas de manera sincrónica
    return send_from_directory(MOVIES_FOLDER, filename)

@app.route('/music/<filename>')
def music(filename):
    # Enviar archivos de música de manera sincrónica
    return send_from_directory(MUSIC_FOLDER, filename)

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)

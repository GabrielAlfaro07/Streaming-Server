from flask import Flask, send_from_directory, render_template_string, url_for
import os
import socket

app = Flask(__name__)

# Directorios donde tienes tus archivos de películas y música
MOVIES_FOLDER = "movies"
MUSIC_FOLDER = "music"


@app.route('/')
def index():
    # Lista los archivos de películas y música en sus respectivos directorios
    movie_files = os.listdir(MOVIES_FOLDER)
    music_files = os.listdir(MUSIC_FOLDER)

    # HTML simple para mostrar las listas de películas y música que se pueden reproducir
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
                <a href="{{ url_for('movies', filename=file) }}">{{ file }}</a>
            </li>
        {% endfor %}
        </ul>

        <h2>Music</h2>
        <ul>
        {% for file in music_files %}
            <li>
                <a href="{{ url_for('music', filename=file) }}">{{ file }}</a>
            </li>
        {% endfor %}
        </ul>
    </body>
    </html>
    """
    return render_template_string(html_template, movie_files=movie_files, music_files=music_files)


@app.route('/movies/<filename>')
def movies(filename):
    # Envía el archivo desde el directorio de películas
    return send_from_directory(MOVIES_FOLDER, filename)


@app.route('/music/<filename>')
def music(filename):
    # Envía el archivo desde el directorio de música
    return send_from_directory(MUSIC_FOLDER, filename)


def obtener_ip_local():
    # Función para obtener la dirección IP local
    hostname = socket.gethostname()
    return socket.gethostbyname(hostname)


if __name__ == '__main__':
    # Configura el puerto y obtiene la IP local
    PORT = 5000
    ip_local = obtener_ip_local()

    # Imprime el enlace que puedes abrir en otra computadora
    print(f"El servidor está corriendo en: http://{ip_local}:{PORT}")

    # Inicia la aplicación Flask
    app.run(host='0.0.0.0', port=PORT)

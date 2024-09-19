from flask import Flask, send_from_directory, jsonify
import os

app = Flask(__name__)

# Route to serve the HLS playlist
@app.route('/video/<path:filename>')
def stream_video(filename):
    return send_from_directory('videos', filename)

# Route to serve the HLS audio
@app.route('/audio/<path:filename>')
def stream_audio(filename):
    return send_from_directory('audios', filename)

# Route to list available files
@app.route('/videos')
def list_videos():
    files = os.listdir('videos')
    return jsonify(files)

@app.route('/audios')
def list_audios():
    files = os.listdir('audios')
    return jsonify(files)

if __name__ == '__main__':
    # Ensure the directories exist
    if not os.path.exists('videos'):
        os.makedirs('videos')
    if not os.path.exists('audios'):
        os.makedirs('audios')

    app.run(debug=True, host='0.0.0.0', port=5000)

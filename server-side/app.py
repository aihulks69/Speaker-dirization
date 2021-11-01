from flask import Flask, jsonify, request
import os

app = Flask(__name__)

# Create a directory in a known location to save files to.
uploads_dir = os.path.join(os.getcwd(), "instance/uploads")

@app.route('/audio', methods=['POST'])
def get_score():
    if request.method == 'POST':
      f = request.files['file']
      f.save(os.path.join(uploads_dir, f.filename))
      denoise_signal()
      return 'file uploaded successfully'


def denoise_signal():
  print("Pre-processing in progress")
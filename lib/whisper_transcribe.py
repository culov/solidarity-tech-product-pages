#!/usr/bin/env python3
import subprocess
import os
os.environ['KMP_DUPLICATE_LIB_OK'] = 'TRUE'
# import whisper
import whisper_timestamped# as whisper
import json
import sys
import warnings

def split_audio_channels(input_file):
    # Split the stereo audio into two mono files
    subprocess.run(['ffmpeg', '-y', '-i', input_file, '-map_channel', '0.0.0', 'left_channel.wav'])
    subprocess.run(['ffmpeg', '-y', '-i', input_file, '-map_channel', '0.0.1', 'right_channel.wav'])

def transcribe(file):
    model = whisper_timestamped.load_model("small")  # or "small", "medium", "large", depending on your requirement
    result = model.transcribe(file)
    return result

def main():
    # input_file = "/Users/abib/Downloads/RE30c46102656eadbcf8418381b43ea139.wav"
    input_file = sys.argv[1] if len(sys.argv) > 1 else None

    warnings.warn("Warning........"+input_file)
    split_audio_channels(input_file)

    # Transcribe each channel
    left_transcription = transcribe("left_channel.wav")
    right_transcription = transcribe("right_channel.wav")

    # Output transcriptions to JSON files
    # with open('left_channel_transcription.json', 'w') as f:
    #     json.dump(left_transcription, f, ensure_ascii=False, indent=4)

    # with open('right_channel_transcription.json', 'w') as f:
    #     json.dump(right_transcription, f, ensure_ascii=False, indent=4)

    # Combine and output the transcriptions as JSON to stdout
    combined_transcription = {
        "left_channel": left_transcription,
        "right_channel": right_transcription
    }
    print(json.dumps(combined_transcription, ensure_ascii=False, indent=4))

if __name__ == "__main__":
    main()

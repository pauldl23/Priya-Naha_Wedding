
import struct
import sys

def get_jpeg_size(filename):
    try:
        with open(filename, 'rb') as f:
            data = f.read()
            i = 0
            if data[i] != 0xff or data[i+1] != 0xd8:
                return None
            i += 2
            while True:
                if i >= len(data): return None
                while data[i] != 0xff: i += 1
                while data[i] == 0xff: i += 1
                marker = data[i]
                i += 1
                length = struct.unpack('>H', data[i:i+2])[0]
                if marker >= 0xc0 and marker <= 0xcf and marker != 0xc4 and marker != 0xc8 and marker != 0xcc:
                    h, w = struct.unpack('>HH', data[i+5:i+9]) # Correct offset for Start Of Frame segment
                    # SOF0: Marker (2 bytes), Length (2 bytes), Precision (1 byte), Height (2 bytes), Width (2 bytes)
                    # Wait, my logic above might be slightly off on offsets.
                    # Correct structure: Marker (FF C0), Length (2 bytes), Precision (1 byte), Height (2 bytes), Width (2 bytes)
                    # Let's re-verify:
                    # i points to Length. i+2 is start of data.
                    # Data[0] is precision. Data[1:3] is Height. Data[3:5] is Width.
                    # So unpack from i+2+1:i+2+5? No, i+2+1 is index 3.
                    # Let's stick to reading bytes directly.
                    base = i + 2
                    h = struct.unpack('>H', data[base+1:base+3])[0]
                    w = struct.unpack('>H', data[base+3:base+5])[0]
                    return w, h
                i += 2 + length - 2 # Length includes itself (2 bytes)
    except Exception as e:
        print(e)
        return None

print(get_jpeg_size('assets/images/sliders/1.jpg'))

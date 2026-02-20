
import struct

def get_jpeg_size(filename):
    with open(filename, 'rb') as f:
        data = f.read()
        i = 0
        if data[i] != 0xff or data[i+1] != 0xd8:
            return None
        i += 2
        while True:
            if i >= len(data): return None
            while i < len(data) and data[i] != 0xff: i += 1
            while i < len(data) and data[i] == 0xff: i += 1
            if i >= len(data): return None
            marker = data[i]
            i += 1
            if marker == 0xda: return None # SOS: Start Of Scan
            length = struct.unpack('>H', data[i:i+2])[0]
            if marker >= 0xc0 and marker <= 0xcf and marker != 0xc4 and marker != 0xc8 and marker != 0xcc:
                h, w = struct.unpack('>HH', data[i+3:i+7])
                return w, h
            i += 2 + length - 2

print(get_jpeg_size('assets/images/sliders/1.jpg'))

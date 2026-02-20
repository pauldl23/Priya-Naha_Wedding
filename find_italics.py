import os

def search_files():
    files_to_search = ['assets/style.css', 'index.html']
    patterns = ['font-style: italic', 'font-style:oblique', '<i>', '<em>', '<i>'] # added <i> just in case, though usually icons
    
    print("Searching for italics...")
    for file_path in files_to_search:
        if not os.path.exists(file_path):
            print(f"File not found: {file_path}")
            continue
            
        try:
            with open(file_path, 'r', encoding='utf-8') as f:
                lines = f.readlines()
                for i, line in enumerate(lines):
                    for pattern in patterns:
                        if pattern in line:
                            # Filter out font-awesome icons if possible, but for now just list everything
                            if pattern == '<i>' and 'class="fa' in line:
                                continue # Skip likely icons
                            print(f"{file_path}:{i+1}: {line.strip()}")
        except Exception as e:
            print(f"Error reading {file_path}: {e}")

if __name__ == "__main__":
    search_files()

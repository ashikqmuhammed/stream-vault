# StreamVault 🚀  
A lightweight Node.js and Express.js application that demonstrates **Buffers and Streams** for handling text, images, and videos efficiently.  

## Features  
- 📄 **Text Upload & Retrieval** – Store text in a file and retrieve it.  
- 🖼 **Image Upload & Streaming** – Upload and serve images dynamically.  
- 🎥 **Video Upload & Streaming** – Upload and stream videos using streams.  
- ⚡ **Optimized for Performance** – Uses **asynchronous file handling** and **streams** to reduce memory usage.  

## Installation  
```bash
git clone https://github.com/ashikqmuhammed/StreamVault.git
cd StreamVault
npm install
```

## Usage  
### Start the server  
```bash
node index.js
```

### API Endpoints  
| Method | Endpoint | Description |
|--------|---------|-------------|
| `POST` | `/upload-text` | Upload text and save to a file |
| `GET` | `/read-text` | Retrieve stored text |
| `POST` | `/upload-image` | Upload an image |
| `GET` | `/image/:filename` | Retrieve an uploaded image |
| `POST` | `/upload-video` | Upload a video |
| `GET` | `/stream-video/:filename` | Stream an uploaded video |

## Requirements  
- Node.js 18+  
- Express.js  
- Multer  
- File System (`fs`)  

## License  
This project is open-source and available under the **MIT License**.


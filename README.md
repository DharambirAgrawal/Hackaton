# Nourish Now Here

![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=white)
![Next.js](https://img.shields.io/badge/Next.js-14-black?logo=next.js&logoColor=white)
![Express](https://img.shields.io/badge/Express-4-000000?logo=express&logoColor=white)

Snap a photo of what's in your fridge, get recipes back.

Nourish Now Here is a hackathon project built by a five-person team at HackGSU 2024. It tackles a familiar problem: you have a handful of ingredients and no idea what to cook. Upload a photo of your food and the app identifies what's in it using an image-recognition model, then looks up matching recipes so you know what to make with it.

## Features

- **Drag-and-drop image upload** — drop a photo of your ingredients or a dish straight into the browser
- **AI-powered ingredient recognition** — the image is classified with Clarifai's food-item-recognition model to extract a list of likely ingredients
- **Recipe suggestions** — those ingredients are used to query the Edamam recipe API, returning matching recipes with links, images, and ingredient lists
- **Results modal** — ingredients and recipes are displayed in a card-based gallery without leaving the page
- **Light/dark theme** — theme toggle built on `next-themes`
- **Team page** — a dedicated page introducing the team behind the project

## Tech Stack

**Client**
- [Next.js 14](https://nextjs.org/) (App Router) + React 18 + TypeScript
- Tailwind CSS with [shadcn/ui](https://ui.shadcn.com/)-style components (Radix UI primitives)
- `react-dropzone` for the upload widget, `react-modal` for the results dialog

**Server**
- Node.js + Express
- [Clarifai gRPC SDK](https://www.clarifai.com/) for food image classification
- [Edamam Recipe Search API](https://developer.edamam.com/) for recipe lookup
- Multer for in-memory image upload handling
- Mongoose (MongoDB) included as a dependency for future persistence

## Getting Started

### Prerequisites

- Node.js 18+
- A [Clarifai](https://www.clarifai.com/) account and PAT (for image classification)
- An [Edamam](https://developer.edamam.com/) app ID and key (for recipe search)
- A MongoDB connection string, if you want the server to connect to a database

### Installation

Clone the repo and install dependencies for both the client and server:

```bash
git clone https://github.com/DharambirAgrawal/Hackaton.git
cd Hackaton

# Server
cd server
npm install

# Client
cd ../client
npm install
```

### Configuration

Create a `.env` file in `server/` with:

```
PORT=5000
MONGO_URI=<your-mongodb-connection-string>
ALLOWED_ORIGIN=http://localhost:3000
ALLOWED_ORIGIN2=<second-allowed-origin>
```

The Clarifai and Edamam credentials currently live directly in `server/src/services/`. If you fork this project, move them into environment variables before deploying.

### Running locally

```bash
# Terminal 1 — start the API server
cd server
npm start

# Terminal 2 — start the Next.js client
cd client
npm run dev
```

The client runs on [http://localhost:3000](http://localhost:3000). By default the upload form points at the team's deployed API; update the fetch URL in `client/src/components/Image-uploader.tsx` to point at your local server instead.

## How It Works

1. The client lets a user drop or select an image and POSTs it as `multipart/form-data` to `/api/upload`.
2. The Express server receives the file in memory (via Multer), base64-encodes it, and sends it to Clarifai's `food-item-recognition` model.
3. Clarifai returns a list of predicted food concepts (e.g. `tomato`, `pasta`, `cheese`).
4. The server queries the Edamam recipe API for each predicted ingredient and aggregates the results.
5. Ingredients and matching recipes are returned to the client in a single JSON response and rendered in a modal gallery.

## Team

Built at HackGSU 2024 by Dharambir Agrawal, Omajuwa Jalla, Ghislain Nkundayezu, Emmanuel Acheampong, and Eniola Akinpelumi.

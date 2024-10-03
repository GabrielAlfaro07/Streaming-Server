export interface Track {
  id: string;
  name: string;
  artist: string;
  genre: string;
  url: string;
}

export interface Video {
  id: string;
  name: string;
  genre: string;
  url: string;
}

// Fetch music tracks from the server
export const fetchTracks = async (): Promise<Track[]> => {
  const response = await fetch(`${import.meta.env.VITE_FLASK_SERVER_IP}/music`);
  const data = await response.json();

  return data.music.map((file: any) => ({
    id: file.id,
    name: file.name,
    artist: file.artist,
    genre: file.genre,
    url: `${import.meta.env.VITE_FLASK_SERVER_IP}/music/${file.file}`,
  }));
};

// Utility function to get unique genres from tracks
export const getGenresFromTracks = (tracks: Track[]): string[] => {
  const genres = tracks.map((track) => track.genre);
  return Array.from(new Set(genres)); // Remove duplicates
};

// Fetch videos from the server
export const fetchVideos = async (): Promise<Video[]> => {
  const response = await fetch(
    `${import.meta.env.VITE_FLASK_SERVER_IP}/movies`
  );
  const data = await response.json();
  return data.movies.map((file: any) => ({
    id: file.id,
    name: file.name,
    genre: file.genre,
    url: `${import.meta.env.VITE_FLASK_SERVER_IP}/movies/${file.file}`,
  }));
};

// Utility function to get unique genres from videos
export const getGenresFromVideos = (videos: Video[]): string[] => {
  const genres = videos.map((video) => video.genre);
  return Array.from(new Set(genres)); // Remove duplicates
};

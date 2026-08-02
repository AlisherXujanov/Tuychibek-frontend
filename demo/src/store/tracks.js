export const tracks = [
  {
    id: "t01",
    title: "Midnight Frequency",
    artist: "Tuychibek",
    album: "Resonance Vol. I",
    durationSec: 214,
    cover: "/covers/cover-01.svg",
    accent: "#0E7C86",
    audioSrc: null,
  },
  {
    id: "t02",
    title: "Pearl Stage",
    artist: "Tuychibek",
    album: "Resonance Vol. I",
    durationSec: 188,
    cover: "/covers/cover-02.svg",
    accent: "#1A5F7A",
    audioSrc: null,
  },
  {
    id: "t03",
    title: "Ink Horizon",
    artist: "Tuychibek",
    album: "Night Listening",
    durationSec: 246,
    cover: "/covers/cover-03.svg",
    accent: "#2C3E50",
    audioSrc: null,
  },
  {
    id: "t04",
    title: "Teal Immersion",
    artist: "Tuychibek",
    album: "Night Listening",
    durationSec: 201,
    cover: "/covers/cover-04.svg",
    accent: "#0A6B74",
    audioSrc: null,
  },
  {
    id: "t05",
    title: "Soft Static",
    artist: "Tuychibek",
    album: "Archive Sessions",
    durationSec: 173,
    cover: "/covers/cover-05.svg",
    accent: "#4A5568",
    audioSrc: null,
  },
  {
    id: "t06",
    title: "Afterglow Signal",
    artist: "Tuychibek",
    album: "Archive Sessions",
    durationSec: 229,
    cover: "/covers/cover-06.svg",
    accent: "#C9A227",
    audioSrc: null,
  },
  {
    id: "t07",
    title: "Low Tide Echo",
    artist: "Tuychibek",
    album: "Coastal Cuts",
    durationSec: 195,
    cover: "/covers/cover-07.svg",
    accent: "#0E9488",
    audioSrc: null,
  },
  {
    id: "t08",
    title: "Glass Room",
    artist: "Tuychibek",
    album: "Coastal Cuts",
    durationSec: 262,
    cover: "/covers/cover-08.svg",
    accent: "#5B6B7A",
    audioSrc: null,
  },
  {
    id: "t09",
    title: "Circuit Bloom",
    artist: "Tuychibek",
    album: "Resonance Vol. II",
    durationSec: 208,
    cover: "/covers/cover-09.svg",
    accent: "#2BB673",
    audioSrc: null,
  },
  {
    id: "t10",
    title: "Quiet Voltage",
    artist: "Tuychibek",
    album: "Resonance Vol. II",
    durationSec: 181,
    cover: "/covers/cover-10.svg",
    accent: "#0C4A6E",
    audioSrc: null,
  },
];

export function formatDuration(seconds) {
  const m = Math.floor(seconds / 60);
  const s = Math.floor(seconds % 60);
  return `${m}:${s.toString().padStart(2, "0")}`;
}

export function getTrackIndex(trackId) {
  return tracks.findIndex((t) => t.id === trackId);
}

export function getTrackById(trackId) {
  return tracks.find((t) => t.id === trackId) ?? null;
}

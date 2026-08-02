"use client";

import { useState } from "react";
import Link from "next/link";
import "./landing.scss";
import { tracks, getTrackById, getTrackIndex } from "@/store/tracks";
import TrackList from "./components/Library/TrackList";
import PlayerDrawer from "./components/Player/PlayerDrawer";
import SiteFooter from "./components/Footer/SiteFooter";

export default function Home() {
  const [activeTrackId, setActiveTrackId] = useState(null);
  const [playerOpen, setPlayerOpen] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  const activeTrack = activeTrackId ? getTrackById(activeTrackId) : null;

  function selectTrack(trackId) {
    setActiveTrackId(trackId);
    setPlayerOpen(true);
    setIsPlaying(true);
  }

  function closePlayer() {
    setPlayerOpen(false);
    setIsPlaying(false);
  }

  function togglePlay() {
    setIsPlaying((playing) => !playing);
  }

  function playPrev() {
    const index = getTrackIndex(activeTrackId);
    if (index < 0) return;
    const prev = tracks[(index - 1 + tracks.length) % tracks.length];
    setActiveTrackId(prev.id);
    setIsPlaying(true);
  }

  function playNext() {
    const index = getTrackIndex(activeTrackId);
    if (index < 0) return;
    const next = tracks[(index + 1) % tracks.length];
    setActiveTrackId(next.id);
    setIsPlaying(true);
  }

  return (
    <div className="landing-page">
      <section className="hero" aria-label="Introduction">
        <div className="hero__stage" aria-hidden="true" />
        <div className="hero__content">
          <p className="hero__brand">Tuychibek</p>
          <h1 className="hero__headline">Sound shaped for clear nights.</h1>
          <p className="hero__support">
            A focused listening archive — open the library and step into the track.
          </p>
          <div className="hero__actions">
            <a className="hero__cta" href="#library">
              Listen
            </a>
            <Link className="hero__link" href="/about">
              About
            </Link>
          </div>
        </div>
      </section>

      <main>
        <TrackList
          tracks={tracks}
          activeTrackId={activeTrackId}
          isPlaying={isPlaying}
          playerOpen={playerOpen}
          onSelectTrack={selectTrack}
        />
      </main>

      <SiteFooter />

      <PlayerDrawer
        track={activeTrack}
        open={playerOpen}
        isPlaying={isPlaying}
        onClose={closePlayer}
        onTogglePlay={togglePlay}
        onPrev={playPrev}
        onNext={playNext}
      />
    </div>
  );
}

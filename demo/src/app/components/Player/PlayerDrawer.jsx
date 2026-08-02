"use client";

import { useEffect, useId } from "react";
import "./player.scss";
import { formatDuration } from "@/store/tracks";

export default function PlayerDrawer({
  track,
  open,
  isPlaying,
  onClose,
  onTogglePlay,
  onPrev,
  onNext,
}) {
  const titleId = useId();
  const hasAudio = Boolean(track?.audioSrc);

  useEffect(() => {
    if (!open) return undefined;

    const onKeyDown = (event) => {
      if (event.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKeyDown);
    document.body.classList.add("player-open");
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      document.body.classList.remove("player-open");
    };
  }, [open, onClose]);

  if (!track) return null;

  const progressPct = hasAudio ? 0 : 0;

  return (
    <>
      <button
        type="button"
        className={`player-scrim${open ? " is-open" : ""}`}
        aria-label="Close player"
        tabIndex={open ? 0 : -1}
        onClick={onClose}
      />

      <aside
        className={`player-drawer${open ? " is-open" : ""}`}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        aria-hidden={!open}
      >
        <div className="player-drawer__top">
          <p className="player-drawer__label">Now listening</p>
          <button
            type="button"
            className="player-drawer__close"
            aria-label="Close player"
            onClick={onClose}
          >
            <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
              <path
                d="M6 6l12 12M18 6L6 18"
                stroke="currentColor"
                strokeWidth="1.75"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>

        <div
          className="player-drawer__art-wrap"
          style={{ "--accent": track.accent }}
        >
          <div className="player-drawer__art-glow" aria-hidden="true" />
          <img
            className={`player-drawer__art${isPlaying ? " is-playing" : ""}`}
            src={track.cover}
            alt=""
            width={320}
            height={320}
          />
        </div>

        <div className="player-drawer__info">
          <h2 id={titleId} className="player-drawer__title">
            {track.title}
          </h2>
          <p className="player-drawer__artist">{track.artist}</p>
          <p className="player-drawer__album">{track.album}</p>
        </div>

        <div className="player-drawer__progress">
          <div
            className="player-drawer__seek"
            role="slider"
            aria-valuemin={0}
            aria-valuemax={track.durationSec}
            aria-valuenow={0}
            aria-label="Seek"
            aria-disabled={!hasAudio}
            tabIndex={hasAudio ? 0 : -1}
          >
            <div className="player-drawer__seek-track">
              <div
                className="player-drawer__seek-fill"
                style={{ width: `${progressPct}%` }}
              />
            </div>
          </div>
          <div className="player-drawer__times">
            <span>0:00</span>
            <span>{formatDuration(track.durationSec)}</span>
          </div>
          {!hasAudio && (
            <p className="player-drawer__notice">Preview unavailable</p>
          )}
        </div>

        <div className="player-drawer__transport">
          <button
            type="button"
            className="player-drawer__ctrl"
            aria-label="Previous track"
            onClick={onPrev}
          >
            <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true">
              <path d="M6 6v12M18 6.5v11L8 12l10-5.5Z" fill="currentColor" />
            </svg>
          </button>
          <button
            type="button"
            className="player-drawer__play"
            aria-label={isPlaying ? "Pause" : "Play"}
            onClick={onTogglePlay}
          >
            {isPlaying ? (
              <svg viewBox="0 0 24 24" width="26" height="26" aria-hidden="true">
                <path d="M7 5h3.5v14H7V5Zm6.5 0H17v14h-3.5V5Z" fill="currentColor" />
              </svg>
            ) : (
              <svg viewBox="0 0 24 24" width="26" height="26" aria-hidden="true">
                <path d="M8 5.5v13l11-6.5-11-6.5Z" fill="currentColor" />
              </svg>
            )}
          </button>
          <button
            type="button"
            className="player-drawer__ctrl"
            aria-label="Next track"
            onClick={onNext}
          >
            <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true">
              <path d="M18 6v12M6 6.5v11L16 12 6 6.5Z" fill="currentColor" />
            </svg>
          </button>
        </div>

        <div className="player-drawer__volume">
          <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
            <path
              d="M4 9.5v5h3.5L12 18V6L7.5 9.5H4Zm11.2 1.1a3.2 3.2 0 0 1 0 3.8"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <input
            type="range"
            className="player-drawer__volume-range"
            min={0}
            max={100}
            defaultValue={72}
            aria-label="Volume"
            disabled={!hasAudio}
          />
        </div>
      </aside>
    </>
  );
}

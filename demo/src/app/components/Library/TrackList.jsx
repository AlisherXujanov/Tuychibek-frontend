"use client";

import "./library.scss";
import TrackRow from "./TrackRow";
import { formatDuration } from "@/store/tracks";

export default function TrackList({
  tracks,
  activeTrackId,
  isPlaying,
  playerOpen,
  onSelectTrack,
}) {
  return (
    <section id="library" className="library" aria-labelledby="library-heading">
      <div className="library__intro">
        <p className="library__eyebrow">Catalog</p>
        <h2 id="library-heading" className="library__title">
          Library
        </h2>
        <p className="library__subtitle">
          Select a track to open the listening panel.
        </p>
      </div>

      <div className="library__table-wrap">
        <table className="library__table" aria-label="Track library">
          <thead>
            <tr>
              <th scope="col" className="library__th library__th--index">
                #
              </th>
              <th scope="col" className="library__th library__th--track">
                Title
              </th>
              <th scope="col" className="library__th library__th--album">
                Album
              </th>
              <th scope="col" className="library__th library__th--duration">
                <span className="visually-hidden">Duration</span>
                <svg viewBox="0 0 16 16" width="14" height="14" aria-hidden="true">
                  <circle cx="8" cy="8" r="6.25" fill="none" stroke="currentColor" strokeWidth="1.25" />
                  <path d="M8 4.5V8l2.25 1.5" fill="none" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" />
                </svg>
              </th>
            </tr>
          </thead>
          <tbody>
            {tracks.map((track, index) => (
              <TrackRow
                key={track.id}
                track={track}
                index={index + 1}
                duration={formatDuration(track.durationSec)}
                isActive={activeTrackId === track.id && playerOpen}
                isPlaying={activeTrackId === track.id && isPlaying}
                onSelect={() => onSelectTrack(track.id)}
              />
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

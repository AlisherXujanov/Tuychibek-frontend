"use client";

export default function TrackRow({
  track,
  index,
  duration,
  isActive,
  isPlaying,
  onSelect,
}) {
  return (
    <tr
      className={`track-row${isActive ? " is-active" : ""}${isPlaying ? " is-playing" : ""}`}
      tabIndex={0}
      aria-selected={isActive}
      onClick={onSelect}
      onKeyDown={(event) => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          onSelect();
        }
      }}
    >
      <td className="track-row__index">
        <span className="track-row__number">{index}</span>
        {isPlaying ? (
          <span className="track-row__eq" aria-hidden="true">
            <i />
            <i />
            <i />
          </span>
        ) : (
          <button
            type="button"
            className="track-row__play"
            aria-label={`Play ${track.title}`}
            onClick={(event) => {
              event.stopPropagation();
              onSelect();
            }}
          >
            <svg viewBox="0 0 24 24" width="14" height="14" aria-hidden="true">
              <path d="M8 5.5v13l11-6.5-11-6.5Z" fill="currentColor" />
            </svg>
          </button>
        )}
      </td>
      <td className="track-row__track">
        <img
          className="track-row__cover"
          src={track.cover}
          alt=""
          width={48}
          height={48}
        />
        <div className="track-row__meta">
          <span className="track-row__title">{track.title}</span>
          <span className="track-row__artist">{track.artist}</span>
        </div>
      </td>
      <td className="track-row__album">{track.album}</td>
      <td className="track-row__duration">{duration}</td>
    </tr>
  );
}

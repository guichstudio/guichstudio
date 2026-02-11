import { useRef, useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import type { Project } from '@/lib/cms';

export default function ProjectCard({ project }: { project: Project }) {
  const [isMobile, setIsMobile] = useState(false);
  const [hovered, setHovered] = useState(false); // desktop hover
  const [tappedOnce, setTappedOnce] = useState(false); // mobile tap state
  const [ready, setReady] = useState(false);
  const [muted, setMuted] = useState(true);

  const videoRef = useRef<HTMLVideoElement>(null);
  const hasVideo = !!project.video;

  /* Detect mobile */
  useEffect(() => {
    setIsMobile(window.innerWidth < 900);
  }, []);

  /* Desktop: hover plays video (muted) */
  const handleEnter = () => {
    if (!hasVideo || isMobile) return;

    setHovered(true);
    const v = videoRef.current;
    if (v && v.readyState >= 2) {
      v.muted = true;
      v.play().catch(() => {});
    }
  };

  const handleLeave = () => {
    if (!hasVideo) return;
    setHovered(false);
    stopVideo();
  };

  /* Mobile: first tap plays video with sound */
  const handleClick = (e: React.MouseEvent) => {
    if (!hasVideo || !isMobile) return;

    // First tap → play video with sound
    if (!tappedOnce) {
      e.preventDefault(); // block navigation
      setTappedOnce(true);
      setHovered(true);

      const v = videoRef.current;
      if (v) {
        v.muted = false; // 🔊 enable sound
        setMuted(false);
        v.play().catch(() => {});
      }
      return;
    }

    // Second tap → allow navigation
  };

  const stopVideo = () => {
    const v = videoRef.current;
    if (!v) return;
    v.pause();
    v.currentTime = 0;
  };

  const toggleSound = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    const v = videoRef.current;
    if (!v) return;

    const next = !muted;
    v.muted = next;
    setMuted(next);

    v.play().catch(() => {});
  };

  const showVideo = hovered && hasVideo;

  return (
    <Link
      href={`/work/${project.slug}`}
      className="group card overflow-hidden"
      onPointerEnter={handleEnter}
      onPointerLeave={handleLeave}
      onClick={handleClick}
    >
      <div className="relative aspect-[16/10]">
        {/* Thumbnail */}
        <Image
          src={project.thumb}
          alt={`${project.title} — ${project.role}`}
          fill
          className={`absolute inset-0 object-cover transition-opacity duration-300
            ${showVideo && ready ? 'opacity-0' : 'opacity-100'}`}
        />

        {/* Video */}
        {hasVideo && (
          <video
            ref={videoRef}
            playsInline
            loop
            muted={!isMobile}
            preload="metadata"
            onCanPlay={() => {
              setReady(true);
              if (showVideo) videoRef.current?.play().catch(() => {});
            }}
            className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-300
              ${showVideo && ready ? 'opacity-100' : 'opacity-0'}`}
          >
            <source src={project.video} type="video/mp4" />
          </video>
        )}

        {/* Sound toggle */}
        {showVideo && (
          <button
            aria-label={muted ? 'Unmute video' : 'Mute video'}
            onClick={toggleSound}
            className="absolute bottom-3 right-3 z-10 rounded-full border border-black/40 bg-white/50 px-3 py-1 text-xs backdrop-blur hover:bg-white/70"
          >
            <span aria-hidden="true">{muted ? '🔇' : '🔊'}</span>
          </button>
        )}
      </div>

      {/* Card info */}
      <div className="p-4">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold">{project.title}</h3>

          <div className="flex flex-wrap gap-2">
            {project.tags.map(tag => (
              <span
                key={tag}
                className="rounded-full border border-neutral-200 px-2 py-0.5 text-xs opacity-80"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        <p className="text-sm opacity-70">{project.role}</p>
      </div>
    </Link>
  );
}

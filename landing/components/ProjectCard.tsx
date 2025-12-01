// ANCIENNE VERSION

// import { useRef, useState, useEffect } from 'react';
// import Image from 'next/image';
// import Link from 'next/link';
// import type { Project } from '@/lib/cms';

// // État global pour gérer quelle carte est active
// let activeCardId: string | null = null;

// export default function ProjectCard({ project }: { project: Project }) {
//   const [hovered, setHovered] = useState(false);
//   const [ready, setReady] = useState(false);
//   const [muted, setMuted] = useState(true);
//   const videoRef = useRef<HTMLVideoElement>(null);

//   const showVideo = hovered && !!project.video;
//   const isActive = activeCardId === project.slug;

//   useEffect(() => {
//     const v = videoRef.current;
//     if (v) {
//       v.muted = true;
//       try {
//         v.load();
//       } catch {}
//     }
//   }, []);

//   const handleEnter = () => {
//     if (!project.video) return;
//     setHovered(true);
//     const v = videoRef.current;
//     if (!v) return;
//     const tryPlay = () => v.play().catch(() => {});
//     if (v.readyState >= 2) tryPlay();
//   };

//   const handleLeave = () => {
//     setHovered(false);
//     const v = videoRef.current;
//     if (!v) return;
//     v.pause();
//     v.currentTime = 0;
//   };

//   const handleTouch = () => {
//     if (!project.video) return;

//     // Arrêter toutes les autres vidéos
//     if (activeCardId && activeCardId !== project.slug) {
//       // Réinitialiser l'état de la carte précédemment active
//       const prevCard = document.querySelector(
//         `[data-card-id="${activeCardId}"]`
//       );
//       if (prevCard) {
//         const prevVideo = prevCard.querySelector('video');
//         if (prevVideo) {
//           prevVideo.pause();
//           prevVideo.currentTime = 0;
//         }
//       }
//     }

//     // Marquer cette carte comme active
//     activeCardId = project.slug;
//     setHovered(true);
//     const v = videoRef.current;
//     if (!v) return;
//     const tryPlay = () => v.play().catch(() => {});
//     if (v.readyState >= 2) tryPlay();
//   };

//   const toggleSound = (e: React.MouseEvent) => {
//     e.preventDefault();
//     e.stopPropagation();
//     const v = videoRef.current;
//     if (!v) return;
//     const next = !muted;
//     setMuted(next);
//     v.muted = next;
//     v.play().catch(() => {});
//   };

//   return (
//     <Link
//       href={`/work/${project.slug}`}
//       className="group card overflow-hidden"
//       data-card-id={project.slug}
//       onPointerEnter={handleEnter}
//       onPointerLeave={handleLeave}
//       onTouchStart={handleTouch}
//     >
//       <div className="relative aspect-[16/10]">
//         {/* Image de base */}
//         <Image
//           src={project.thumb}
//           alt={project.title}
//           fill
//           className={`absolute inset-0 object-cover transition-opacity duration-300
//             ${showVideo && ready ? 'opacity-0' : 'opacity-100'}`}
//           priority={false}
//         />

//         {/* Vidéo */}
//         {project.video && (
//           <video
//             ref={videoRef}
//             muted
//             playsInline
//             loop
//             preload="metadata"
//             onCanPlay={() => {
//               setReady(true);
//               if (hovered) videoRef.current?.play().catch(() => {});
//             }}
//             className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-300
//               ${showVideo && ready ? 'opacity-100' : 'opacity-0'}`}
//           >
//             <source src={project.video} type="video/mp4" />
//           </video>
//         )}

//         {/* Bouton son */}
//         {project.video && showVideo && (
//           <button
//             aria-label={muted ? 'Activer le son' : 'Couper le son'}
//             onClick={toggleSound}
//             className="absolute bottom-3 right-3 z-10 rounded-full border border-black/40 bg-white/50 px-3 py-1 text-xs backdrop-blur hover:bg-white/70"
//           >
//             {muted ? '🔇' : '🔊'}
//           </button>
//         )}
//       </div>

//       <div className="p-4">
//         <div className="flex items-center justify-between">
//           <h3 className="text-lg font-semibold">{project.title}</h3>
//           <div className="flex flex-wrap gap-2">
//             {project.tags.map(t => (
//               <span
//                 key={t}
//                 className="rounded-full border border-neutral-200 px-2 py-0.5 text-xs opacity-80"
//               >
//                 {t}
//               </span>
//             ))}
//           </div>
//         </div>
//         <p className="text-sm opacity-70">{project.role}</p>
//       </div>
//     </Link>
//   );
// }
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

  /* Detect mobile once */
  useEffect(() => {
    setIsMobile(window.innerWidth < 900);
  }, []);

  /* DESKTOP : hover plays video (muted) */
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

  /* MOBILE : first tap plays video WITH sound */
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
        {/* IMAGE */}
        <Image
          src={project.thumb}
          alt={project.title}
          fill
          className={`absolute inset-0 object-cover transition-opacity duration-300
            ${showVideo && ready ? 'opacity-0' : 'opacity-100'}`}
        />

        {/* VIDEO */}
        {hasVideo && (
          <video
            ref={videoRef}
            playsInline
            loop
            muted={isMobile ? false : true} // desktop = muted, mobile = unmuted on tap
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

        {/* SOUND BUTTON */}
        {showVideo && (
          <button
            onClick={toggleSound}
            className="absolute bottom-3 right-3 z-10 rounded-full border border-black/40 bg-white/50 px-3 py-1 text-xs backdrop-blur hover:bg-white/70"
          >
            {muted ? '🔇' : '🔊'}
          </button>
        )}
      </div>

      {/* TEXT AREA */}
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

import Head from 'next/head';
import TextSphere from '@/components/TextSphere';

const MISSION_LINES = [
  'Visual experience studio for brands, founders and product leaders in Web3 and live events.',
  'We move fast, work with full autonomy, and deliver high-quality brands and products that stay ahead.',
  'Enhanced by deep Web3 expertise, applied AI, and structured yet flexible processes.',
  'From installations and projection mapping to films and creative direction, anywhere in the world.',
];

export default function SphereDemo() {
  return (
    <>
      <Head>
        <title>3D Text Sphere — BuildLore</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className="min-h-screen flex flex-col items-center justify-center bg-neutral-100 px-4 py-16">
        <TextSphere
          text={MISSION_LINES.join(' ')}
          lines={MISSION_LINES}
          radius={260}
          fontSize={32}
          spin={-14}
          tiltX={-12}
          tiltZ={-8}
        />
        <p className="mt-10 text-neutral-500 text-sm tracking-wide">
          Move left / right to scroll the text around the sphere.
        </p>
      </main>
    </>
  );
}

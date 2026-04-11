import Head from 'next/head';
import TextSphere from '@/components/TextSphere';

export default function SphereDemo() {
  return (
    <>
      <Head>
        <title>3D Text Sphere — BuildLore</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className="min-h-screen flex flex-col items-center justify-center bg-neutral-100 px-4 py-16">
        <TextSphere />
        <p className="mt-10 text-neutral-500 text-sm tracking-wide">
          Move your cursor to rotate the sphere.
        </p>
      </main>
    </>
  );
}

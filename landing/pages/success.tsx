import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import { generateNextSeo } from 'next-seo/pages';

export default function Success() {
  const router = useRouter();
  const [sessionId, setSessionId] = useState<string | null>(null);

  useEffect(() => {
    if (router.query.session_id) {
      setSessionId(router.query.session_id as string);
    }
  }, [router.query.session_id]);

  return (
    <div className="container-gs py-16 text-center">
      <Head>
        {generateNextSeo({
          title: 'Payment Successful',
          noindex: true,
          nofollow: true,
        })}
      </Head>
      <h1 className="text-4xl font-bold text-black mb-4">
        Payment Successful!
      </h1>
      <p className="text-neutral-600 mb-8">
        Thank you for your purchase. You will receive a confirmation email
        shortly.
      </p>
      {sessionId && (
        <p className="text-sm text-neutral-500">Session ID: {sessionId}</p>
      )}
    </div>
  );
}

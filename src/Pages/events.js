import Head from "next/head";

export default function Events() {
  return (
    <div className="min-h-screen bg-blue-50 text-blue-900">
      <Head>
        <title>Events | Samruddha Bharat</title>
      </Head>
      <main className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-4">Upcoming & Past Events</h1>
        <p>Stay updated with our campaign events and community gatherings.</p>
      </main>
    </div>
  );
}


import Head from "next/head";

export default function About() {
  return (
    <div className="min-h-screen bg-blue-50 text-blue-900">
      <Head>
        <title>About | Samruddha Bharat</title>
      </Head>
      <main className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-4">About the Campaign</h1>
        <p>
          Samruddha Bharat is committed to equitable growth, sustainability, and community empowerment.
        </p>
      </main>
    </div>
  );
}

import Head from "next/head";
import Link from "next/link";
import "./styles/global.css";
import "./styles/home.css";

export default function Legal() {
  return (
    <div className="min-h-screen bg-blue-50 text-blue-900">
      <Head>
        <title>Legal | Link India</title>
        <meta name="description" content="Legal information for Link India." />
      </Head>
      <header className="bg-blue-900 text-white shadow-md header-enhanced">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <Link href="/">
              <h1 className="text-xl font-bold cursor-pointer">Link India</h1>
            </Link>
          </div>
        </div>
      </header>
      <main className="container mx-auto px-4 py-16">
        <h2 className="text-4xl font-extrabold text-blue-900 mb-10 section-title text-center">
          Legal
        </h2>
        <div className="bg-white rounded-2xl shadow-lg p-8 max-w-2xl mx-auto text-blue-800 enhanced-text">
          <p>This page will contain legal information, terms of use, privacy policy, and other relevant legal content for Link India.</p>
        </div>
      </main>
    </div>
  );
} 
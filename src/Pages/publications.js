/* eslint-disable @next/next/no-img-element */
// pages/publications.js

import { useState } from "react";
import Head from "next/head";
import Link from "next/link";
import "./styles/global.css";
import "./styles/home.css";

export default function Publications() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Sample publications data
  const publications = [
    {
      id: 1,
      title: "The Powerful Dewans of Dogra Kingdom, Chancing Upon a Heritage and Discovering Answers to Historic Questions on Kashmir",
      author: "Venus Upadhayaya",
      date: "March 2, 2024",
      category: "Culture",
      description: "In 2017 I received an email from a leadership trainer and reformer of school ecosystems. My good friend whom I also consider a mentor, Sandeep Dutt ji was told about...",
      banner: "Eventually Got Kashmir to Maharaja Gulab Singh",
      downloadLink: "PDF",
      image: "/images/publication-1.jpg"
    },
    {
      id: 2,
      title: "UK-India Trade Relations: A Comprehensive Analysis",
      author: "Dr. Sarah Johnson",
      date: "December 2023",
      category: "Trade Policy",
      description: "An in-depth analysis of bilateral trade relations between the UK and India, examining current trends and future opportunities.",
      banner: "Economic Cooperation",
      downloadLink: "PDF",
      image: "/images/publication-2.jpg"
    },
    {
      id: 3,
      title: "Digital Transformation in UK-India Partnership",
      author: "Prof. Rajesh Kumar",
      date: "November 2023",
      category: "Technology",
      description: "Exploring the role of digital technologies in strengthening the UK-India partnership across various sectors.",
      banner: "Digital Innovation",
      downloadLink: "PDF",
      image: "/images/publication-3.jpg"
    },
    {
      id: 4,
      title: "Education Exchange Programs: Building Future Leaders",
      author: "Dr. Emily Chen",
      date: "October 2023",
      category: "Education",
      description: "A comprehensive study on educational collaboration between UK and Indian institutions.",
      banner: "Academic Excellence",
      downloadLink: "PDF",
      image: "/images/publication-4.jpg"
    },
    {
      id: 5,
      title: "Sustainable Development Goals: UK-India Cooperation",
      author: "Dr. Amit Patel",
      date: "September 2023",
      category: "Sustainability",
      description: "Examining collaborative efforts between UK and India in achieving sustainable development goals.",
      banner: "Green Partnership",
      downloadLink: "PDF",
      image: "/images/publication-5.jpg"
    },
    {
      id: 6,
      title: "Cultural Diplomacy: Strengthening UK-India Relations",
      author: "Dr. Priya Sharma",
      date: "August 2023",
      category: "Culture",
      description: "Exploring the role of cultural exchange in fostering deeper understanding between the UK and India.",
      banner: "Cultural Bridge",
      downloadLink: "PDF",
      image: "/images/publication-6.jpg"
    }
  ];

  const categories = ["All", "Culture", "Trade Policy", "Technology", "Education", "Sustainability"];

  return (
    <div className="min-h-screen bg-blue-50 text-blue-900">
      <Head>
        <title>Publications - Link India</title>
        <meta
          name="description"
          content="Research publications and policy papers from Link India"
        />
      </Head>

      <header className="bg-blue-900 text-white shadow-md header-enhanced">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          {/* Left Section: Burger + Logo */}
          <div className="flex items-center space-x-4">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="focus:outline-none burger-button"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 6h18M3 12h18M3 18h18"
                />
              </svg>
            </button>
            <Link href="/" className="text-xl font-bold">Link India</Link>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div
            className="fixed inset-0 z-40 bg-black bg-opacity-30"
            onClick={() => setIsMenuOpen(false)}
          ></div>
        )}

        {/* Sidebar Menu */}
        <div
          className={`fixed top-0 left-0 h-full w-64 shadow-lg z-50 transform transition-transform duration-300 ease-in-out sidebar-menu ${
            isMenuOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="p-6">
            <h2 className="text-xl font-bold text-blue-900 mb-6">Menu</h2>
            <nav className="flex flex-col space-y-4 text-blue-800">
              <Link
                href="/"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/publications"
                onClick={() => setIsMenuOpen(false)}
              >
                Publications
              </Link>
              <Link
                href="/profileTrustees"
                onClick={() => setIsMenuOpen(false)}
              >
                Profiles of the trustees
              </Link>
              <Link href="/legal" onClick={() => setIsMenuOpen(false)}>
                Legal
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <main className="bg-blue-900 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">Publications</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Research-driven insights and policy recommendations for UK-India relations
          </p>
        </div>
      </main>

      {/* Publications Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          {/* Filter Categories */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-blue-900 mb-4">Filter by Category</h2>
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  className="px-4 py-2 bg-blue-100 text-blue-800 rounded-lg hover:bg-blue-200 transition-colors"
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

                     {/* Publications Grid */}
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
             {publications.map((publication) => (
               <div key={publication.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                 {/* Image */}
                 <div className="h-48 bg-gray-200 overflow-hidden">
                   <img
                     src={publication.image}
                     alt={publication.title}
                     className="w-full h-full object-cover"
                     onError={(e) => {
                       e.target.style.display = 'none';
                       e.target.nextSibling.style.display = 'flex';
                     }}
                   />
                   <div className="w-full h-full flex items-center justify-center text-gray-500" style={{display: 'none'}}>
                     <div className="text-center">
                       <svg className="w-16 h-16 mx-auto mb-2" fill="currentColor" viewBox="0 0 20 20">
                         <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
                       </svg>
                       <p className="text-sm">Publication Image</p>
                     </div>
                   </div>
                 </div>
                 
                 {/* Banner */}
                 <div className="bg-blue-900 text-white py-2 px-4">
                   <p className="text-sm font-medium">{publication.banner}</p>
                 </div>
                 
                 {/* Content */}
                 <div className="p-6">
                   {/* Title */}
                   <h3 className="text-xl font-bold text-black mb-3 line-clamp-2">
                     {publication.title}
                   </h3>
                   
                   {/* Description */}
                   <p className="text-gray-700 mb-4 leading-relaxed text-sm line-clamp-3">
                     {publication.description}
                   </p>
                   
                   {/* Category Tag */}
                   <div className="mb-4">
                     <span className="inline-block border border-green-500 text-green-700 px-3 py-1 rounded text-sm">
                       {publication.category}
                     </span>
                   </div>
                   
                   {/* Metadata Section */}
                   <div className="space-y-2 text-sm">
                     <div className="flex items-center">
                       <span className="text-black font-medium mr-2">Author:</span>
                       <span className="text-orange-600 truncate">{publication.author}</span>
                     </div>
                     <div className="flex items-center">
                       <span className="text-black font-medium mr-2">Date:</span>
                       <span className="text-orange-600">{publication.date}</span>
                     </div>
                     <div className="flex items-center">
                       <span className="text-black font-medium mr-2">Download:</span>
                       <a href="#" className="text-orange-600 hover:underline">
                         {publication.downloadLink}
                       </a>
                     </div>
                   </div>
                 </div>
               </div>
             ))}
           </div>

          {/* Load More Button */}
          <div className="text-center mt-12">
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors">
              Load More Publications
            </button>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-blue-900 mb-4">
            Contribute to Our Research
          </h2>
          <p className="text-lg text-blue-800 mb-8 max-w-2xl mx-auto">
            Are you a researcher or policy expert interested in UK-India relations? 
            We welcome contributions to our publications.
          </p>
          <Link
            href="#join"
            className="inline-block bg-blue-600 text-white py-3 px-8 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Submit Your Research
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer
        className="bg-white text-black py-8 footer-enhanced"
        style={{ backgroundImage: "url('/images/footer-bg.png')" }}
      >
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
          <div>
            <h4 className="text-lg font-semibold mb-2">Quick Links</h4>
            <ul className="space-y-1">
              <li>
                <Link href="/" className="hover:underline">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/publications" className="hover:underline">
                  Publications
                </Link>
              </li>
              <li>
                <Link href="/events" className="hover:underline">
                  Events
                </Link>
              </li>
              <li>
                <Link href="/media" className="hover:underline">
                  Media Coverage
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-2">Address</h4>
            <p>
              Regd. Office: #32, First Floor,
              <br />
              Sarakki Main Road, J.P. Nagar,
              <br />
              Bengaluru 560078,
              <br />
              Karnataka, India
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-2">Contact Us</h4>
            <p>Contact No. - +91 9910929609</p>
            <p>
              Email -{" "}
              <a href="mailto:contact@samruddhabharat.in" className="underline">
                contact@samruddhabharat.in
              </a>
            </p>
            <p className="mt-2">Follow Us</p>
          </div>
        </div>
        <div className="text-center mt-6">
          &copy; {new Date().getFullYear()} Link India. All rights reserved.
        </div>
      </footer>
    </div>
  );
} 
/* eslint-disable @next/next/no-img-element */
// pages/index.js

import { useState } from "react";
import Head from "next/head";
import Link from "next/link";
import "./styles/global.css";
import "./styles/home.css";

export default function Home() {
  // Inside your Home component
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-blue-50 text-blue-900">
      <Head>
        <title>Link India</title>
        <meta
          name="description"
          content="Link India: Policy, People, Progress"
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
              {/* New Hamburger Icon */}
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
            <h1 className="text-xl font-bold">Link India</h1>
          </div>
        </div>

        {/* Mobile Menu */}
        {/* Sidebar Overlay */}
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
      <main
        className="container mx-auto px-4 py-16 text-center bg-cover bg-center main-home-section hero-section"
        style={{ backgroundImage: "url('/images/home-1.jpg')" }}
      >
        <div className="hero-content">
          <h2 className="text-8xl font-bold mb-4 text-white hero-text hero-title">
            Link India
          </h2>
          <p className="text-lg max-w-2xl mx-auto mb-8 text-white hero-subtitle">
            Bridging Ideas, Informing Action
          </p>
          <Link
            href="#join"
            className="inline-block bg-blue-600 text-white py-2 px-6 rounded-lg hover:bg-blue-800 transition get-involved cta-button"
          >
            Get Involved
          </Link>
        </div>
      </main>

      {/* About Section */}
      <section id="about" className="bg-white py-16 section-enhanced">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center md:items-start gap-10">
          {/* Left - Text */}
          <div className="md:w-1/2">
            <h3 className="text-4xl font-extrabold text-blue-900 mb-6 section-title">
              About Link India
            </h3>
            <div className="text-blue-800 space-y-4 enhanced-text">
              <p>
                Link India is a London-based policy think tank dedicated to
                strengthening economic and cultural relations between the United
                Kingdom and India. We work to shape a shared policy consensus on
                key areas of bilateral cooperation, particularly in trade,
                investment, and people-to-people engagement.
              </p>
              <p>
                Through structured dialogues, research-driven analysis, and
                stakeholder consultations, Link India provides actionable policy
                insights and strategic recommendations to both governments and
                the private sector. Our mission is to deepen mutual
                understanding and foster long-term partnerships that reflect the
                evolving priorities of both nations.
              </p>
              <p>
                As a non-partisan institution, Link India maintains complete
                intellectual and analytical independence in all its work.
              </p>
            </div>
          </div>

          {/* Right - Image */}
          <div className="md:w-100 md:ml-40">
            <img
              src="/images/sam-logo.png" // Replace with your actual image path
              alt="About Link India"
              className="rounded-lg shadow-lg w-full h-96 object-cover"
            />
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section id="vision" className="bg-blue-900 py-32 text-center section-enhanced">
        <div className="container mx-auto px-4">
          <h3 className="text-4xl font-extrabold text-white mb-4 section-title">VISION</h3>
          <p className="text-white text-lg max-w-3xl mx-auto enhanced-text">
            <i>
              To support evidence-based policymaking that deepens UK–India
              cooperation across economic, educational, and cultural domains.
            </i>
          </p>
        </div>
      </section>

      {/* Purpose Section */}
      <section className="bg-gray-50 py-20 section-enhanced">
        <div className="container mx-auto px-6 md:px-12 lg:px-20">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-4xl font-extrabold text-blue-900 mb-6 section-title">
              Purpose
            </h3>
            <div className="text-blue-800 text-lg space-y-6 leading-relaxed enhanced-text">
              <p>
                To generate evidence-based insights and policy recommendations
                that advance economic cooperation.
              </p>
              <p>
                We do this by producing policy briefs, white papers, and reports
                on UK–India trade, investment, migration, education, and
                cultural diplomacy. These are disseminated through policy
                roundtables with government officials, business leaders,
                academics, and civil society.
              </p>
              <p>
                We aim to organize UK–India strategic forums focused on sectors
                like tech, education, and sustainability. We are keen on
                building a UK–India Young Policy Leaders Network to engage
                emerging thinkers. Finally, we will convene diaspora town halls
                or stakeholder consultations for policy feedback.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="join" className="bg-blue-800 text-white py-16 section-enhanced">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-4xl font-extrabold text-white mb-6 section-title">Join Us</h3>
          <p className="max-w-2xl mx-auto mb-8 enhanced-text">
            Sign up to receive email updates on our initiatives, programs, and
            special announcements.
          </p>
          <form className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 text-black form-enhanced">
            <input
              type="text"
              placeholder="Name"
              className="w-full p-2 rounded bg-white text-black"
            />
            <input
              type="text"
              placeholder="Contact"
              className="w-full p-2 rounded bg-white text-black"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full p-2 rounded bg-white text-black"
            />
            <input
              type="text"
              placeholder="Zip"
              className="w-full p-2 rounded bg-white text-black"
            />
            <textarea
              placeholder="Leave a comment here"
              className="w-full p-2 rounded col-span-1 bg-white text-black md:col-span-2"
              rows="4"
            ></textarea>
            <div className="col-span-1 md:col-span-2 flex justify-center gap-4 text-white radio-group">
              <label className="radio-item">
                <input type="radio" name="role" className="mr-1" /> Volunteer
              </label>
              <label className="radio-item">
                <input type="radio" name="role" className="mr-1" /> Intern
              </label>
              <label className="radio-item">
                <input type="radio" name="role" className="mr-1" /> Contribute
              </label>
              <label className="radio-item">
                <input type="radio" name="role" className="mr-1" /> Suggest
              </label>
            </div>
            <div className="col-span-1 md:col-span-2 flex justify-center">
              <button
                type="submit"
                className="bg-white text-blue-800 font-semibold px-6 py-2 rounded hover:bg-gray-100"
              >
                Submit
              </button>
            </div>
          </form>
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
                <Link href="/about" className="hover:underline">
                  About Us
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
              <li>
                <Link href="/join-us" className="hover:underline">
                  Join Us
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
        
        {/* Charity Information */}
        <div className="mt-8 pt-6 border-t border-gray-200">
          <div className="text-center">
            <div className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-full shadow-lg transform hover:scale-105 transition-all duration-300">
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" clipRule="evenodd" />
              </svg>
              <span className="font-semibold text-sm">
                Link India is a Charitable Incorporated Organisation with charity number 1183696
              </span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

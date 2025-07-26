import Head from "next/head";
import Link from "next/link";
import "./styles/global.css";
import "./styles/home.css";

const trustees = [
  {
    name: "Khalid Sofi",
    titles: [
      "Trustee, Link India",
      "Partner, Lee Bolton Monier Williams LLP"
    ],
    image: "/images/Trustees-1.png", // Replace with actual trustee image if available
    bio: `Khalid Sofi is a solicitor, partner and head of charity & not-for-profit at Lee Bolton Monier-Williams LLP (London based law firm) He is well known and highly regarded for his expertise and advises charity and not-for-profit organisations nationally and internationally. He also advises governments on developing and improving regulatory framework for charity and not-for-profit sector. He is ranked as a Leading partner for Charities and Not-for-profit by Legal 500.`
  },
  {
    name: "Ashwin Kumaraswami",
    titles: [
      "Trustee, Link India",
      "Investment Director at Mercia Asset Management"
    ],
    image: "/images/Trustees-2.png", // Replace with actual trustee image if available
    bio: `Ashwin is an accomplished investor and Investment Director at Mercia Asset Management, where he leads early-stage investments in deep-tech, hard-tech, and emerging technologies. With over 15 years of experience in venture capital, he has held board roles across numerous UK tech companies, including Mindtrace and Mindtech Global. Formerly a semiconductor entrepreneur, Ashwin has a strong track record in commercialising university IP and scaling high-growth startups. He currently serves as a director for several companies, focusing on transformative innovations in AI, biotech, IoT, and software. His strategic guidance has helped shape the UK’s deep-tech venture ecosystem.`
  },
  {
    name: "Supriyo Chaudhuri",
    titles: [
      "Trustee, Link India",
      "CEO of e1133 Learning Systems"
    ],
    image: "/images/Trustees-3.png", // Replace with actual trustee image if available
    bio: `Supriyo Chaudhri is a UK-based education entrepreneur and CEO of e1133 Learning Systems, with over 30 years of experience in workforce education across higher and professional sectors. He co-founded UAspire and led strategic education programmes at Knod and ATMC Group, partnering with industry giants like IBM, GE, Oracle, ACCA, and Grant Thornton. He has built and scaled transnational education ventures across Asia, the Middle East, and the UK. Serving as director of multiple UK education and tech ventures, Supriyo is also a Fellow of the Royal Society of Arts (FRSA).`
  }
];

export default function ProfileTrustees() {
  return (
    <div className="min-h-screen bg-blue-50 text-blue-900">
      <Head>
        <title>Profiles of the Trustees | Link India</title>
        <meta name="description" content="Meet the trustees of Link India." />
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
          Profiles of the Trustees
        </h2>
        <div className="flex flex-col gap-10">
          {trustees.map((trustee, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl shadow-lg p-8 flex flex-col md:flex-row items-center md:items-start text-left transition-transform hover:scale-[1.01] trustee-card"
            >
              <img
                src={trustee.image}
                alt={trustee.name}
                className="w-32 h-32 object-cover rounded-full mb-6 md:mb-0 md:mr-8 border-4 border-blue-200 shadow"
              />
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-blue-900 mb-2">
                  {trustee.name}
                </h3>
                {trustee.titles.map((title, i) => (
                  <p key={i} className="text-blue-600 font-semibold mb-1">
                    {title}
                  </p>
                ))}
                <p className="text-blue-800 enhanced-text mt-3">{trustee.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
} 
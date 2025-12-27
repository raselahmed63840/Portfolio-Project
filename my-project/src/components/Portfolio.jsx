import { useState } from "react";
import Project2 from "../photo/project/Project 2.png";
import Project3 from "../photo/project/Project 3.png";
import Project4 from "../photo/project/Project 4.png";
import Project5 from "../photo/project/Project 5.png";
import Project6 from "../photo/project/Project 6.png";
import Project7 from "../photo/project/Project 7.png";

const projects = [
  {
    title: "Project 1",
    image: Project2, // Tomato food ordering UI screenshot
    preview:
      "A modern food ordering web app with category-based menu browsing, top dishes, and mobile app promotion.",
    desc: (
      <div>
        <p className="text-gray-300">
          <strong className="text-orange-400">Tomato</strong> is a clean and
          modern food ordering web application designed to help users quickly
          discover, browse, and order their favorite meals. The UI focuses on
          simplicity, food imagery, and easy navigation for a smooth ordering
          experience.
        </p>

        <h4 className="mt-4 font-semibold text-orange-400">🍔 Key Features</h4>
        <ul className="list-disc list-inside text-gray-300 space-y-1">
          <li>
            Attractive hero section with food imagery and a clear “View Menu”
            call-to-action.
          </li>
          <li>
            Category-based menu browsing (Salad, Rolls, Desserts, Sandwich,
            Pasta, Noodles, etc.).
          </li>
          <li>“Top dishes near you” section with ratings and pricing.</li>
          <li>
            Card-based food layout with images, price tags, and add-to-cart
            icons.
          </li>
          <li>
            Fully responsive grid system for desktop, tablet, and mobile
            devices.
          </li>
          <li>App download promotion section for Android and iOS users.</li>
          <li>Footer with company info, quick links, and contact details.</li>
        </ul>

        <h4 className="mt-4 font-semibold text-orange-400">
          🎨 UI / UX Highlights
        </h4>
        <ul className="list-disc list-inside text-gray-300 space-y-1">
          <li>
            Bright orange color theme that matches food delivery branding.
          </li>
          <li>Large, high-quality food images to enhance visual appeal.</li>
          <li>Simple typography and spacing for easy readability.</li>
          <li>Intuitive navigation focused on fast food discovery.</li>
        </ul>

        <h4 className="mt-4 font-semibold text-orange-400">🛠️ Tech Stack</h4>
        <ul className="list-disc list-inside text-gray-300 space-y-1">
          <li>React.js for building reusable UI components.</li>
          <li>Tailwind CSS for responsive design and modern styling.</li>
          <li>Dynamic rendering of food items using JSON-based data.</li>
        </ul>

        <h4 className="mt-4 font-semibold text-orange-400">
          🎯 Purpose & Impact
        </h4>
        <p className="text-gray-300">
          This project showcases a real-world food delivery interface focusing
          on user experience, clean layout, and conversion-driven design. It is
          ideal for demonstrating frontend skills in eCommerce-style
          applications and modern UI development.
        </p>
      </div>
    ),
    live: "https://your-tomato-app-preview-link.com", // replace with live link
  },

  {
    title: "Project 2",
    image: Project3, // Estate real estate UI screenshot
    preview:
      "A modern real estate website showcasing dream homes, completed projects, testimonials, and contact inquiry.",
    desc: (
      <div>
        <p className="text-gray-300">
          <strong className="text-blue-400">Estate</strong> is a modern and
          professional real estate website designed to help users explore homes
          that match their lifestyle and budget. The platform focuses on
          clarity, trust, and visual storytelling to highlight premium
          properties.
        </p>

        <h4 className="mt-4 font-semibold text-blue-400">🏡 Key Features</h4>
        <ul className="list-disc list-inside text-gray-300 space-y-1">
          <li>
            Hero section with full-width property image and strong value-driven
            headline.
          </li>
          <li>
            About brand section with company achievements and experience
            metrics.
          </li>
          <li>
            Projects showcase displaying completed properties with location and
            pricing.
          </li>
          <li>
            Smooth slider navigation for browsing multiple real estate projects.
          </li>
          <li>Customer testimonials section to build trust and credibility.</li>
          <li>Clean and simple contact form for property inquiries.</li>
          <li>
            Responsive navigation with sign-up and call-to-action buttons.
          </li>
        </ul>

        <h4 className="mt-4 font-semibold text-blue-400">
          🎨 UI / UX Highlights
        </h4>
        <ul className="list-disc list-inside text-gray-300 space-y-1">
          <li>
            Minimal and professional color palette suitable for real estate
            brands.
          </li>
          <li>Large property images to enhance visual trust and appeal.</li>
          <li>Well-structured sections with balanced whitespace.</li>
          <li>Clear typography for easy reading and decision-making.</li>
        </ul>

        <h4 className="mt-4 font-semibold text-blue-400">🛠️ Tech Stack</h4>
        <ul className="list-disc list-inside text-gray-300 space-y-1">
          <li>React.js for reusable and scalable UI components.</li>
          <li>Tailwind CSS for responsive layouts and modern styling.</li>
          <li>Slider/carousel integration for project navigation.</li>
        </ul>

        <h4 className="mt-4 font-semibold text-blue-400">
          🎯 Purpose & Impact
        </h4>
        <p className="text-gray-300">
          This project demonstrates how a real estate business can effectively
          present properties online using clean UI, structured content, and
          trust-building elements. It highlights frontend skills in layout
          design, responsive development, and user-focused interfaces.
        </p>
      </div>
    ),
    live: "https://your-estate-preview-link.com", // replace with live link
  },

  {
    title: "Project 3",
    image: Project4,
    preview:
      "Business website for Alniah Solutions with service highlights, client testimonials, and lead generation features.",
    desc: (
      <div>
        <p>
          <strong>Alniah Solutions</strong> is a full-service business website
          designed for a digital marketing and development agency. The layout is
          crafted to attract clients, showcase services, and convert visitors
          through strategic content and calls to action.
        </p>
        <h4 className="mt-4 font-semibold text-purple-300">🚀 Key Features</h4>
        <ul className="list-disc list-inside text-gray-300 space-y-1">
          <li>
            Hero section with bold messaging and a “Book a Free Consultation”
            CTA.
          </li>
          <li>
            Challenge-based storytelling to connect with entrepreneurs’ pain
            points.
          </li>
          <li>
            Service breakdown with icons and descriptions for lead generation,
            automation, and content creation.
          </li>
          <li>
            Interactive service cards for Web Development, SEO, Branding, and
            more.
          </li>
          <li>
            Client testimonials and embedded video reviews for credibility.
          </li>
          <li>
            FAQ section to address common concerns and improve conversion.
          </li>
        </ul>
        <h4 className="mt-4 font-semibold text-purple-300">🛠️ Tech Stack</h4>
        <ul className="list-disc list-inside text-gray-300 space-y-1">
          <li>React.js for modular, scalable frontend architecture.</li>
          <li>TailwindCSS for responsive, utility-first styling.</li>
          <li>Custom animations and iconography for brand consistency.</li>
        </ul>
        <h4 className="mt-4 font-semibold text-purple-300">
          🎯 Purpose & Impact
        </h4>
        <p className="text-gray-300">
          This project demonstrates how a business website can be both
          informative and conversion-driven. By combining clear messaging,
          strategic layout, and client validation, it helps Alniah Solutions
          build trust and generate leads around the clock.
        </p>
      </div>
    ),
    live: "https://your-alniah-preview-link.com", // Replace with actual live link
  },
  {
    title: "Project 4",
    image: Project5,
    preview:
      "Stylish eCommerce site for fashion accessories with category filtering, combo offers, and brand storytelling.",
    desc: (
      <div>
        <p>
          <strong>TASA</strong> is a fashion-forward eCommerce website built to
          showcase premium accessories like belts, wallets, and bags. Designed
          with a clean layout and bold visuals, this project blends product
          discovery with brand storytelling to create a compelling shopping
          experience.
        </p>
        <h4 className="mt-4 font-semibold text-purple-300">👜 Key Features</h4>
        <ul className="list-disc list-inside text-gray-300 space-y-1">
          <li>
            Promotional banners with discount highlights and brand identity
            messaging.
          </li>
          <li>
            Category-based filtering for belts, wallets, bags, and fashion
            segments.
          </li>
          <li>
            Combo offer sections to boost sales and encourage bundled purchases.
          </li>
          <li>
            Product cards with images, pricing, and quick access to details.
          </li>
          <li>
            Brand story section with lifestyle photography and expressive
            copywriting.
          </li>
          <li>
            Latest articles and icons for quality, warranty, and sustainability
            messaging.
          </li>
        </ul>
        <h4 className="mt-4 font-semibold text-purple-300">🛠️ Tech Stack</h4>
        <ul className="list-disc list-inside text-gray-300 space-y-1">
          <li>
            React.js for dynamic product rendering and modular components.
          </li>
          <li>TailwindCSS for responsive styling and clean layout control.</li>
          <li>
            Custom image grids and promotional sections for visual impact.
          </li>
        </ul>
        <h4 className="mt-4 font-semibold text-purple-300">
          🎯 Purpose & Impact
        </h4>
        <p className="text-gray-300">
          This project demonstrates how a fashion brand can elevate its online
          presence through curated design, intuitive navigation, and
          storytelling. It’s built to convert casual browsers into confident
          buyers while reinforcing brand values like quality and individuality.
        </p>
      </div>
    ),
    live: "https://your-tasa-preview-link.com", // Replace with actual live link
  },
  {
    title: "Project 5",
    image: Project6,
    preview:
      "Organic skincare eCommerce site with product discounts, blog content, and category-based shopping experience.",
    desc: (
      <div>
        <p>
          <strong>NutriPure</strong> is a vibrant eCommerce platform focused on
          organic skincare and beauty products. Designed with a clean layout and
          a bold purple aesthetic, this project blends product discovery,
          promotional offers, and educational content to create a holistic
          shopping experience.
        </p>
        <h4 className="mt-4 font-semibold text-purple-300">🌿 Key Features</h4>
        <ul className="list-disc list-inside text-gray-300 space-y-1">
          <li>
            Hero banner with seasonal messaging and a clear “Shop Now”
            call-to-action.
          </li>
          <li>
            “Today’s Sale” section with dynamic discounts and price comparisons.
          </li>
          <li>
            Weekly featured products to highlight bestsellers and customer
            favorites.
          </li>
          <li>
            Category-based navigation for skincare, haircare, weight loss, and
            Ayurveda.
          </li>
          <li>
            Blog section with Bengali-language articles on beauty tips and
            routines.
          </li>
          <li>
            Footer with quick links, payment options, and customer support
            details.
          </li>
        </ul>
        <h4 className="mt-4 font-semibold text-purple-300">🛠️ Tech Stack</h4>
        <ul className="list-disc list-inside text-gray-300 space-y-1">
          <li>
            React.js for dynamic product rendering and modular components.
          </li>
          <li>TailwindCSS for responsive styling and clean layout control.</li>
          <li>
            Custom promotional sections and blog integration for content
            marketing.
          </li>
        </ul>
        <h4 className="mt-4 font-semibold text-purple-300">
          🎯 Purpose & Impact
        </h4>
        <p className="text-gray-300">
          This project demonstrates how an organic brand can build trust and
          drive sales through a well-structured online store. By combining
          product offers, educational content, and intuitive navigation,
          NutriPure delivers a user-friendly experience that encourages repeat
          engagement.
        </p>
      </div>
    ),
    live: "https://your-nutripure-preview-link.com", // Replace with actual live link
  },
  {
    title: "Project 6",
    image: Project7, // Restaurant UI screenshot
    preview:
      "A modern fine-dining restaurant website with elegant dark UI, seasonal menus, online reservation, and chef showcase.",
    desc: (
      <div>
        <p className="text-gray-300">
          <strong className="text-yellow-400">UrbanBite</strong> is a premium
          restaurant website designed with a luxurious dark theme and elegant
          typography. The layout focuses on seasonal flavors, signature dishes,
          and a smooth user journey from menu discovery to online reservation.
        </p>

        <h4 className="mt-4 font-semibold text-yellow-400">🍽️ Key Features</h4>
        <ul className="list-disc list-inside text-gray-300 space-y-1">
          <li>
            Eye-catching hero section with seasonal food imagery and strong
            call-to-action.
          </li>
          <li>
            “Top Flavors” showcase highlighting breakfast, appetizers, and
            drinks.
          </li>
          <li>Interactive menu section with categorized dishes and pricing.</li>
          <li>
            Best specialties section featuring signature and popular meals.
          </li>
          <li>
            Online reservation form for table booking with date and time
            selection.
          </li>
          <li>
            Chef introduction section to build brand trust and authenticity.
          </li>
          <li>
            Statistics section showing experience, dishes, and happy customers.
          </li>
          <li>Newsletter subscription and detailed footer with quick links.</li>
        </ul>

        <h4 className="mt-4 font-semibold text-yellow-400">
          🎨 UI / UX Highlights
        </h4>
        <ul className="list-disc list-inside text-gray-300 space-y-1">
          <li>
            Dark luxury color palette with gold accents for a premium feel.
          </li>
          <li>Large food imagery to create strong visual appetite appeal.</li>
          <li>
            Clean section spacing and smooth content flow for better
            readability.
          </li>
          <li>
            Fully responsive design optimized for desktop and mobile devices.
          </li>
        </ul>

        <h4 className="mt-4 font-semibold text-yellow-400">🛠️ Tech Stack</h4>
        <ul className="list-disc list-inside text-gray-300 space-y-1">
          <li>React.js for component-based UI structure.</li>
          <li>Tailwind CSS for modern, responsive, and clean styling.</li>
          <li>Reusable components for menu cards, sections, and forms.</li>
        </ul>

        <h4 className="mt-4 font-semibold text-yellow-400">
          🎯 Purpose & Impact
        </h4>
        <p className="text-gray-300">
          This project demonstrates a real-world restaurant website design that
          focuses on branding, user experience, and conversion. It is ideal for
          showcasing frontend skills in UI design, layout structuring, and
          responsive development for premium businesses.
        </p>
      </div>
    ),
    live: "https://your-restaurant-preview-link.com", // replace with live link
  },
];

export default function PortfolioSection() {
  const [activeProject, setActiveProject] = useState(null);

  return (
    <section
      id="portfolio"
      className="py-20 px-6 bg-gradient-to-b from-black via-gray-900 to-black text-white"
    >
      <h2 className="text-center text-4xl font-bold mb-12">
        My{" "}
        <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
          Latest Work
        </span>
      </h2>

      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
        {projects.map((proj, i) => (
          <div
            key={i}
            onClick={() => setActiveProject(proj)}
            className="cursor-pointer rounded-xl overflow-hidden border border-white/10 bg-white/5 hover:bg-white/10 hover:scale-[1.02] transition-all duration-300 shadow-md"
          >
            <img
              src={proj.image}
              alt={proj.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold wihte">{proj.title}</h3>
              <p className="mt-2 text-gray-300 line-clamp-2">{proj.preview}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {activeProject && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">
          <div className="bg-gray-900 p-6 rounded-xl max-w-6xl w-full relative overflow-y-auto max-h-[90vh]">
            <button
              onClick={() => setActiveProject(null)}
              className="absolute top-2 right-4 text-white text-3xl font-bold hover:text-red-400"
            >
              &times;
            </button>

            <div className="grid md:grid-cols-2 gap-6">
              {/* Left: Content */}
              <div className="text-gray-300">{activeProject.desc}</div>

              {/* Right: Image */}
              <div>
                <img
                  src={activeProject.image}
                  alt={activeProject.title}
                  className="w-full object-contain rounded-lg shadow-lg"
                />
              </div>
            </div>

            {/* Bottom: Live Preview Button */}
            {activeProject.live && (
              <div className="mt-6 text-center">
                <a
                  href={activeProject.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-6 rounded-full transition-all duration-300"
                >
                  🔗 Live Preview
                </a>
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
}

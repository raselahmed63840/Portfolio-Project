import { useState } from "react";

export default function Service() {
  const [selectedService, setSelectedService] = useState(null);

  const services = [
    {
      title: "Frontend Development",
      preview:
        "Crafting fast, responsive, and beautiful interfaces with React & Tailwind.",
      desc: (
        <div>
          <p>
            Building a modern web application isn’t just about writing code—it’s
            about crafting experiences that feel intuitive, fast, and visually
            stunning. As a frontend developer, I specialize in creating
            responsive, user-friendly interfaces that bring ideas to life.
          </p>
          <h4 className="mt-4 font-semibold text-purple-300">
            🔑 What I Deliver
          </h4>
          <ul className="list-disc list-inside text-gray-300 space-y-1">
            <li>Pixel-perfect UI design using React.js and TailwindCSS.</li>
            <li>Responsive layouts across mobile, tablet, and desktop.</li>
            <li>Performance optimization for speed and engagement.</li>
            <li>Interactive components like modals, forms, and animations.</li>
            <li>Accessibility-first approach for inclusive design.</li>
          </ul>
          <h4 className="mt-4 font-semibold text-purple-300">
            🎨 Why It Matters
          </h4>
          <p className="text-gray-300">
            A well-built frontend is the first impression your users get. If
            it’s clunky or slow, they leave. If it’s smooth, elegant, and
            intuitive, they stay, explore, and convert.
          </p>
          <h4 className="mt-4 font-semibold text-purple-300">
            🚀 Tools & Technologies
          </h4>
          <ul className="list-disc list-inside text-gray-300 space-y-1">
            <li>React.js for dynamic, component-driven UIs.</li>
            <li>TailwindCSS for rapid styling with modern utility classes.</li>
            <li>JavaScript & TypeScript for scalable, maintainable code.</li>
            <li>UI/UX best practices for clarity and consistency.</li>
          </ul>
        </div>
      ),
      icon: "🖥️",
      img: "https://media.istockphoto.com/id/1446486926/vector/front-and-back-end-of-development-responsive-web-design-website-interface-coding-and.jpg?s=612x612&w=0&k=20&c=EygMvCkwJwl1_tifxDKIP2ornYNxZhKxlFh7--HfXBM=",
    },
    {
      title: "Backend Development",
      preview:
        "Designing secure, scalable server-side systems with Node.js, Express & databases.",
      desc: (
        <div>
          <p>
            A powerful backend is the backbone of every modern application. It’s
            where data is stored, processed, and secured. As a backend
            developer, I specialize in building robust server-side logic that
            ensures your application runs smoothly, scales efficiently, and
            keeps user data safe.
          </p>
          <h4 className="mt-4 font-semibold text-purple-300">
            🔑 What I Deliver
          </h4>
          <ul className="list-disc list-inside text-gray-300 space-y-1">
            <li>Efficient API logic with Node.js and Express.js.</li>
            <li>
              Database design and optimization for MongoDB and SQL systems.
            </li>
            <li>
              Authentication & authorization with JWT and secure practices.
            </li>
            <li>Error handling and logging for reliable performance.</li>
            <li>Scalable architecture ready for high-traffic applications.</li>
          </ul>
          <h4 className="mt-4 font-semibold text-purple-300">
            🎨 Why It Matters
          </h4>
          <p className="text-gray-300">
            A strong backend ensures your app can handle growth, protect
            sensitive data, and deliver consistent performance. Without it, even
            the most beautiful frontend will fail to meet user expectations.
          </p>
          <h4 className="mt-4 font-semibold text-purple-300">
            🚀 Tools & Technologies
          </h4>
          <ul className="list-disc list-inside text-gray-300 space-y-1">
            <li>Node.js & Express.js for server-side logic.</li>
            <li>MongoDB & SQL for structured and unstructured data storage.</li>
            <li>JWT & OAuth for secure authentication.</li>
            <li>RESTful API design principles.</li>
            <li>Cloud-ready deployment strategies for scalability.</li>
          </ul>
        </div>
      ),
      icon: "🧠",
      img: "https://img.freepik.com/free-photo/person-playing-3d-video-games-device_23-2151005751.jpg?semt=ais_hybrid&w=740&q=80",
    },
    {
      title: "Full-Stack Development",
      preview:
        "End-to-end MERN applications with seamless frontend & backend integration, authentication, and deployment.",
      desc: (
        <div>
          <p>
            Full-stack development is about bringing every piece of the puzzle
            together—frontend, backend, database, and deployment—into one
            cohesive application. I specialize in building complete MERN
            (MongoDB, Express, React, Node.js) solutions that are not only
            functional but also production-ready.
          </p>
          <h4 className="mt-4 font-semibold text-purple-300">
            🔑 What I Deliver
          </h4>
          <ul className="list-disc list-inside text-gray-300 space-y-1">
            <li>
              Seamless integration of frontend and backend for smooth user
              experiences.
            </li>
            <li>
              Secure authentication and authorization systems using JWT, OAuth,
              or session-based strategies.
            </li>
            <li>
              Dynamic routing and state management for scalable applications.
            </li>
            <li>
              Database design and connectivity with MongoDB for efficient data
              handling.
            </li>
            <li>
              Deployment pipelines ensuring apps are live, stable, and optimized
              for real-world use.
            </li>
          </ul>
          <h4 className="mt-4 font-semibold text-purple-300">
            🎨 Why It Matters
          </h4>
          <p className="text-gray-300">
            A full-stack developer bridges the gap between design and
            functionality. By handling both frontend and backend, I ensure your
            application is cohesive, efficient, and ready to scale. This means
            faster development, fewer integration issues, and a smoother path to
            production.
          </p>
          <h4 className="mt-4 font-semibold text-purple-300">
            🚀 Tools & Technologies
          </h4>
          <ul className="list-disc list-inside text-gray-300 space-y-1">
            <li>MongoDB for flexible, document-based data storage.</li>
            <li>Express.js for building robust server-side APIs.</li>
            <li>React.js for dynamic, component-driven user interfaces.</li>
            <li>Node.js for scalable backend logic and runtime.</li>
            <li>Deployment on platforms like Vercel, Netlify, and Render.</li>
          </ul>
        </div>
      ),
      icon: "🛠️",
      img: "https://miro.medium.com/1*yw0TnheAGN-LPneDaTlaxw.gif",
    },
    {
      title: "API Development",
      preview:
        "Secure, scalable RESTful APIs with JWT authentication and seamless integration for modern applications.",
      desc: (
        <div>
          <p>
            APIs are the bridges that connect applications, enabling them to
            share data and functionality. I specialize in building RESTful APIs
            that are secure, scalable, and easy to integrate—ensuring your
            systems work together flawlessly.
          </p>
          <h4 className="mt-4 font-semibold text-purple-300">
            🔑 What I Deliver
          </h4>
          <ul className="list-disc list-inside text-gray-300 space-y-1">
            <li>
              RESTful API design following industry best practices for clarity
              and consistency.
            </li>
            <li>
              Secure authentication and authorization using JWT, OAuth, or API
              keys.
            </li>
            <li>
              Scalable endpoints capable of handling high traffic and complex
              data flows.
            </li>
            <li>
              Error handling, validation, and logging for reliability and
              maintainability.
            </li>
            <li>
              Easy integration with frontend apps, third-party services, and
              mobile platforms.
            </li>
          </ul>
          <h4 className="mt-4 font-semibold text-purple-300">
            🎨 Why It Matters
          </h4>
          <p className="text-gray-300">
            APIs are the backbone of modern applications. A well-designed API
            makes integration seamless, reduces development time, and ensures
            your application can grow and adapt. Without secure and scalable
            APIs, apps struggle to communicate effectively.
          </p>
          <h4 className="mt-4 font-semibold text-purple-300">
            🚀 Tools & Technologies
          </h4>
          <ul className="list-disc list-inside text-gray-300 space-y-1">
            <li>Node.js & Express.js for building robust API endpoints.</li>
            <li>MongoDB & SQL for efficient data storage and retrieval.</li>
            <li>JWT & OAuth for secure authentication flows.</li>
            <li>Postman & Swagger for API testing and documentation.</li>
            <li>Cloud-ready deployment strategies for scalable API hosting.</li>
          </ul>
        </div>
      ),
      icon: "🔐",
      img: "https://media.stockimg.ai/image/v2/DUnaUy31bJJC.png?quality=75&width=1024",
    },
    {
      title: "Web Deployment",
      preview:
        "Reliable deployment pipelines across Netlify, Vercel & Render with CI/CD and environment setup.",
      desc: (
        <div>
          <p>
            Deployment is the final step that transforms your project from code
            to a live application accessible to users worldwide. I specialize in
            handling deployment pipelines across modern platforms like Netlify,
            Vercel, and Render—ensuring your app is stable, secure, and
            optimized for performance.
          </p>
          <h4 className="mt-4 font-semibold text-purple-300">
            🔑 What I Deliver
          </h4>
          <ul className="list-disc list-inside text-gray-300 space-y-1">
            <li>
              Environment setup and configuration tailored to your project’s
              needs.
            </li>
            <li>
              Continuous Integration & Continuous Deployment (CI/CD) pipelines
              for automated updates.
            </li>
            <li>
              Optimized builds that reduce load times and improve user
              experience.
            </li>
            <li>
              Secure deployment practices to protect sensitive data and APIs.
            </li>
            <li>
              Monitoring and error tracking for long-term stability and
              reliability.
            </li>
          </ul>
          <h4 className="mt-4 font-semibold text-purple-300">
            🎨 Why It Matters
          </h4>
          <p className="text-gray-300">
            A great application is useless if it isn’t accessible. Proper
            deployment ensures your app is always available, scalable, and
            performing at its best. With automated pipelines and cloud-ready
            strategies, I make sure your product reaches users without downtime
            or hassle.
          </p>
          <h4 className="mt-4 font-semibold text-purple-300">
            🚀 Tools & Technologies
          </h4>
          <ul className="list-disc list-inside text-gray-300 space-y-1">
            <li>Netlify, Vercel, and Render for modern hosting solutions.</li>
            <li>CI/CD pipelines with GitHub Actions and GitLab CI.</li>
            <li>Docker & containerization for scalable deployments.</li>
            <li>Environment variables & secrets management for security.</li>
            <li>
              Monitoring tools like Sentry and LogRocket for performance
              tracking.
            </li>
          </ul>
        </div>
      ),
      icon: "🚀",
      img: "https://img.freepik.com/premium-photo/3d-cartoon-character-developer-working-laptop-web-app-development-frontend-deployment_1298309-24202.jpg",
    },
    {
      title: "Web App Development",
      preview:
        "Scalable, user-friendly web apps designed with real-world functionality, usability, and performance in mind.",
      desc: (
        <div>
          <p>
            Web applications are more than just websites—they are interactive
            platforms that solve real problems and deliver meaningful
            experiences. I specialize in crafting web apps that balance
            usability, scalability, and performance, ensuring users not only
            enjoy the interface but also trust the functionality behind it.
          </p>
          <h4 className="mt-4 font-semibold text-purple-300">
            🔑 What I Deliver
          </h4>
          <ul className="list-disc list-inside text-gray-300 space-y-1">
            <li>
              User-centered design with intuitive navigation and responsive
              layouts.
            </li>
            <li>
              Scalable architecture capable of handling growth and high user
              demand.
            </li>
            <li>
              Performance optimization for fast load times and smooth
              interactions.
            </li>
            <li>
              Integration of real-world features like authentication,
              dashboards, and data visualization.
            </li>
            <li>
              Accessibility and cross-browser compatibility for inclusive user
              experiences.
            </li>
          </ul>
          <h4 className="mt-4 font-semibold text-purple-300">
            🎨 Why It Matters
          </h4>
          <p className="text-gray-300">
            A well-crafted web app can transform workflows, engage customers,
            and solve everyday challenges. By focusing on usability and
            scalability, I ensure your app grows with your business and
            continues to deliver value over time.
          </p>
          <h4 className="mt-4 font-semibold text-purple-300">
            🚀 Tools & Technologies
          </h4>
          <ul className="list-disc list-inside text-gray-300 space-y-1">
            <li>React.js & Next.js for dynamic, modern interfaces.</li>
            <li>Node.js & Express.js for backend logic and APIs.</li>
            <li>MongoDB & SQL for efficient data management.</li>
            <li>TailwindCSS for clean, responsive styling.</li>
            <li>
              Deployment on Vercel, Netlify, or Render for global accessibility.
            </li>
          </ul>
        </div>
      ),
      icon: "🌐",
      img: "https://img.freepik.com/premium-photo/cartoon-3d-character-developer-working-laptop-web-app-development-frontend-deployment_1295366-45083.jpg?semt=ais_hybrid&w=740&q=80",
    },
  ];

  return (
    <section id="services" className="py-20 px-6 bg-gradient-to-b bg-[#160014]">
      <h2 className="text-center text-4xl font-bold">
        <span className="bg-gradient-to-r from-purple-500 to-pink-400 bg-clip-text text-transparent">
          My
        </span>{" "}
        <span className="bg-gradient-to-r from-pink-400 to-orange-400 bg-clip-text text-transparent">
          Services
        </span>
      </h2>

      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8 mt-12">
        {services.map((srv, i) => (
          <div
            key={i}
            onClick={() => setSelectedService(srv)}
            className="cursor-pointer p-6 border border-white/10 rounded-xl bg-white/5 backdrop-blur-md hover:bg-white/10 hover:scale-[1.02] transition-all duration-300 shadow-md"
          >
            <div className="text-3xl mb-4">{srv.icon}</div>
            <h3 className="text-xl font-semibold text-purple-300">
              {srv.title}
            </h3>
            <p className="mt-2 text-gray-300 line-clamp-2">{srv.preview}</p>
          </div>
        ))}
      </div>

      {/* Popup Modal */}
      {selectedService && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
          <div className="bg-[#1a1a1a] p-8 rounded-lg max-w-2xl w-full text-white relative overflow-y-auto max-h-[80vh]">
            <button
              onClick={() => setSelectedService(null)}
              className="absolute top-2 right-2 text-gray-400 hover:text-white"
            >
              ✖
            </button>
            <img
              src={selectedService.img}
              alt={selectedService.title}
              className="rounded-lg mb-4 shadow-lg"
            />
            <h3 className="text-2xl font-bold mb-2">{selectedService.title}</h3>
            <div className="text-gray-300 space-y-2">
              {selectedService.desc}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

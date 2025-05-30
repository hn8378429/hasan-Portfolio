import React from "react";
import { Mail, Github, Linkedin } from "lucide-react";

export default function Portfolio() {
  return (
    <main className="min-h-screen bg-gray-50 text-gray-800 font-sans">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center py-20 px-4 text-center bg-white">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Hi, I'm Muhammad Hasan</h1>
        <p className="text-lg md:text-xl text-gray-600 max-w-xl">
          Full-stack developer with expertise in HTML, CSS, JavaScript, TypeScript, Next.js, and Python.
        </p>
        <div className="mt-6 space-x-4">
          <a
            href="#projects"
            className="bg-black text-white px-6 py-2 rounded-full hover:bg-gray-800 transition"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="border border-black px-6 py-2 rounded-full hover:bg-black hover:text-white transition"
          >
            Contact Me
          </a>
        </div>
      </section>

      {/* About Me */}
      <section className="py-20 px-6 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-6">About Me</h2>
        <p className="text-gray-700 text-lg leading-8">
          I'm a passionate web developer who builds responsive, scalable, and fast web applications. I specialize in
          Next.js and Python, and I'm comfortable working across the full stack. Always learning, always building. Currently exploring Agentic AI.
        </p>
      </section>

      {/* Skills */}
      <section className="py-20 px-6 bg-gray-100">
        <h2 className="text-3xl font-bold mb-6 text-center">Skills</h2>
        <div className="grid grid-cols-3 gap-6 max-w-3xl mx-auto text-center">
          {["HTML", "CSS", "JavaScript"].map(skill => (
            <div key={skill} className="bg-white p-4 shadow rounded-xl">
              {skill}
            </div>
          ))}
        </div>
        <div className="grid grid-cols-3 gap-6 max-w-3xl mx-auto text-center mt-6">
          {["TypeScript", "Next.js", "Python"].map(skill => (
            <div key={skill} className="bg-white p-4 shadow rounded-xl">
              {skill}
            </div>
          ))}
        </div>
        <div className="max-w-sm mx-auto text-center mt-6">
          <div className="bg-yellow-100 text-yellow-800 p-4 shadow rounded-xl font-medium">
            Agentic AI (Learning)
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="py-20 px-6 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-center">Projects</h2>
        <div className="space-y-8">
          <div className="bg-white p-6 shadow rounded-xl">
            <h3 className="text-2xl font-semibold">Portfolio Website</h3>
            <p className="text-gray-700 mt-2">Built with Next.js and Tailwind CSS. Fully responsive and fast.</p>
          </div>
          <div className="bg-white p-6 shadow rounded-xl">
            <h3 className="text-2xl font-semibold">Blog Platform</h3>
            <p className="text-gray-700 mt-2">Full-stack blog with Markdown editor, using Prisma and PostgreSQL.</p>
          </div>
          <div className="bg-white p-6 shadow rounded-xl">
            <h3 className="text-2xl font-semibold">Auth System</h3>
            <p className="text-gray-700 mt-2">Login/authentication with Flask and JWT.</p>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 px-6 bg-white text-center">
        <h2 className="text-3xl font-bold mb-4">Get In Touch</h2>
        <p className="text-lg text-gray-700 mb-6">
          Let's build something amazing together.
        </p>

        <div className="flex flex-col md:flex-row items-center justify-center space-y-6 md:space-y-0 md:space-x-10">
          <img
  src="\download.jpg"
  alt="Muhammad Hasan"
  className="w-40 h-40 object-cover rounded-full shadow-md border-2 border-gray-300"
/>
          <div className="flex space-x-6 text-gray-600">
            <a href="mailto:hn8378429@gmail.com" className="hover:text-black">
              <Mail />
            </a>
            <a href="https://github.com/hn8378429" target="_blank" className="hover:text-black">
              <Github />
            </a>
            <a href="https://linkedin.com/in/yourusername" target="_blank" className="hover:text-black">
              <Linkedin />
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

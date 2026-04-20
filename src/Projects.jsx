import React from 'react';
import { FiExternalLink, FiGithub } from 'react-icons/fi';

const projects = [
  {
    title: 'E-Commerce Platform',
    description: 'A full-stack e-commerce application integrating a modern UI with a scalable backend. Includes user authentication, product search, and a complete checkout process.',
    image: 'https://images.unsplash.com/photo-1557821552-17105176677c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    githubLink: 'https://github.com',
    liveLink: 'https://example.com'
  },
  {
    title: 'Task Management App',
    description: 'A productivity application to manage tasks and projects intuitively. Features drag-and-drop functionality, real-time updates, and team collaboration capabilities.',
    image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    tags: ['React', 'Firebase', 'Tailwind', 'Redux'],
    githubLink: 'https://github.com',
    liveLink: 'https://example.com'
  },
  {
    title: 'Social Analytics Dashboard',
    description: 'A responsive dashboard displaying user analytics and engagement data with interactive charts and real-time syncing features.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    tags: ['Next.js', 'Chart.js', 'TypeScript', 'Tailwind'],
    githubLink: 'https://github.com',
    liveLink: 'https://example.com'
  }
];

export default function Projects() {
  return (
    <section id="projects" className="section py-20 px-5">
      <div className="container mx-auto max-w-6xl">
        <h2 className="section-title text-center text-4xl font-bold mb-16">
          Selected <span className="gradient-text">Projects</span>
        </h2>

        <div className="projects-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="project-card glass-card rounded-2xl overflow-hidden hover:-translate-y-2 transition-all duration-300 flex flex-col bg-white/5 border border-white/10">
              <div className="project-image-wrapper h-48 overflow-hidden relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110 blur-[1px] hover:blur-none"
                  loading="lazy"
                />
                <div className="project-overlay absolute inset-0 bg-gradient-to-t from-bg-primary to-transparent opacity-60"></div>
              </div>

              <div className="project-content p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold mb-2 text-white">{project.title}</h3>
                <p className="text-sm text-secondary mb-4 flex-grow">
                  {project.description}
                </p>

                <div className="project-tags flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, tagIdx) => (
                    <span key={tagIdx} className="text-xs font-medium py-1 px-3 bg-white/5 rounded-full border border-white/10 text-accent-primary">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="project-links flex gap-4 mt-auto border-t border-white/10 pt-4">
                  <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-sm text-secondary hover:text-white transition-colors">
                    <FiGithub /> Code
                  </a>
                  <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-sm text-secondary hover:text-white transition-colors">
                    <FiExternalLink /> Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

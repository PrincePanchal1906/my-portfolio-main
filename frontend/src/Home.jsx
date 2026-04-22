import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Code, Terminal, Layers } from 'lucide-react';
import { FiGithub, FiLinkedin, FiTwitter } from 'react-icons/fi';

export default function Home() {
    return (
        <main className="hero-section mt-[-4rem]">
            <div className="hero-content">
                <div className="hero-badge">
                    <span className="live-dot"></span> Available for work
                </div>
                <h1 className="hero-title">
                    Hi, I'm <span className="gradient-text">Prince Panchal</span>
                </h1>
                <h2 className="hero-subtitle">
                    Building digital experiences that matter.
                </h2>
                <p className="hero-description">
                    Passionate fresher with a strong learning mindset, quick adaptability, and a drive to deliver quality results.
                </p>
                <div className="hero-actions">
                    <Link to="/projects" className="btn btn-primary">View Projects</Link>
                    <Link to="/contact" className="btn btn-secondary">Contact Me</Link>
                </div>

                <div className="social-links">
                    <a href="https://github.com/PrincePanchal1906" className="social-link" target="_blank" rel="noopener noreferrer"><FiGithub size={20} /></a>
                    <a href="https://www.linkedin.com/in/prince-panchal-555g444" className="social-link" target="_blank" rel="noopener noreferrer"><FiLinkedin size={20} /></a>
                    <a href="" className="social-link"><Mail size={20} /></a>
                </div>
            </div>

            <div className="hero-visual">
                <div className="card-stack">
                    <div className="tech-card float-1">
                        <Code size={32} color="#3b82f6" />
                        <span>Frontend</span>
                    </div>
                    <div className="tech-card float-2">
                        <Terminal size={32} color="#8b5cf6" />
                        <span>Backend</span>
                    </div>

                </div>
            </div>
        </main>
    );
}


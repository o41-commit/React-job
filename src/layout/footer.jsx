import React from 'react'
import { Link } from 'react-router-dom'
import { FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa';
import { SiX } from 'react-icons/si';

const footer = () => {
  return (
<footer className="bg-indigo-700 text-white p-3 px-6">
  <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
    <div>
      <h3 className="font-bold text-black mb-2">DevNado</h3>
      <p>Frontend Developer, UI Craftsman, and Web Innovator. Passionate about clean code and modern UI.</p>
    </div>
    
    <div>
      <h4 className="font-semibold text-white mb-2">Quick Links</h4>
      <ul>
        <li><Link to="https://github.com/o41-commit" className="hover:text-black">Projects</Link></li>
        <li><Link to="#about" className="hover:text-black">About Me</Link></li>
        <li><Link to="#contact" className="hover:text-black">Contact: 09068994360</Link></li>
      </ul>
    </div>

    <div className='w-full'>
      <h4 className="font-semibold text-white mb-2">Contact</h4>
        <p>Email: <Link to="mailto:oluwatobilobafatoba@gmail.com" className="hover:text-black">oluwatobilobafatoba@gmail.com</Link></p>
      <p>Location: Lagos, Ikeja</p>
       <div className="flex justify-center gap-6 mt-4 text-lg hover:black-400">
        <Link
          to="https://github.com/o41-commit"
          target="_blank"
          rel="github profile"
        >
          <FaGithub />
        </Link>
        <Link
          to="https://linkedin.com/in/your-profile"
          target="_blank"
          rel="linkedin profile"
        >
          <FaLinkedin />
        </Link>
        <Link
          to="https://x.com/oluwatobil48396"
          target="_blank"
          rel="X profile"
        >
           <SiX />
        </Link>
          <Link
            to="https://wa.me/2349068994360"
            target="_blank"
            rel="whatsapp profile"
            title="WhatsApp"
        >
            <FaWhatsapp />
        </Link>
      </div>
    </div>
  </div>

  <div className="mt-8 text-center text-white-500 text-xs">
    &copy; 2025 DevNado. Made with 💙 and React + Tailwind.
  </div>
</footer>

  )
}

export default footer

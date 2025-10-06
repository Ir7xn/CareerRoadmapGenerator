import { Github, Twitter, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black border-t border-yellow-500/30 py-8">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <div className="flex justify-center space-x-6 mb-4">
          <Github className="w-6 h-6 text-white hover:text-yellow-500 cursor-pointer transition-colors" />
          <Twitter className="w-6 h-6 text-white hover:text-yellow-500 cursor-pointer transition-colors" />
          <Linkedin className="w-6 h-6 text-white hover:text-yellow-500 cursor-pointer transition-colors" />
          <Mail className="w-6 h-6 text-white hover:text-yellow-500 cursor-pointer transition-colors" />
        </div>
        <p className="text-gray-400 text-sm">
          © {new Date().getFullYear()} CareerPath Generator. Empowering careers worldwide.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
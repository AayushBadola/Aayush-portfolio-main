
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Skills", href: "/skills" },
    { name: "Projects", href: "/projects" },
    { name: "Contact", href: "/contact" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      scrolled ? "bg-black/90 backdrop-blur-md border-b border-green-500/20" : "bg-transparent"
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link to="/" className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-green-500/20 to-purple-500/20 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
              <span className="relative text-2xl font-bold bg-gradient-to-r from-green-400 to-purple-400 bg-clip-text text-transparent hover:scale-110 transition-transform font-mono px-4 py-2">
                {"<AB />"}
              </span>
            </Link>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-2">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`group relative overflow-hidden px-6 py-2 rounded-full text-sm font-medium font-mono transition-all duration-500 transform hover:scale-105 ${
                    isActive(item.href) 
                      ? "text-black bg-gradient-to-r from-green-400 to-purple-400 shadow-lg shadow-green-500/30" 
                      : "text-gray-300 hover:text-white border border-gray-700/50 hover:border-green-500/50 hover:bg-gray-900/50"
                  }`}
                  onMouseMove={(e) => {
                    if (!isActive(item.href)) {
                      const rect = e.currentTarget.getBoundingClientRect();
                      const x = e.clientX - rect.left;
                      const y = e.clientY - rect.top;
                      e.currentTarget.style.setProperty('--mouse-x', `${x}px`);
                      e.currentTarget.style.setProperty('--mouse-y', `${y}px`);
                    }
                  }}
                >
                  {!isActive(item.href) && (
                    <div className="absolute w-20 h-20 bg-green-500/10 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none" 
                         style={{left: 'var(--mouse-x)', top: 'var(--mouse-y)'}}></div>
                  )}
                  <span className="relative z-10">{item.name}</span>
                </Link>
              ))}
            </div>
          </div>
          
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-full text-gray-400 hover:text-white hover:bg-gray-700/50 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-green-400 transition-colors border border-gray-700/50 hover:border-green-500/50"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden animate-fade-in-up">
          <div className="px-2 pt-2 pb-3 space-y-2 sm:px-3 bg-black/95 backdrop-blur-md border-t border-green-500/20">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`block px-6 py-3 rounded-full text-base font-medium font-mono transition-all duration-300 ${
                  isActive(item.href) 
                    ? "text-black bg-gradient-to-r from-green-400 to-purple-400" 
                    : "text-gray-300 hover:text-white hover:bg-green-500/20 border border-gray-700/50 hover:border-green-500/50"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;

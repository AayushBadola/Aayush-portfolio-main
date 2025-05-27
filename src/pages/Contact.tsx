
import { Mail, MapPin, Github, Linkedin, FileText, Send } from "lucide-react";
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Create mailto link with form data
      const subject = encodeURIComponent(`Portfolio Contact: ${formData.name}`);
      const body = encodeURIComponent(`
Name: ${formData.name}
Email: ${formData.email}

Message:
${formData.message}
      `);
      
      const mailtoLink = `mailto:aayush.badola2@gmail.com?subject=${subject}&body=${body}`;
      window.location.href = mailtoLink;
      
      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in-up">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Get In Touch
            </span>
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full"></div>
          <p className="mt-6 text-lg text-gray-400 max-w-2xl mx-auto">
            I'm always open to discussing new opportunities, interesting projects, and collaborations. 
            Let's create something amazing together!
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-8 animate-fade-in-up delay-300">
            <div className="flex items-center space-x-4 p-6 bg-gradient-to-r from-purple-900/20 to-pink-900/20 rounded-lg border border-purple-500/20 hover:border-purple-400/40 transition-all duration-300 hover:transform hover:scale-105">
              <Mail className="h-6 w-6 text-purple-400" />
              <div>
                <h3 className="text-lg font-semibold text-white">Email</h3>
                <p className="text-gray-400">aayush.badola2@gmail.com</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4 p-6 bg-gradient-to-r from-purple-900/20 to-pink-900/20 rounded-lg border border-purple-500/20 hover:border-purple-400/40 transition-all duration-300 hover:transform hover:scale-105">
              <MapPin className="h-6 w-6 text-purple-400" />
              <div>
                <h3 className="text-lg font-semibold text-white">Location</h3>
                <p className="text-gray-400">New Delhi, India</p>
              </div>
            </div>
            
            <div className="pt-6">
              <h3 className="text-lg font-semibold text-white mb-4">Connect With Me</h3>
              <div className="flex space-x-4">
                <a 
                  href="https://github.com/AayushBadola" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group p-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 transform hover:scale-110"
                >
                  <Github className="h-6 w-6 text-white group-hover:rotate-12 transition-transform" />
                </a>
                <a 
                  href="https://www.linkedin.com/in/aayushbadola/" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group p-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 transform hover:scale-110"
                >
                  <Linkedin className="h-6 w-6 text-white group-hover:rotate-12 transition-transform" />
                </a>
                <a 
                  href="https://medium.com/@aayush.badola2" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group p-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 transform hover:scale-110"
                >
                  <FileText className="h-6 w-6 text-white group-hover:rotate-12 transition-transform" />
                </a>
              </div>
            </div>
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-6 animate-fade-in-up delay-500">
            {submitStatus === 'success' && (
              <div className="p-4 bg-green-500/20 border border-green-500/50 rounded-lg text-green-400">
                Your email client should open with the message. If not, please email me directly!
              </div>
            )}
            
            {submitStatus === 'error' && (
              <div className="p-4 bg-red-500/20 border border-red-500/50 rounded-lg text-red-400">
                Something went wrong. Please email me directly at aayush.badola2@gmail.com
              </div>
            )}
            
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-white placeholder-gray-400 transition-all duration-300 hover:border-purple-500/50"
                placeholder="Your name"
                required
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-white placeholder-gray-400 transition-all duration-300 hover:border-purple-500/50"
                placeholder="your.email@example.com"
                required
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-white placeholder-gray-400 resize-none transition-all duration-300 hover:border-purple-500/50"
                placeholder="Tell me about your project or opportunity..."
                required
              ></textarea>
            </div>
            
            <button
              type="submit"
              disabled={isSubmitting}
              className="group w-full px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg text-white font-semibold hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? 'Opening Email Client...' : 'Send Message'}
              <Send className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </button>
            
            <p className="text-sm text-gray-500 text-center">
              This will open your email client with the message pre-filled
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;

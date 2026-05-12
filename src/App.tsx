import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ShieldCheck, 
  Sparkles, 
  Wrench, 
  Dog, 
  Wifi, 
  Phone, 
  Mail, 
  MapPin, 
  ArrowRight,
  Menu,
  X,
  Globe
} from 'lucide-react';
import { useState } from 'react';

const SERVICES = [
  {
    title: 'Professional Home Watch',
    description: 'Specialized visual inspections and security checks designed for Southwest Florida residents.',
    extendedDescription: 'Professional Home Watch is a visual inspection of a home or property, looking for obvious issues. Our hands-on oversight means we treat your home like our own—identifying potential issues before they become costly emergencies.',
    features: ['Regular interior & exterior home watch visits', 'Post-storm damage assessments', 'Visual check of HVAC, plumbing, & electrical', 'Secure keyholding & alarm response'],
    icon: ShieldCheck,
  },
  {
    title: 'Logistics & Cleaning',
    description: 'Coordinating professional cleaning, turnover services, and pristine vendor access management.',
    extendedDescription: 'Experience the luxury of a perpetually perfect home. We manage all scheduling and coordination of cleaning staff, landscape crews, and essential deliveries so you don\'t have to make a single call.',
    features: ['Pre-arrival cleaning & prep', 'Pre-arrival refrigerator stocking', 'Post-departure turnover', 'Plant watering & care','Vendor & contractor access management', 'Package & mail retrieval'],
    icon: Sparkles,
  },
  {
    title: 'Technical Maintenance',
    description: 'From small handyman tasks to large-scale projects managed by general contractors.',
    extendedDescription: 'Complex properties require continuous upkeep. We maintain an elite network of experts ready for any scale of work—from quick handyman repairs to major renovations overseen by licensed general contractors.',
    features: ['Access to licensed general contractors', 'Reliable handyman referral & oversight', 'HVAC monitoring & filter changes', 'Emergency repair dispatch'],
    icon: Wrench,
  },
  {
    title: 'IT Consultant Services',
    description: 'Provide expert advice and guidance for smart-home implementations and robust networking.',
    extendedDescription: 'Modern homes run on complex networks. We provide specialized consulting and troubleshooting to ensure your smart home automation, security cameras, and internet remain robust and reliable.',
    features: ['Smart home system optimization', 'Network & Wi-Fi troubleshooting', 'AV & entertainment system setup', 'Security camera network support'],
    icon: Wifi,
  },
];

const Logo = ({ isScrolled, className = "" }: { isScrolled?: boolean; className?: string }) => (
  <div className={`flex items-center gap-3 ${className}`}>
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="shrink-0">
      <path 
        d="M20 4L32 10V22C32 29.5 27 34.5 20 36C13 34.5 8 29.5 8 22V10L20 4Z" 
        fill="#064e3b" // Deep Emerald
      />
      <path 
        d="M20 8L28 12V20C28 25.5 24.5 29.5 20 31V8Z" 
        fill="#c5a059" // Matte Gold
        fillOpacity="0.8"
      />
      <path 
        d="M20 8L12 12V20C12 25.5 15.5 29.5 20 31V8Z" 
        fill="#c5a059" 
        fillOpacity="0.4"
      />
      <path 
        d="M20 12C20 12 23 15 23 20C23 25 20 28 20 28C20 28 17 25 17 20C17 15 20 12 20 12Z" 
        fill="white" 
        fillOpacity="0.9"
      />
    </svg>
    <span className={`text-2xl tracking-tighter font-serif font-bold ${isScrolled ? 'text-brand-accent' : 'text-white'}`}>
      CALYX CONCIERGE
    </span>
  </div>
);

export default function App() {
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const [selectedService, setSelectedService] = React.useState<typeof SERVICES[0] | null>(null);
  const [result, setResult] = useState("");

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  React.useEffect(() => {
    if (selectedService) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedService]);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);
    formData.append("access_key", "bfe3730b-206c-4883-a57b-f696c1a4d80b");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();
    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      setResult("Error");
    }
  };

  return (
    <div className="min-h-screen bg-brand-bg text-brand-ink font-sans selection:bg-brand-sand">
      {/* Navigation */}
      <nav 
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled ? 'bg-brand-bg/90 backdrop-blur-md border-b border-black/10 py-4' : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
          <Logo isScrolled={isScrolled} />
          
          {/* Desktop Nav */}
          <div className={`hidden md:flex items-center gap-8 text-sm font-medium uppercase tracking-widest ${isScrolled ? 'text-brand-ink' : 'text-white'}`}>
            <a href="#about" onClick={(e) => { e.preventDefault(); scrollToSection('about'); }} className="hover:text-brand-accent transition-colors">About</a>
            <a href="#whoweare" onClick={(e) => { e.preventDefault(); scrollToSection('whoweare'); }} className="hover:text-brand-accent transition-colors">Who We Are</a>
            <a href="#services" onClick={(e) => { e.preventDefault(); scrollToSection('services'); }} className="hover:text-brand-accent transition-colors">Services</a>
            <a href="#contact" onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }} className="hover:text-brand-accent transition-colors">Contact</a>
          </div>

          <button 
            className={`hidden md:flex px-6 py-3 rounded text-sm font-medium tracking-wide uppercase transition-colors ${
              isScrolled 
                ? 'bg-brand-accent text-white hover:bg-opacity-90' 
                : 'bg-white text-brand-ink hover:bg-brand-sand'
            }`}
            onClick={() => scrollToSection('contact')}
          >
            Get in touch
          </button>

          {/* Mobile Menu Toggle */}
          <button 
            className={`md:hidden p-2 ${isScrolled ? 'text-brand-ink' : 'text-white'}`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-brand-bg pt-24 px-6">
          <div className="flex flex-col gap-6 text-xl font-serif text-brand-ink">
            <a href="#about" onClick={(e) => { e.preventDefault(); scrollToSection('about'); }} className="text-left w-full pb-4 border-b border-black/10">About</a>
            <a href="#whoweare" onClick={(e) => { e.preventDefault(); scrollToSection('whoweare'); }} className="text-left w-full pb-4 border-b border-black/10">Who We Are</a>
            <a href="#services" onClick={(e) => { e.preventDefault(); scrollToSection('services'); }} className="text-left w-full pb-4 border-b border-black/10">Services</a>
            <a href="#contact" onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }} className="text-left w-full pb-4 border-b border-black/10">Contact</a>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image & Overlay */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-brand-ink/60 z-10" />
          <img 
            src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=2075&q=80" 
            alt="Luxury home exterior" 
            className="w-full h-full object-cover"
          />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center text-white mt-16">
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-brand-sand font-semibold tracking-[0.2em] text-sm uppercase mb-6"
          >
            Protection • Maintenance • Peace of Mind
          </motion.p>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-5xl md:text-7xl font-serif font-normal leading-tight mb-8"
          >
            Your home's primary point of contact.
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-10 font-normal leading-relaxed"
          >
            The comprehensive property management and care service for exclusive vacation homes and discerning absent owners.
          </motion.p>
          <motion.button 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            onClick={() => scrollToSection('about')}
            className="px-8 py-4 bg-brand-accent text-white rounded font-medium tracking-wide uppercase hover:bg-opacity-90 transition-colors inline-flex items-center gap-2"
          >
            Inquire About Services <ArrowRight size={18} />
          </motion.button>
        </div>
      </section>

      {/* The Pitch Section */}
      <section id="about" className="py-24 md:py-32 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <ShieldCheck className="w-12 h-12 text-brand-accent mx-auto mb-8 stroke-[1.5]" />
            <h2 className="text-3xl md:text-5xl font-serif leading-snug text-brand-ink mb-8 font-normal">
              "You don't need a multi-vendor headache. <br className="hidden md:block" />
              <span className="italic text-brand-accent">You just need Calyx.</span>"
            </h2>
            <p className="text-lg text-brand-ink/80 max-w-2xl mx-auto leading-relaxed">
              We provide a superior alternative to standard home watch services by acting as your single point of contact. With an established network of trusted experts—ranging from reliable handymen to licensed general contractors—we handle the complexities of home ownership so you don't have to. 
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 md:py-32 px-6 bg-white/50 border-y border-black/10">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 md:mb-24 text-center md:text-left flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div className="max-w-2xl">
              <h3 className="text-brand-accent font-semibold tracking-[0.2em] text-sm uppercase mb-4">Our Services</h3>
              <h2 className="text-4xl md:text-5xl font-serif text-brand-ink font-normal">Comprehensive Care</h2>
            </div>
            <p className="text-brand-ink/80 max-w-md">
              Tailored solutions ensuring your property remains immaculate, secure, and ready for your arrival.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.map((service, index) => (
              <motion.div 
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                onClick={() => setSelectedService(service)}
                className="bg-white p-8 md:p-10 rounded-xl shadow-[0_10px_30px_rgba(107,112,92,0.05)] border border-brand-accent/10 hover:shadow-[0_15px_40px_rgba(107,112,92,0.1)] transition-all duration-300 group cursor-pointer flex flex-col h-full hover:-translate-y-1"
              >
                <div className="w-12 h-12 bg-brand-sand rounded-md flex items-center justify-center mb-6 shrink-0 transition-colors duration-300 group-hover:bg-brand-accent">
                  <service.icon className="w-6 h-6 text-brand-accent transition-colors duration-300 group-hover:text-white" />
                </div>
                <h4 className="text-xl font-serif font-normal text-brand-accent mb-3">{service.title}</h4>
                <p className="text-brand-ink/70 leading-relaxed text-sm flex-grow">
                  {service.description}
                </p>
                <div className="mt-6 flex items-center gap-2 text-brand-accent text-sm font-semibold tracking-wide uppercase opacity-0 group-hover:opacity-100 transition-opacity">
                  Learn More <ArrowRight size={14} />
                </div>
              </motion.div>
            ))}
            
            {/* CTA Card in the grid */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="bg-brand-accent p-8 md:p-10 rounded-xl shadow-[0_10px_30px_rgba(107,112,92,0.2)] text-center flex flex-col items-center justify-center text-white"
            >
              <h4 className="text-2xl font-serif font-normal mb-3">Need something else?</h4>
              <p className="text-white/80 text-sm mb-8 font-normal">
                Our bespoke concierge service adapts to your unique lifestyle requirements.
              </p>
              <button 
                onClick={() => scrollToSection('contact')}
                className="px-6 py-3 bg-white text-brand-ink rounded font-medium text-sm tracking-wide uppercase hover:bg-brand-sand transition-colors"
              >
                Let's Talk
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Image Break Section */}
      <section className="h-96 relative">
        <img 
          src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" 
          alt="Modern beautiful interior" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-brand-ink/30"></div>
      </section>

      {/* Who We Are Section */}
      <section id="whoweare" className="py-24 md:py-32 px-6 bg-brand-sand/30">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="text-center md:text-left"
          >
            <h3 className="text-brand-accent font-semibold tracking-[0.2em] text-sm uppercase mb-4 text-center">Who We Are</h3>
            <h2 className="text-4xl md:text-5xl font-serif text-brand-ink font-normal mb-10 text-center">Locals looking after locals.</h2>
            
            <div className="space-y-6 text-brand-ink/80 text-lg leading-relaxed text-left md:text-justify">
              <p>
                We aren't just a property management company; we are Southwest Florida residents. We've weathered the major hurricanes alongside our community. We know intimately the anxiety of wondering if your property is secure, if the pool cage held up, or if there's water intrusion after a major storm. 
              </p>
              <p>
                That firsthand experience is why Calyx was founded. When we survey your property post-storm, or during our routine weekly home watch visits, we're looking with the experienced eyes of locals who know exactly what to check. Additionally, as a fully bilingual team (English and Spanish), we ensure clear, seamless communication with you and a wide network of local vendors.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 md:py-32 px-6">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 lg:gap-24">
          <div className="lg:w-1/2">
            <h3 className="text-brand-accent font-semibold tracking-[0.2em] text-sm uppercase mb-4">Get in Touch</h3>
            <h2 className="text-4xl md:text-5xl font-serif text-brand-ink font-normal mb-8">Become a Client</h2>
            <p className="text-brand-ink/80 leading-relaxed mb-12 max-w-md">
              Secure your peace of mind today. Reach out to discuss how Calyx Concierge can tailor a property management plan specifically for you.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4 text-brand-ink">
                <div className="w-12 h-12 bg-brand-sand flex items-center justify-center rounded-md">
                  <Phone className="w-5 h-5 text-brand-accent" />
                </div>
                <div>
                  <p className="text-sm text-brand-ink/60 uppercase tracking-wider font-semibold">Ring Us</p>
                  <p className="font-medium">(786) 823-4709</p>
                </div>
              </div>
              <div className="flex items-center gap-4 text-brand-ink">
                <div className="w-12 h-12 bg-brand-sand flex items-center justify-center rounded-md">
                  <Mail className="w-5 h-5 text-brand-accent" />
                </div>
                <div>
                  <p className="text-sm text-brand-ink/60 uppercase tracking-wider font-semibold">Email Us</p>
                  <p className="font-medium">info@calyxconcierge.com</p>
                </div>
              </div>
              <div className="flex items-center gap-4 text-brand-ink">
                <div className="w-12 h-12 bg-brand-sand flex items-center justify-center rounded-md">
                  <MapPin className="w-5 h-5 text-brand-accent" />
                </div>
                <div>
                  <p className="text-sm text-brand-ink/60 uppercase tracking-wider font-semibold">Coverage</p>
                  <p className="font-medium">Serving the greater SWFL area</p>
                </div>
              </div>
              <div className="flex items-center gap-4 text-brand-ink">
                <div className="w-12 h-12 bg-brand-sand flex items-center justify-center rounded-md">
                  <Globe className="w-5 h-5 text-brand-accent" />
                </div>
                <div>
                  <p className="text-sm text-brand-ink/60 uppercase tracking-wider font-semibold">Languages</p>
                  <p className="font-medium">English & Español</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2">
            <form className="bg-white p-8 md:p-12 rounded-xl shadow-[0_10px_30px_rgba(107,112,92,0.05)] border border-brand-accent/10" onSubmit={onSubmit}>
              <h3 className="text-2xl font-serif text-brand-accent mb-8">Send an Inquiry</h3>
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-semibold tracking-wide uppercase text-brand-ink/80 mb-2">First Name</label>
                    <input type="text" id="firstName" name="firstName" className="w-full px-4 py-3 border border-brand-accent/20 bg-brand-bg/50 focus:outline-none focus:border-brand-accent focus:bg-white transition-colors" placeholder="Jane" />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-semibold tracking-wide uppercase text-brand-ink/80 mb-2">Last Name</label>
                    <input type="text" id="lastName" name="lastName" className="w-full px-4 py-3 border border-brand-accent/20 bg-brand-bg/50 focus:outline-none focus:border-brand-accent focus:bg-white transition-colors" placeholder="Doe" />
                  </div>
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold tracking-wide uppercase text-brand-ink/80 mb-2">Phone Number</label>
                  <input type="tel" id="phone" name="phone" className="w-full px-4 py-3 border border-brand-accent/20 bg-brand-bg/50 focus:outline-none focus:border-brand-accent focus:bg-white transition-colors" placeholder="(555) 555-6655" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold tracking-wide uppercase text-brand-ink/80 mb-2">Email Address</label>
                  <input type="email" id="email" name="email" className="w-full px-4 py-3 border border-brand-accent/20 bg-brand-bg/50 focus:outline-none focus:border-brand-accent focus:bg-white transition-colors" placeholder="jane@example.com" />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-semibold tracking-wide uppercase text-brand-ink/80 mb-2">How can we assist?</label>
                  <textarea id="message" name="message" rows={4} className="w-full px-4 py-3 border border-brand-accent/20 bg-brand-bg/50 focus:outline-none focus:border-brand-accent focus:bg-white transition-colors" placeholder="Tell us about your property..."></textarea>
                </div>
                <button className="w-full py-4 bg-brand-accent text-white rounded font-medium text-sm tracking-wide uppercase hover:bg-opacity-90 transition-colors mt-2">
                  Submit Inquiry
                </button>
                <span>{result}</span>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-brand-bg text-brand-ink/60 py-16 px-6 border-t border-black/10 text-sm">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
            <div>
              <Logo isScrolled={true} className="mb-4" />
              <p className="max-w-xs leading-relaxed">
                Southwest Florida's premier Professional Home Watch and property care specialists. Providing peace of mind for absent homeowners.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-brand-ink mb-4 uppercase tracking-wider text-xs">Service Areas</h4>
              <ul className="space-y-2">
                <li>Cape Coral Home Watch</li>
                <li>Fort Myers Property Care</li>
                <li>Naples Estate Oversight</li>
                <li>Bonita Springs & Marco Island</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-brand-ink mb-4 uppercase tracking-wider text-xs">Contact</h4>
              <ul className="space-y-2">
                <li>(786) 823-4709</li>
                <li>hello@calyxconcierge.com</li>
                <li className="italic font-serif text-brand-accent">Bilingual: English & Español</li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-black/5 flex flex-col md:flex-row justify-between items-center gap-6">
            <div>
              &copy; {new Date().getFullYear()} Calyx Concierge Property Management
            </div>
            <div className="flex gap-6">
              <a href="#about" onClick={(e) => { e.preventDefault(); scrollToSection('about'); }} className="hover:text-brand-accent">About</a>
              <a href="#services" onClick={(e) => { e.preventDefault(); scrollToSection('services'); }} className="hover:text-brand-accent">Services</a>
              <a href="#contact" onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }} className="hover:text-brand-accent">Contact</a>
            </div>
          </div>
        </div>
      </footer>

      {/* Service Modal */}
      <AnimatePresence>
        {selectedService && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedService(null)}
              className="absolute inset-0 bg-brand-ink/40 backdrop-blur-sm"
            />
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="bg-white relative z-10 w-full max-w-2xl rounded-2xl shadow-2xl overflow-hidden border border-brand-accent/10 max-h-[90vh] flex flex-col"
            >
              <div className="p-8 md:p-12 overflow-y-auto">
                <button 
                  onClick={() => setSelectedService(null)}
                  className="absolute top-6 right-6 p-2 text-brand-ink/40 hover:text-brand-ink bg-brand-sand/50 hover:bg-brand-sand rounded-full transition-colors"
                >
                  <X size={20} />
                </button>
                
                <div className="w-16 h-16 bg-brand-sand rounded-xl flex items-center justify-center mb-8 shrink-0">
                  <selectedService.icon className="w-8 h-8 text-brand-accent" />
                </div>
                
                <h3 className="text-3xl font-serif font-normal text-brand-ink mb-4">{selectedService.title}</h3>
                <p className="text-lg text-brand-ink/80 leading-relaxed mb-8">
                  {selectedService.extendedDescription}
                </p>
                
                <div className="space-y-4">
                  <h4 className="text-sm font-semibold tracking-[0.2em] uppercase text-brand-accent">Included Services</h4>
                  <ul className="space-y-3">
                    {selectedService.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-4 text-brand-ink/80">
                        <div className="mt-2 w-1.5 h-1.5 rounded-full bg-brand-accent shrink-0" />
                        <span className="leading-snug">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              
              <div className="bg-brand-bg p-6 border-t border-black/5 flex justify-end">
                <button 
                  onClick={() => {
                    setSelectedService(null);
                    setTimeout(() => scrollToSection('contact'), 300);
                  }}
                  className="px-6 py-3 bg-brand-accent text-white rounded font-medium text-sm tracking-wide uppercase hover:bg-opacity-90 transition-colors"
                >
                  Inquire Now
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}


import React from 'react';
import { ChevronDown, Instagram, Twitter, Mail, ArrowLeft } from 'lucide-react';
import { Link } from "react-router-dom";


const AboutUs = () => {
  return (
    <div className="bg-black text-white min-h-screen">
      {/* Navigation */}
      <nav className="flex justify-between items-center px-6 py-4 md:px-12">
  <div className="flex items-center space-x-8">
    <Link to="/" className="flex items-center space-x-4 group">
      <ArrowLeft className="w-5 h-5 group-hover:text-red-500 transition-colors" />
      <span className="text-sm group-hover:text-red-500 transition-colors">Home</span>
    </Link>
    <h1 className="text-xl font-light">Eclypse®</h1>
  </div>
</nav>


      {/* Hero Section */}
      <section className="relative h-[70vh] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-70"></div>
        <img 
          src="https://images.pexels.com/photos/6068960/pexels-photo-6068960.jpeg" 
          alt="Fashion designer working" 
          className="w-full h-full object-cover"
        />
        <div className="absolute bottom-0 left-0 p-6 md:p-12 w-full md:w-2/3">
          <h1 className="text-4xl md:text-6xl font-light mb-4">About Eclypse</h1>
          <p className="text-lg md:text-xl font-light mb-8 leading-relaxed">
            Founded in a bold interplay of avant-garde vision and timelessly elegant design, 
            our label brings life to clothing with sophisticated simplicity and striking character.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="px-6 md:px-12 py-20 grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="flex flex-col justify-center">
          <h2 className="text-3xl font-light mb-8">Our Story</h2>
          <p className="mb-6 leading-relaxed">
            Eclypse began in 2015 as the vision of creative director Sofia Ellington, 
            who sought to create pieces that exist at the intersection of artistic expression 
            and everyday functionality.
          </p>
          <p className="mb-6 leading-relaxed">
            What started as a small atelier in London has evolved into an internationally 
            recognized label, known for its distinctive silhouettes and commitment to 
            sustainable practices.
          </p>
          <p className="leading-relaxed">
            Every collection tells a story—a narrative of contemporary culture, architectural 
            influence, and the ever-evolving definition of modern elegance.
          </p>
        </div>
        <div className="relative h-[500px] overflow-hidden">
          <img 
            src="https://images.pexels.com/photos/5699516/pexels-photo-5699516.jpeg" 
            alt="Fashion designer studio" 
            className="w-full h-full object-cover"
          />
        </div>
      </section>

      {/* Our Values */}
      <section className="bg-neutral-900 px-6 md:px-12 py-20">
        <h2 className="text-3xl font-light mb-12 text-center">Our Values</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-8 border-t border-neutral-700 hover:border-red-500 transition-colors">
            <h3 className="text-xl font-medium mb-4">Artistry</h3>
            <p className="text-neutral-300 leading-relaxed">
              We approach each design as an artistic endeavor, blending 
              craftsmanship with creative vision to produce pieces that transcend 
              seasonal trends.
            </p>
          </div>
          <div className="p-8 border-t border-neutral-700 hover:border-red-500 transition-colors">
            <h3 className="text-xl font-medium mb-4">Sustainability</h3>
            <p className="text-neutral-300 leading-relaxed">
              Our commitment to the planet is unwavering. We utilize ethical production 
              methods and source materials that minimize environmental impact without 
              compromising quality.
            </p>
          </div>
          <div className="p-8 border-t border-neutral-700 hover:border-red-500 transition-colors">
            <h3 className="text-xl font-medium mb-4">Innovation</h3>
            <p className="text-neutral-300 leading-relaxed">
              We continuously push boundaries, exploring new techniques and materials 
              that challenge conventional fashion paradigms and redefine modern luxury.
            </p>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="px-6 md:px-12 py-20">
        <h2 className="text-3xl font-light mb-12">Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="group">
            <div className="relative overflow-hidden h-[400px] mb-4">
              <img 
                src="https://images.pexels.com/photos/7821485/pexels-photo-7821485.jpeg" 
                alt="Sofia Ellington" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>
            <h3 className="text-xl font-medium">Sofia Ellington</h3>
            <p className="text-neutral-400">Founder & Creative Director</p>
          </div>
          <div className="group">
            <div className="relative overflow-hidden h-[400px] mb-4">
              <img 
                src="https://images.pexels.com/photos/6975523/pexels-photo-6975523.jpeg" 
                alt="Marcus Chen" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>
            <h3 className="text-xl font-medium">Marcus Chen</h3>
            <p className="text-neutral-400">Head of Design</p>
          </div>
          <div className="group">
            <div className="relative overflow-hidden h-[400px] mb-4">
              <img 
                src="https://images.pexels.com/photos/5082976/pexels-photo-5082976.jpeg" 
                alt="Amara Jones" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>
            <h3 className="text-xl font-medium">Amara Jones</h3>
            <p className="text-neutral-400">Production Director</p>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="bg-neutral-900 px-6 md:px-12 py-20">
        <h2 className="text-3xl font-light mb-12">Our Journey</h2>
        <div className="space-y-8">
          <div className="relative pl-8 border-l border-neutral-700 py-4">
            <div className="absolute left-[-8px] top-5 w-4 h-4 bg-red-500 rounded-full"></div>
            <h3 className="text-xl font-medium mb-2">2015</h3>
            <p className="text-neutral-300">
              Eclypse was founded in London, introducing its first capsule collection of minimalist silhouettes.
            </p>
          </div>
          <div className="relative pl-8 border-l border-neutral-700 py-4">
            <div className="absolute left-[-8px] top-5 w-4 h-4 bg-red-500 rounded-full"></div>
            <h3 className="text-xl font-medium mb-2">2018</h3>
            <p className="text-neutral-300">
              Expanded to international markets and launched our first sustainable fabric initiative.
            </p>
          </div>
          <div className="relative pl-8 border-l border-neutral-700 py-4">
            <div className="absolute left-[-8px] top-5 w-4 h-4 bg-red-500 rounded-full"></div>
            <h3 className="text-xl font-medium mb-2">2021</h3>
            <p className="text-neutral-300">
              Opened flagship stores in New York and Paris, bringing our distinctive aesthetic to global fashion capitals.
            </p>
          </div>
          <div className="relative pl-8 border-l border-neutral-700 py-4">
            <div className="absolute left-[-8px] top-5 w-4 h-4 bg-red-500 rounded-full"></div>
            <h3 className="text-xl font-medium mb-2">2025</h3>
            <p className="text-neutral-300">
              Celebrating a decade of design with our anniversary collection and commitment to fully circular production.
            </p>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="px-6 md:px-12 py-20">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-light mb-4">Join Our World</h2>
          <p className="mb-8 text-neutral-300">
            Subscribe to receive exclusive updates, collection previews, and insights into our creative process.
          </p>
          <div className="flex flex-col md:flex-row gap-4">
            <input 
              type="email" 
              placeholder="Your email address" 
              className="bg-transparent border-b border-neutral-700 px-4 py-2 flex-grow focus:outline-none focus:border-red-500"
            />
            <button className="bg-red-500 hover:bg-red-600 px-8 py-2 transition-colors text-sm uppercase tracking-wider">
              Subscribe
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-neutral-800 px-6 md:px-12 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-light mb-4">Eclypse®</h3>
            <p className="text-neutral-400 leading-relaxed">
              Contemporary fashion rooted in artistic expression and timeless elegance.
            </p>
          </div>
          <div>
            <h4 className="text-sm uppercase tracking-wider mb-4">Quick Links</h4>
            <div className="space-y-2">
              <div className="flex items-center justify-between border-b border-neutral-800 py-2">
                <a href="#" className="hover:text-red-500 transition-colors">Collections</a>
                <ChevronDown size={16} />
              </div>
              <div className="flex items-center justify-between border-b border-neutral-800 py-2">
                <a href="#" className="hover:text-red-500 transition-colors">Sustainability</a>
                <ChevronDown size={16} />
              </div>
              <div className="flex items-center justify-between border-b border-neutral-800 py-2">
                <a href="#" className="hover:text-red-500 transition-colors">Press</a>
                <ChevronDown size={16} />
              </div>
              <div className="flex items-center justify-between border-b border-neutral-800 py-2">
                <a href="#" className="hover:text-red-500 transition-colors">Careers</a>
                <ChevronDown size={16} />
              </div>
            </div>
          </div>
          <div>
            <h4 className="text-sm uppercase tracking-wider mb-4">Contact</h4>
            <p className="text-neutral-400 mb-4">
              24 Fashion Avenue<br />
              London, UK<br />
              info@eclypse.com<br />
              +44 20 7123 4567
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-red-500 transition-colors"><Instagram size={20} /></a>
              <a href="#" className="hover:text-red-500 transition-colors"><Twitter size={20} /></a>
              <a href="#" className="hover:text-red-500 transition-colors"><Mail size={20} /></a>
            </div>
          </div>
        </div>
        <div className="mt-12 pt-6 border-t border-neutral-800 text-sm text-neutral-500">
          <p>© 2025 Eclypse. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default AboutUs;
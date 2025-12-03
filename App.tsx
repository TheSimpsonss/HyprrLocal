import React from 'react';
import Navbar from './components/Navbar';
import { 
  ArrowRight, 
  Zap, 
  Store, 
  Layers, 
  CheckCircle, 
  ShoppingBag, 
  Twitter, 
  Instagram, 
  Linkedin, 
  MapPin, 
  Phone, 
  Mail 
} from 'lucide-react';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans">
      <Navbar />
      
      <main className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-16 lg:pt-36 w-full">
        {/* Hero Section */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center py-12 lg:py-20 mb-12">
          
          {/* Left Column: Text Content */}
          <div className="space-y-8 text-center lg:text-left order-2 lg:order-1">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-indigo-50 text-indigo-700 font-medium text-sm border border-indigo-100">
              <span className="relative flex h-3 w-3 mr-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-indigo-600"></span>
              </span>
              Now live in Bangalore
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold text-slate-900 leading-[1.1] tracking-tight">
              Your City's <span className="text-indigo-600">Quick Bazaar.</span><br />
              Direct from Local Shops.
            </h1>
            
            <p className="text-lg md:text-xl text-slate-600 leading-relaxed max-w-xl mx-auto lg:mx-0">
              Order Electronics, Fashion, and Groceries from the stores you trust. 
              No dark stores—just pure local commerce delivered in 15 minutes.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
              <button className="w-full sm:w-auto px-8 py-4 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-full shadow-xl shadow-indigo-600/20 transition-all duration-300 flex items-center justify-center gap-2 group">
                Start Shopping 
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="w-full sm:w-auto px-8 py-4 bg-transparent hover:bg-white text-slate-600 font-semibold rounded-full border-2 border-slate-200 hover:border-indigo-600 hover:text-indigo-600 transition-all duration-300">
                Register Your Shop
              </button>
            </div>
            
            <div className="flex items-center justify-center lg:justify-start gap-6 text-sm text-slate-500 pt-4">
              <div className="flex items-center gap-2">
                <div className="flex -space-x-2">
                   {[1,2,3,4].map(i => (
                     <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-slate-200 overflow-hidden">
                       <img src={`https://i.pravatar.cc/100?img=${i + 10}`} alt="User" className="w-full h-full object-cover" />
                     </div>
                   ))}
                </div>
                <span>5000+ Happy Locals</span>
              </div>
            </div>
          </div>

          {/* Right Column: Visual */}
          <div className="relative order-1 lg:order-2">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white transform rotate-2 hover:rotate-0 transition-transform duration-500">
              <img 
                src="https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=1000&auto=format&fit=crop" 
                alt="Local shopping delivery" 
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
            </div>

            {/* Floating Badge */}
            <div className="absolute top-8 -left-4 md:-left-12 bg-white/95 backdrop-blur-sm p-4 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-white/50 flex items-center gap-4 animate-[bounce_3s_infinite]">
              <div className="bg-orange-500 p-3 rounded-xl text-white shadow-lg shadow-orange-500/30">
                <Zap size={24} fill="currentColor" />
              </div>
              <div className="pr-2">
                <p className="text-xs text-slate-500 font-bold uppercase tracking-wider mb-0.5">Speed</p>
                <h3 className="text-lg font-bold text-slate-900 leading-none">15 Min Delivery</h3>
              </div>
            </div>

            {/* Secondary Badge - Trust */}
            <div className="absolute bottom-12 -right-4 md:-right-8 bg-white/95 backdrop-blur-sm p-4 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-white/50 flex items-center gap-3">
               <div className="bg-indigo-600 p-2 rounded-full text-white">
                 <Store size={20} />
               </div>
               <div>
                 <p className="font-bold text-slate-900 text-sm">100% Local Inventory</p>
               </div>
            </div>
          </div>
        </section>

        {/* Features & Categories Section */}
        <section className="py-8 lg:py-12">
          
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Empowering Your Neighborhood</h2>
            <p className="text-slate-600 max-w-2xl mx-auto text-lg">
              We're building a community where commerce flows freely between neighbors.
            </p>
          </div>

          {/* Part A: How We Work (Cards) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            <FeatureCard 
              icon={<Layers className="text-indigo-600" size={32} />}
              title="Shop Everything"
              description="From latest gadgets to fresh veggies, find it all in one app."
            />
            <FeatureCard 
              icon={<Store className="text-indigo-600" size={32} />}
              title="Support Local"
              description="We connect you directly to local vendors. Your purchase grows their business."
            />
            <FeatureCard 
              icon={<Zap className="text-indigo-600" size={32} fill="currentColor" />}
              title="Lightning Fast"
              description="Delivery partners pick up directly from the shop and bring it to your door."
            />
          </div>

          {/* Part B: Shop by Category (Pills) */}
          <div className="space-y-6">
            <div className="flex items-center justify-between px-2">
              <h3 className="text-2xl font-bold text-slate-900">Shop by Category</h3>
              <a href="#" className="text-indigo-600 font-medium hover:text-indigo-700 hidden sm:block">View all categories</a>
            </div>
            
            <div className="flex gap-4 overflow-x-auto pb-6 scrollbar-hide -mx-4 px-4 sm:mx-0 sm:px-0">
              {[
                "Electronics", 
                "Men's Fashion", 
                "Women's Fashion", 
                "Grocery", 
                "Medicines", 
                "Pet Supplies"
              ].map((category) => (
                <button 
                  key={category} 
                  className="whitespace-nowrap px-8 py-3 bg-slate-100 text-slate-700 font-medium rounded-full hover:bg-orange-500 hover:text-white transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Vendor Partnership Section */}
      <section className="bg-gradient-to-r from-indigo-900 to-indigo-700 py-20 w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            
            {/* Left Column: Copy */}
            <div className="space-y-8 text-center lg:text-left">
              <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">
                Grow Your Shop Online.<br/>
                <span className="text-indigo-200">Start Selling in Minutes.</span>
              </h2>
              <div className="space-y-6 inline-block text-left">
                {['Zero Commission for 1st Month', 'Daily Payouts', 'Reach Customers City-wide'].map((item, index) => (
                   <div key={index} className="flex items-center gap-4">
                     <div className="bg-orange-500/20 p-1 rounded-full">
                       <CheckCircle className="text-orange-500 flex-shrink-0" size={24} fill="currentColor" stroke="white" />
                     </div>
                     <span className="text-xl text-indigo-50 font-medium">{item}</span>
                   </div>
                ))}
              </div>
            </div>

            {/* Right Column: Form */}
            <div className="bg-white rounded-2xl p-8 shadow-2xl border border-indigo-100">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Partner Registration</h3>
              <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                  <div>
                     <label htmlFor="shopName" className="block text-sm font-semibold text-slate-700 mb-2">Shop Name</label>
                     <input 
                        type="text" 
                        id="shopName" 
                        required 
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-indigo-600 focus:ring-2 focus:ring-indigo-600/20 outline-none transition-all placeholder:text-slate-400" 
                        placeholder="e.g. Gupta Electronics" 
                      />
                  </div>
                  <div>
                     <label htmlFor="mobile" className="block text-sm font-semibold text-slate-700 mb-2">Owner Mobile Number</label>
                     <input 
                        type="tel" 
                        id="mobile" 
                        required 
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-indigo-600 focus:ring-2 focus:ring-indigo-600/20 outline-none transition-all placeholder:text-slate-400" 
                        placeholder="+91 98765 43210" 
                      />
                  </div>
                  <div>
                     <label htmlFor="category" className="block text-sm font-semibold text-slate-700 mb-2">Business Category</label>
                     <div className="relative">
                        <select 
                          id="category" 
                          required 
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-indigo-600 focus:ring-2 focus:ring-indigo-600/20 outline-none transition-all appearance-none bg-white text-slate-700"
                        >
                          <option value="">Select a category</option>
                          <option value="grocery">Grocery & Kirana</option>
                          <option value="electronics">Electronics & Mobile</option>
                          <option value="fashion">Fashion & Clothing</option>
                          <option value="pharmacy">Pharmacy & Health</option>
                          <option value="food">Restaurant & Sweets</option>
                        </select>
                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-slate-500">
                          <svg className="h-4 w-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                        </div>
                     </div>
                  </div>
                  <button type="submit" className="w-full py-4 bg-orange-500 hover:bg-orange-600 text-white font-bold text-lg rounded-full shadow-lg shadow-orange-500/20 transition-all transform hover:-translate-y-1 active:translate-y-0 mt-2">
                    Join the Waitlist
                  </button>
                  <p className="text-xs text-center text-slate-500 mt-4">
                    By joining, you agree to our <a href="#" className="underline hover:text-indigo-600">Terms & Conditions</a>.
                  </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-slate-900 text-slate-300 pt-16 pb-8 w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            
            {/* Brand Column */}
            <div className="space-y-6">
              <div className="flex items-center gap-2">
                 <div className="bg-indigo-600 p-2 rounded-xl text-white">
                    <ShoppingBag size={20} />
                 </div>
                 <span className="text-2xl font-bold text-white tracking-tight">Hyperlocal</span>
              </div>
              <p className="text-slate-400 leading-relaxed">
                The Heart of Your City's Commerce. Direct from trusted local shops to your doorstep.
              </p>
              <div className="flex gap-4">
                <a href="#" className="p-2.5 bg-slate-800 rounded-full hover:bg-indigo-600 text-white transition-all hover:-translate-y-1">
                  <Twitter size={18} />
                </a>
                <a href="#" className="p-2.5 bg-slate-800 rounded-full hover:bg-pink-600 text-white transition-all hover:-translate-y-1">
                  <Instagram size={18} />
                </a>
                <a href="#" className="p-2.5 bg-slate-800 rounded-full hover:bg-blue-600 text-white transition-all hover:-translate-y-1">
                  <Linkedin size={18} />
                </a>
              </div>
            </div>

            {/* Shop Column */}
            <div>
              <h3 className="text-white font-bold text-lg mb-6">Shop</h3>
              <ul className="space-y-3">
                <li><a href="#electronics" className="hover:text-indigo-400 transition-colors">Electronics</a></li>
                <li><a href="#grocery" className="hover:text-indigo-400 transition-colors">Grocery</a></li>
                <li><a href="#fashion" className="hover:text-indigo-400 transition-colors">Fashion</a></li>
                <li><a href="#pharmacy" className="hover:text-indigo-400 transition-colors">Pharmacy</a></li>
              </ul>
            </div>

            {/* Company Column */}
            <div>
              <h3 className="text-white font-bold text-lg mb-6">Company</h3>
              <ul className="space-y-3">
                <li><a href="#" className="hover:text-indigo-400 transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-indigo-400 transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-indigo-400 transition-colors">Partner Support</a></li>
                <li><a href="#" className="hover:text-indigo-400 transition-colors">Terms & Privacy</a></li>
              </ul>
            </div>

            {/* Contact Column */}
            <div>
              <h3 className="text-white font-bold text-lg mb-6">Contact</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <MapPin size={20} className="text-indigo-500 shrink-0 mt-0.5" />
                  <span>123 Market Street, Koramangala, Bangalore - 560034</span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone size={20} className="text-indigo-500 shrink-0" />
                  <span>+91 80 1234 5678</span>
                </li>
                <li className="flex items-center gap-3">
                  <Mail size={20} className="text-indigo-500 shrink-0" />
                  <span>support@hyperlocal.in</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-slate-800 pt-8 text-center text-sm text-slate-500">
            <p>&copy; 2025 Hyperlocal. Made for Local India.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

const FeatureCard: React.FC<{icon: React.ReactNode, title: string, description: string}> = ({ icon, title, description }) => (
  <div className="bg-white p-8 rounded-2xl shadow-lg border border-slate-100 hover:-translate-y-2 transition-transform duration-300">
    <div className="mb-6 bg-indigo-50 w-16 h-16 rounded-2xl flex items-center justify-center">
      {icon}
    </div>
    <h3 className="text-xl font-bold text-slate-900 mb-3">{title}</h3>
    <p className="text-slate-600 leading-relaxed">{description}</p>
  </div>
);

export default App;
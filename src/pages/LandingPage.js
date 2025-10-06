import { Sparkles, TrendingUp, Users, Zap, ChevronRight } from 'lucide-react';

const LandingPage = ({ onGetStarted }) => {
  const features = [
    { icon: Sparkles, title: "AI-Powered", desc: "Smart career recommendations" },
    { icon: TrendingUp, title: "Growth Tracking", desc: "Monitor your progress" },
    { icon: Users, title: "Community", desc: "Connect with mentors" },
    { icon: Zap, title: "Fast Results", desc: "Get your roadmap instantly" }
  ];

  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="min-h-[90vh] flex items-center justify-center px-4 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/10 to-transparent"></div>
        
        <div className="max-w-6xl mx-auto text-center z-10">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="text-white">Design Your</span>
            <span className="text-yellow-500 block mt-2">Career Journey</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Transform your aspirations into actionable steps with our intelligent 
            career roadmap generator.
          </p>
          
          <button 
            onClick={onGetStarted}
            className="group bg-yellow-500 text-black px-8 py-4 rounded-full font-semibold text-lg hover:bg-yellow-400 transition-all transform hover:scale-105 flex items-center mx-auto"
          >
            Get Started
            <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-yellow-500">
            Why Choose CareerPath?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div key={index} 
                   className="bg-gray-900 border border-yellow-500/20 rounded-xl p-6 hover:border-yellow-500/50 transition-colors">
                <feature.icon className="w-12 h-12 text-yellow-500 mb-4" />
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-400 text-sm">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};


export default LandingPage;
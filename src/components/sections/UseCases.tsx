import React from 'react';
import { ArrowRight, TrendingUp, Clock, DollarSign } from 'lucide-react';
import { Button } from '@/components/ui/button';

const UseCases = () => {
  const cases = [
    {
      title: "E-commerce & Retail",
      challenge: "Manual customer service and low conversion rates",
      solution: "Deploying an AI-powered customer service agent with personalized recommendations.",
      results: [ { metric: "Revenue", value: "Increase", icon: TrendingUp }, { metric: "Conversion", value: "Higher", icon: ArrowRight }, { metric: "Response Time", value: "Instant", icon: Clock } ],
      color: "from-prometheus-blue to-prometheus-cyan"
    },
    {
      title: "Logistics & Supply Chain",
      challenge: "Inefficient delivery routes and high operational costs",
      solution: "Implementing an AI agent for real-time route optimization and logistics management.",
      results: [ { metric: "Miles Saved", value: "Millions", icon: TrendingUp }, { metric: "Annual Savings", value: "$$$", icon: DollarSign }, { metric: "Efficiency", value: "Major Gain", icon: ArrowRight } ],
      color: "from-orange-400 to-prometheus-emerald"
    }
  ];

  return (
    <section id="cases" className="py-20 bg-gradient-to-b from-prometheus-dark to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Example <span className="text-gradient">Use Cases</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            We build solutions that achieve transformational results across multiple industries.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {cases.map((useCase, index) => (
            <div key={index} className="group p-8 bg-white/5 border border-white/10 rounded-xl backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
              <h3 className="text-2xl font-bold text-white mb-6">{useCase.title}</h3>
              <div className="mb-6">
                <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wide mb-2">Common Challenge</h4>
                <p className="text-gray-300 mb-4">{useCase.challenge}</p>
                <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wide mb-2">Our Solution</h4>
                <p className="text-gray-300">{useCase.solution}</p>
              </div>
              {/* ... results mapping ... */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UseCases;

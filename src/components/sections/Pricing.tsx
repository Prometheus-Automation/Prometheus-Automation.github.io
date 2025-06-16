import React from 'react';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';

const Pricing = () => {
  const tiers = [
    {
      name: "Agent Starter",
      price: "$1,500",
      description: "Make consistent output inevitable. We'll deploy a core agent to handle one critical task with flawless precision.",
      features: [
        "One Custom AI Agent",
        "Core Workflow Automation",
        "Strategy & Mapping Session",
        "Standard Support"
      ],
      cta: "Book a Call",
      featured: false,
    },
    {
      name: "Growth Partner",
      price: "$4,000",
      description: "Make your sales pipeline inevitable. We'll deploy an integrated suite of agents to run a core business system on autopilot.",
      features: [
        "Everything in Starter, plus:",
        "Multi-Agent System (up to 3)",
        "Lead Generation / Support System",
        "Priority Support & Optimization",
        "Monthly Performance Reporting"
      ],
      cta: "Start My Transformation",
      featured: true,
    },
    {
      name: "Performance Scale",
      price: "Custom",
      description: "A fully custom ecosystem with deep API integrations designed to transform an entire business unit.",
      features: [
        "Everything in Growth, plus:",
        "Unlimited Agents & Workflows",
        "Dedicated Account Strategist",
        "Custom Integrations",
        "Team Training & Onboarding"
      ],
      cta: "Book a Consultation",
      featured: false,
    }
  ];

  return (
    <section id="offers" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Choose Your Automation Tier</h2>
          <p className="text-lg text-gray-400">Transparent pricing that scales with your needs. No hidden fees, no surprises. Just clear value.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto items-stretch">
          {tiers.map((tier) => (
            <div key={tier.name} className={`bg-white/5 border rounded-xl flex flex-col p-8 ${tier.featured ? 'border-blue-500 transform md:scale-105 shadow-2xl' : 'border-white/10'}`}>
              {tier.featured && (
                <div className="absolute top-0 right-4 -mt-4">
                  <span className="bg-blue-600 text-white text-xs uppercase tracking-wider px-4 py-1 rounded-full">Most Popular</span>
                </div>
              )}
              <div className="flex-grow">
                <h3 className="text-xl font-bold text-white mb-2">{tier.name}</h3>
                <p className="text-gray-400 mb-6 h-20">{tier.description}</p>
                <div className="my-6 text-center">
                  <span className="text-4xl font-bold text-white">{tier.price}</span>
                  {tier.price !== 'Custom' && <span className="text-gray-500">/mo</span>}
                </div>
                <ul className="space-y-4 mb-8">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-center">
                      <Check className="h-5 w-5 text-blue-500 mr-3" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <Button size="lg" className={`w-full mt-auto ${tier.featured ? 'bg-blue-600 hover:bg-blue-700' : 'bg-white/10 hover:bg-white/20'}`}>{tier.cta}</Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;

import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export interface RelatedLink {
  title: string;
  href: string;
  description: string;
}

interface RelatedServicesProps {
  links: RelatedLink[];
}

const RelatedServices: React.FC<RelatedServicesProps> = ({ links }) => {
  if (!links || links.length === 0) return null;

  return (
    <section className="py-20 bg-black border-t border-white/5">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-12 lg:px-20">
        <h2 className="text-3xl font-italiana text-white mb-12 text-center">Related Services</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {links.map((link, index) => (
            <Link
              key={index}
              href={link.href}
              className="group p-6 border border-white/10 hover:border-gold-400/30 hover:bg-white/[0.02] transition-all duration-500"
            >
              <h3 className="text-lg font-italiana text-white mb-2 group-hover:text-gold-400 transition-colors">
                {link.title}
              </h3>
              <p className="text-white/50 font-manrope text-sm leading-relaxed mb-4">
                {link.description}
              </p>
              <div className="flex items-center text-gold-400 text-sm font-manrope">
                <span>View</span>
                <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RelatedServices;

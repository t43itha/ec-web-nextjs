import React from 'react';
import { Shield } from 'lucide-react';
import { TFL_LICENCE } from '@/app/lib/config';

interface TfLBadgeProps {
  variant?: 'inline' | 'block';
}

const TfLBadge: React.FC<TfLBadgeProps> = ({ variant = 'inline' }) => {
  if (variant === 'block') {
    return (
      <div className="flex items-center gap-3 p-4 border border-white/10 bg-white/[0.02]">
        <Shield className="w-5 h-5 text-gold-400 flex-shrink-0" />
        <div>
          <p className="text-xs uppercase tracking-widest text-white/40">Licensed Operator</p>
          <p className="text-sm text-white/70 font-manrope">TfL Private Hire Licence {TFL_LICENCE}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex items-center gap-2 text-white/40">
      <Shield className="w-3.5 h-3.5" />
      <span className="text-xs font-manrope tracking-wider">TfL Licence {TFL_LICENCE}</span>
    </div>
  );
};

export default TfLBadge;

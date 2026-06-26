import { personal } from '../data/portfolio';
import { Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white py-8 px-6">
      <div className="w-full flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-400 text-sm">
        <div className="font-mono text-brand-500 font-semibold">
          &lt;{personal.githubUsername} /&gt;
        </div>
        <div className="flex items-center gap-1.5">
          Built with <Heart size={13} className="text-red-400 fill-red-400" /> using React & Tailwind CSS
        </div>
        <div>© {new Date().getFullYear()} {personal.name}</div>
      </div>
    </footer>
  );
}

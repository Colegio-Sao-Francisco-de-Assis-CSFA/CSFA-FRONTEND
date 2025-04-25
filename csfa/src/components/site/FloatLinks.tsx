import { FC } from 'react';
import Link from 'next/link';
import { Youtube, Facebook, Instagram, MessageSquare } from 'lucide-react';

const FloatLinks: FC = () => {
  return (
    <div className="fixed bottom-6 right-6 flex flex-col gap-3 z-50">
      {/* YouTube */}
      <Link
        href="/youtube"
        className="flex items-center justify-center w-12 h-12 rounded-full bg-red-500 text-white shadow-lg hover:brightness-110 transition-all"
        aria-label="YouTube"
      >
        <Youtube size={20} />
      </Link>

      {/* Facebook */}
      <Link
        href="/facebook"
        className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-600 text-white shadow-lg hover:brightness-110 transition-all"
        aria-label="Facebook"
      >
        <Facebook size={20} />
      </Link>

      {/* Instagram */}
      <Link
        href="/instagram"
        className="flex items-center justify-center w-12 h-12 rounded-full bg-pink-500 text-white shadow-lg hover:brightness-110 transition-all"
        aria-label="Instagram"
      >
        <Instagram size={20} />
      </Link>

      {/* Message/Chat */}
      <Link
        href="/contato"
        className="flex items-center justify-center w-12 h-12 rounded-full bg-green-500 text-white shadow-lg hover:brightness-110 transition-all"
        aria-label="Chat"
      >
        <MessageSquare size={20} />
      </Link>
    </div>
  );
};

export default FloatLinks;
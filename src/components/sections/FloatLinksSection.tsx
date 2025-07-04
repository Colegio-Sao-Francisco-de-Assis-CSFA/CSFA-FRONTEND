// components/sections/FloatLinksSection.tsx
import { FC } from 'react';
// import { Youtube, Facebook, Instagram, MessageSquare } from 'lucide-react'; // <-- REMOVIDO IMPORTS DO LUCIDE-REACT
import {
    FloatLinksRoot,
    FloatLinkItem,
} from '@/components/site/FloatLinks';

const FloatLinksSection: FC = () => {
    return (
        <FloatLinksRoot>
            <FloatLinkItem
                href="https://www.youtube.com/@seucanal"
                label="YouTube"
                icon="simple-icons:youtubeshorts"
                backgroundColorClass="bg-red-500"
            />
            <FloatLinkItem
                href="https://www.facebook.com/suapagina"
                label="line-md:facebook"
                icon="mdi:facebook"
                backgroundColorClass="bg-blue-600"
            />
            <FloatLinkItem
                href="https://www.instagram.com/seuinstagram"
                label="Instagram"
                icon="ri:instagram-fill"
                backgroundColorClass="bg-pink-500"
            />
            <FloatLinkItem
                href="https://wa.me/seunumerodetelefone"
                label="Whatsapp"
                icon="mingcute:whatsapp-fill"
                backgroundColorClass="bg-green-500"
            />
        </FloatLinksRoot>
    );
};

export default FloatLinksSection;
// src/app/(pages)/o-colegio/contato/page.tsx
import { 
  ContactForm, 
  ContactInfo, 
  Map, 
  ContactReasons 
} from '@/components/contato';

export default function ContatoPage() {
    return (
        <div className="bg-white">
            <div className="container mx-auto px-4 py-20">
                <ContactReasons />
                <div className="grid lg:grid-cols-2 gap-16">
                    <div className="lg:pr-8">
                        <h1 className="text-4xl font-bold mb-4">Ou nos envie uma mensagem</h1>
                        <p className="text-lg text-gray-600 mb-8">
                            Preencha o formulário abaixo e nossa equipe responderá o mais breve possível.
                        </p>
                        <ContactForm />
                    </div>
                    <div className="space-y-8">
                        <div className="h-80">
                            <Map />
                        </div>
                        <ContactInfo />
                    </div>
                </div>
            </div>
        </div>
    );
}
import { FC } from 'react';
import Link from 'next/link';
import { Facebook, Instagram, Youtube, MessageSquare } from 'lucide-react';



const Footer: FC = () => {

  const year = new Date().getFullYear();

  return (
    <footer className="bg-blue-950 text-white py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Column 1 - School Info */}
          <div>
            <h2 className="font-semibold text-xl mb-4">Colégio Educacional</h2>
            <p className="text-gray-300 text-sm mb-6">
              Formando cidadãos do futuro com excelência e dedicação desde 1985.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-300 hover:text-white transition-colors">
                <Youtube size={20} />
              </Link>
              <Link href="#" className="text-gray-300 hover:text-white transition-colors">
                <Facebook size={20} />
              </Link>
              <Link href="#" className="text-gray-300 hover:text-white transition-colors">
                <Instagram size={20} />
              </Link>
              <Link href="#" className="text-gray-300 hover:text-white transition-colors">
                <MessageSquare size={20} />
              </Link>
            </div>
          </div>

          {/* Column 2 - Quick Links */}
          <div>
            <h2 className="font-semibold text-xl mb-4">Links Rápidos</h2>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-white transition-colors">
                  Inicio
                </Link>
              </li>
              <li>
                <Link href="/sobre" className="text-gray-300 hover:text-white transition-colors">
                  Segmentos
                </Link>
              </li>
              <li>
                <Link href="/cursos" className="text-gray-300 hover:text-white transition-colors">
                  Sobre nós
                </Link>
              </li>
              <li>
                <Link href="/noticias" className="text-gray-300 hover:text-white transition-colors">
                  Diferenciais
                </Link>
              </li>
              <li>
                <Link href="/contato" className="text-gray-300 hover:text-white transition-colors">
                  Contato
                </Link>
              </li>
              <li>
                <Link href="/contato" className="text-gray-300 hover:text-white transition-colors">
                  Acontece Csfa
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3 - Courses */}
          <div>
            <h2 className="font-semibold text-xl mb-4">Responsáveis</h2>
            <ul className="space-y-2">
              <li>
                <Link href="/cursos/educacao-infantil" className="text-gray-300 hover:text-white transition-colors">
                  Lista de materiais
                </Link>
              </li>
              <li>
                <Link href="/cursos/ensino-fundamental-i" className="text-gray-300 hover:text-white transition-colors">
                  Calendario escolar
                </Link>
              </li>
              <li>
                <Link href="/cursos/ensino-fundamental-ii" className="text-gray-300 hover:text-white transition-colors">
                  Uniformes
                </Link>
              </li>
              <li>
                <Link href="/cursos/ensino-medio" className="text-gray-300 hover:text-white transition-colors">
                  Metodologia de ensino
                </Link>
              </li>
              <li>
                <Link href="/cursos/ensino-medio" className="text-gray-300 hover:text-white transition-colors">
                  ClassApp
                </Link>
              </li>
              <li>
                <Link href="/cursos/ensino-medio" className="text-gray-300 hover:text-white transition-colors">
                  SAS Educação
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4 - Contact */}
          <div>
            <h2 className="font-semibold text-xl mb-4">Contato</h2>
            <address className="not-italic text-gray-300 text-sm space-y-1">
              <p>Av. Educação, 1000, Centro</p>
              <p>Cidade - Estado, CEP 00000-000</p>
              <p className="pt-2">(00) 1234-5678</p>
              <p>
                <a href="mailto:contato@colegioeducacional.com.br" className="hover:text-white transition-colors">
                  contato@colegioeducacional.com.br
                </a>
              </p>
            </address>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-700 gap-4 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">


          <p className="text-base text-center">© {year.toString()} Colégio São Francisco de Assis. Todos os direitos reservados.</p>


          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link href="/politica-de-privacidade" className="hover:text-white transition-colors">
              Política de Privacidade e Uso de Dados
            </Link>
          </div>

          <a href="https://devneto.com.br" className="text-white transition-colors hover:text-purple-400">
              <small className="cursor-pointer">
                Design e desenvolvimento de Cloves Neto
              </small>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
import TitleHeaderComponent from "../shared/TitleHeader";
import Image from 'next/image';

export default function MissaoSection() {
    return (
        <section className="w-full h-auto py-16 bg-background">
            <div className="w-full h-auto max-w-screen-lg mx-auto flex flex-col lg:flex-row items-center justify-between px-4 gap-8">
                    <TitleHeaderComponent
                        title="Formando Jovens Transformadores da sociedade"
                        subtitle="Educação + Espiritualidade + Valores Humanos"
                        variant="centro"
                        color="blue"
                    />
            </div>
        </section>
    );
}
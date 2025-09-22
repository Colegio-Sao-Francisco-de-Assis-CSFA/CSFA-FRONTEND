import TitleHeaderComponent from "../shared/TitleHeader";

export default function MissaoSection() {
    return (
        <section className="w-full h-auto py-16 bg-background">
            <TitleHeaderComponent
                title="Formando Jovens Transformadores da sociedade"
                subtitle="Educação + Espiritualidade + Valores Humanos"
                variant="missao"
            />
        </section>
    );
}
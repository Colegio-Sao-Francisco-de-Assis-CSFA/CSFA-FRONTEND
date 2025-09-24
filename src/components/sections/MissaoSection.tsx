import TitleHeaderComponent from "../shared/TitleHeader";

export default function MissaoSection() {
    return (
        <section className="w-full h-auto py-16 bg-background">
            <div className="w-full h-auto max-w-screen-xl mx-auto">
                <TitleHeaderComponent
                    title="Formando Jovens Transformadores da sociedade"
                    subtitle="Educação + Espiritualidade + Valores Humanos"
                    variant="missao"
                />
            </div>
        </section>
    );
}
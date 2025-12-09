import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mentions Légales | THERCAL ENERGIES",
  description: "Mentions légales de THERCAL ENERGIES, expert en isolation thermique.",
  robots: "noindex, nofollow",
};

export default function MentionsLegalesPage() {
  return (
    <div className="py-16 sm:py-20">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-4xl">
          <h1 className="mb-8 text-4xl font-bold text-gray-900">
            Mentions Légales
          </h1>

          <div className="prose prose-gray max-w-none space-y-8">
            <Section title="1. Informations légales">
              <p>
                Conformément aux dispositions de la loi n° 2004-575 du 21 juin
                2004 pour la confiance en l'économie numérique, il est précisé
                aux utilisateurs du site internet{" "}
                <strong>https://thercal-energie.fr</strong> l'identité des
                différents intervenants dans le cadre de sa réalisation et de
                son suivi.
              </p>
            </Section>

            <Section title="2. Éditeur du site">
              <div className="space-y-2">
                <p>
                  <strong>Raison sociale :</strong> THERCAL ENERGIES SARL
                </p>
                <p>
                  <strong>Capital social :</strong> 50 000 €
                </p>
                <p>
                  <strong>Siège social :</strong> 123 Rue de l'Isolation, 75001
                  Paris, France
                </p>
                <p>
                  <strong>SIRET :</strong> 123 456 789 00012
                </p>
                <p>
                  <strong>RCS :</strong> Paris B 123 456 789
                </p>
                <p>
                  <strong>TVA intracommunautaire :</strong> FR 12 123456789
                </p>
                <p>
                  <strong>Téléphone :</strong> +33 1 23 45 67 89
                </p>
                <p>
                  <strong>Email :</strong> contact@thercalenergies.com
                </p>
                <p>
                  <strong>Directeur de publication :</strong> [Nom du directeur]
                </p>
              </div>
            </Section>

            <Section title="3. Hébergement">
              <p>
                Le site est hébergé par Vercel Inc., 440 N Barranca Ave #4133,
                Covina, CA 91723, États-Unis.
              </p>
            </Section>

            <Section title="4. Propriété intellectuelle">
              <p>
                L'ensemble de ce site relève de la législation française et
                internationale sur le droit d'auteur et la propriété
                intellectuelle. Tous les droits de reproduction sont réservés,
                y compris pour les documents téléchargeables et les
                représentations iconographiques et photographiques.
              </p>
              <p>
                La reproduction de tout ou partie de ce site sur un support
                électronique quel qu'il soit est formellement interdite sauf
                autorisation expresse du directeur de la publication.
              </p>
            </Section>

            <Section title="5. Responsabilité">
              <p>
                Les informations contenues sur ce site sont aussi précises que
                possible et le site est périodiquement remis à jour, mais peut
                toutefois contenir des inexactitudes, des omissions ou des
                lacunes.
              </p>
              <p>
                Si vous constatez une lacune, erreur ou ce qui paraît être un
                dysfonctionnement, merci de bien vouloir le signaler par email à
                l'adresse contact@thercalenergies.com, en décrivant le problème
                de la manière la plus précise possible.
              </p>
            </Section>

            <Section title="6. Liens hypertextes">
              <p>
                Le site peut contenir des liens hypertextes vers d'autres sites
                présents sur le réseau Internet. Les liens vers ces autres
                ressources vous font quitter le site thercal-energie.fr.
              </p>
              <p>
                Il est possible de créer un lien vers la page de présentation de
                ce site sans autorisation expresse de l'éditeur. Aucune
                autorisation ni demande d'information préalable ne peut être
                exigée par l'éditeur à l'égard d'un site qui souhaite établir un
                lien vers le site de l'éditeur.
              </p>
            </Section>

            <Section title="7. Protection des données personnelles">
              <p>
                Conformément au Règlement Général sur la Protection des Données
                (RGPD), vous disposez d'un droit d'accès, de rectification, de
                suppression et d'opposition aux données personnelles vous
                concernant.
              </p>
              <p>
                Pour toute information complémentaire, veuillez consulter notre{" "}
                <a href="/politique-confidentialite" className="text-blue-600 hover:underline">
                  politique de confidentialité
                </a>
                .
              </p>
            </Section>

            <Section title="8. Droit applicable">
              <p>
                Les présentes mentions légales sont soumises au droit français.
                En cas de litige et à défaut d'accord amiable, le litige sera
                porté devant les tribunaux français conformément aux règles de
                compétence en vigueur.
              </p>
            </Section>
          </div>
        </div>
      </div>
    </div>
  );
}

interface SectionProps {
  readonly title: string;
  readonly children: React.ReactNode;
}

function Section({ title, children }: SectionProps) {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-semibold text-gray-900">{title}</h2>
      <div className="space-y-4 text-gray-700">{children}</div>
    </section>
  );
}

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Politique de Confidentialité | THERCAL ENERGIES",
  description: "Politique de confidentialité et protection des données personnelles de THERCAL ENERGIES.",
  robots: "noindex, nofollow",
};

export default function PolitiqueConfidentialitePage() {
  return (
    <div className="py-16 sm:py-20">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-4xl">
          <h1 className="mb-8 text-4xl font-bold text-gray-900">
            Politique de Confidentialité
          </h1>

          <div className="prose prose-gray max-w-none space-y-8">
            <IntroSection />

            <Section title="1. Responsable du traitement des données">
              <p>
                Le responsable du traitement des données personnelles est :
              </p>
              <div className="space-y-2">
                <p>
                  <strong>THERCAL ENERGIES SARL</strong>
                </p>
                <p>123 Rue de l'Isolation, 75001 Paris, France</p>
                <p>Email : contact@thercalenergies.com</p>
                <p>Téléphone : +33 1 23 45 67 89</p>
              </div>
            </Section>

            <Section title="2. Données personnelles collectées">
              <p>
                Dans le cadre de l'utilisation de notre site et de nos services,
                nous pouvons être amenés à collecter les données personnelles
                suivantes :
              </p>
              <ul className="list-disc space-y-2 pl-6">
                <li>Nom et prénom</li>
                <li>Adresse email</li>
                <li>Numéro de téléphone</li>
                <li>Adresse postale</li>
                <li>Informations relatives à votre projet d'isolation</li>
                <li>
                  Données de navigation (cookies, adresse IP, pages visitées)
                </li>
              </ul>
            </Section>

            <Section title="3. Finalités du traitement">
              <p>
                Les données personnelles collectées sont utilisées aux fins
                suivantes :
              </p>
              <ul className="list-disc space-y-2 pl-6">
                <li>Traiter vos demandes de devis et de contact</li>
                <li>Vous fournir nos services d'isolation thermique</li>
                <li>Gérer la relation client et le suivi des projets</li>
                <li>Vous envoyer des informations sur nos services (avec votre consentement)</li>
                <li>Améliorer notre site internet et nos services</li>
                <li>Respecter nos obligations légales et réglementaires</li>
              </ul>
            </Section>

            <Section title="4. Base légale du traitement">
              <p>
                Le traitement de vos données personnelles repose sur les bases
                légales suivantes :
              </p>
              <ul className="list-disc space-y-2 pl-6">
                <li>
                  <strong>Exécution d'un contrat :</strong> traitement de vos
                  demandes de devis et réalisation des travaux d'isolation
                </li>
                <li>
                  <strong>Intérêt légitime :</strong> amélioration de nos
                  services et gestion de la relation client
                </li>
                <li>
                  <strong>Consentement :</strong> envoi de communications
                  marketing (vous pouvez retirer votre consentement à tout
                  moment)
                </li>
                <li>
                  <strong>Obligation légale :</strong> conservation des données
                  pour respecter nos obligations comptables et fiscales
                </li>
              </ul>
            </Section>

            <Section title="5. Destinataires des données">
              <p>
                Vos données personnelles sont destinées aux services internes de
                THERCAL ENERGIES. Elles peuvent également être transmises à :
              </p>
              <ul className="list-disc space-y-2 pl-6">
                <li>
                  Nos sous-traitants techniques (hébergement, outils de gestion)
                </li>
                <li>
                  Nos partenaires pour la réalisation de certains travaux
                  (avec votre accord)
                </li>
                <li>
                  Les autorités compétentes en cas d'obligation légale
                </li>
              </ul>
              <p>
                Nous ne vendons ni ne louons vos données personnelles à des
                tiers.
              </p>
            </Section>

            <Section title="6. Durée de conservation">
              <p>
                Vos données personnelles sont conservées pour la durée nécessaire
                aux finalités pour lesquelles elles sont collectées :
              </p>
              <ul className="list-disc space-y-2 pl-6">
                <li>
                  <strong>Données de contact :</strong> 3 ans à compter du
                  dernier contact
                </li>
                <li>
                  <strong>Données contractuelles :</strong> durée du contrat + 10
                  ans (garantie décennale)
                </li>
                <li>
                  <strong>Données comptables :</strong> 10 ans conformément aux
                  obligations légales
                </li>
              </ul>
            </Section>

            <Section title="7. Vos droits">
              <p>
                Conformément au RGPD, vous disposez des droits suivants
                concernant vos données personnelles :
              </p>
              <ul className="list-disc space-y-2 pl-6">
                <li>
                  <strong>Droit d'accès :</strong> obtenir la confirmation que
                  des données vous concernant sont traitées et y accéder
                </li>
                <li>
                  <strong>Droit de rectification :</strong> faire corriger des
                  données inexactes ou incomplètes
                </li>
                <li>
                  <strong>Droit à l'effacement :</strong> demander la suppression
                  de vos données dans certains cas
                </li>
                <li>
                  <strong>Droit d'opposition :</strong> vous opposer au
                  traitement de vos données pour des raisons tenant à votre
                  situation particulière
                </li>
                <li>
                  <strong>Droit à la limitation :</strong> demander la limitation
                  du traitement dans certains cas
                </li>
                <li>
                  <strong>Droit à la portabilité :</strong> recevoir vos données
                  dans un format structuré et couramment utilisé
                </li>
              </ul>
              <p>
                Pour exercer ces droits, contactez-nous à :{" "}
                <strong>contact@thercalenergies.com</strong>
              </p>
              <p>
                Vous avez également le droit d'introduire une réclamation auprès
                de la CNIL (Commission Nationale de l'Informatique et des
                Libertés).
              </p>
            </Section>

            <Section title="8. Sécurité des données">
              <p>
                Nous mettons en œuvre toutes les mesures techniques et
                organisationnelles appropriées pour protéger vos données
                personnelles contre la destruction, la perte, l'altération,
                l'accès non autorisé ou la divulgation accidentelle ou illicite.
              </p>
              <p>
                Ces mesures incluent notamment : chiffrement des données en
                transit (HTTPS), accès restreint aux données, sauvegardes
                régulières, et sensibilisation de nos équipes à la protection des
                données.
              </p>
            </Section>

            <Section title="9. Cookies">
              <p>
                Notre site utilise des cookies pour améliorer votre expérience de
                navigation. Les cookies sont de petits fichiers texte stockés sur
                votre appareil.
              </p>
              <p>Nous utilisons les types de cookies suivants :</p>
              <ul className="list-disc space-y-2 pl-6">
                <li>
                  <strong>Cookies essentiels :</strong> nécessaires au
                  fonctionnement du site
                </li>
                <li>
                  <strong>Cookies analytiques :</strong> pour comprendre comment
                  les visiteurs utilisent le site
                </li>
              </ul>
              <p>
                Vous pouvez gérer vos préférences en matière de cookies via les
                paramètres de votre navigateur.
              </p>
            </Section>

            <Section title="10. Modifications">
              <p>
                Nous nous réservons le droit de modifier cette politique de
                confidentialité à tout moment. Toute modification sera publiée
                sur cette page avec une date de mise à jour.
              </p>
              <p>
                <strong>Dernière mise à jour :</strong> 14 novembre 2025
              </p>
            </Section>

            <Section title="11. Contact">
              <p>
                Pour toute question concernant cette politique de confidentialité
                ou le traitement de vos données personnelles, vous pouvez nous
                contacter :
              </p>
              <div className="space-y-2">
                <p>
                  <strong>Par email :</strong> contact@thercalenergies.com
                </p>
                <p>
                  <strong>Par téléphone :</strong> +33 1 23 45 67 89
                </p>
                <p>
                  <strong>Par courrier :</strong> THERCAL ENERGIES SARL, 123 Rue
                  de l'Isolation, 75001 Paris, France
                </p>
              </div>
            </Section>
          </div>
        </div>
      </div>
    </div>
  );
}

function IntroSection() {
  return (
    <div className="rounded-lg bg-blue-50 p-6">
      <p className="text-gray-700">
        Chez <strong>THERCAL ENERGIES</strong>, nous attachons une grande
        importance à la protection de vos données personnelles. Cette politique
        de confidentialité vous informe de la manière dont nous collectons,
        utilisons et protégeons vos informations conformément au Règlement
        Général sur la Protection des Données (RGPD) et à la loi Informatique
        et Libertés.
      </p>
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

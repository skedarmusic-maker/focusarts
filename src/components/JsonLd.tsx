export default function JsonLd() {
    const schema = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "LocalBusiness",
                "@id": "https://focusarts.com.br/#organization",
                "name": "Focus & Arts",
                "url": "https://focusarts.com.br",
                "logo": "https://focusarts.com.br/logo.png",
                "image": "https://focusarts.com.br/logo.png",
                "description": "Agência de Marketing Digital especializada em SEO Local, Otimização de Google Meu Negócio e Criação de Sites Estratégicos.",
                "telephone": "+5511965843545",
                "address": {
                    "@type": "PostalAddress",
                    "addressLocality": "São Paulo",
                    "addressRegion": "SP",
                    "addressCountry": "BR"
                },
                "geo": {
                    "@type": "GeoCoordinates",
                    "latitude": "-23.5505",
                    "longitude": "-46.6333"
                },
                "openingHoursSpecification": {
                    "@type": "OpeningHoursSpecification",
                    "dayOfWeek": [
                        "Monday",
                        "Tuesday",
                        "Wednesday",
                        "Thursday",
                        "Friday"
                    ],
                    "opens": "09:00",
                    "closes": "18:00"
                },
                "sameAs": [
                    "https://instagram.com/focusarts",
                    "https://linkedin.com/company/focusarts"
                ],
                "priceRange": "$$"
            },
            {
                "@type": "Service",
                "serviceType": "Otimização de Google Meu Negócio",
                "provider": {
                    "@id": "https://focusarts.com.br/#organization"
                },
                "areaServed": {
                    "@type": "Country",
                    "name": "Brasil"
                },
                "description": "Colocamos sua empresa no topo das buscas locais do Google Maps. Aumente ligações e visitas com um perfil otimizado."
            },
            {
                "@type": "Service",
                "serviceType": "Criação de Sites Estratégicos",
                "provider": {
                    "@id": "https://focusarts.com.br/#organization"
                },
                "description": "Desenvolvimento de sites de alta performance focados em conversão e SEO."
            }
        ]
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    );
}

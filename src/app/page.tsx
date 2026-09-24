import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProductSection from "@/components/ProductSection";
import Footer from "@/components/Footer";
import { fetchProducts } from "@/services/api";

export default async function Home() {
  const products = await fetchProducts();

  // Schema.org JSON-LD Structured Data for Product List
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Discover Our Products",
    "numberOfItems": products.length,
    "itemListElement": products.map((product, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "item": {
        "@type": "Product",
        "name": product.title,
        "image": product.image,
        "description": product.description,
        "offers": {
          "@type": "Offer",
          "priceCurrency": "USD",
          "price": product.price,
          "availability": "https://schema.org/InStock",
        },
      },
    })),
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      <Hero />
      <ProductSection initialProducts={products} />
      <Footer />
    </main>
  );
}

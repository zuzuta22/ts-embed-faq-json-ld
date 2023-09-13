type FaqItem = {
  [key: string]: {
    q: string | null;
    a: string | null;
  };
};

type FaqData = {
  faqlist: FaqItem[];
};

// Convert JSON to JSON-LD format
const getJsonLd = (jsonData: FaqData) => {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": jsonData.faqlist.map((faqItem, index: number) => {
      const faqKey = `faq${index + 1}`;
      const faq = faqItem[faqKey];
      return {
        "@type": "Question",
        "name": faq.q,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.a
        }
      };
    })
  };
};

export default getJsonLd;
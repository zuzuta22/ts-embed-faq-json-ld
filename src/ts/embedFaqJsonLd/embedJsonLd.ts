type JsonLdData = {
  "@context": string;
  "@type": string;
  mainEntity: Array<{ [key: string]: any }>; // または具体的な型定義を使用する
};

const embedJsonLd = (jsonLd: JsonLdData) => {
  const jsonLdScript = document.createElement("script");
  jsonLdScript.type = "application/ld+json";
  jsonLdScript.textContent = JSON.stringify(jsonLd);
  document.body.appendChild(jsonLdScript);
};

export default embedJsonLd;
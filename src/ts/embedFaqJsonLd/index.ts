import getFaqJson from "./getFaqJson";
import getJsonLd from "./getJsonLd";
import embedJsonLd from "./embedJsonLd";

const embedFaqJsonLd = (id: string) => {
  window.addEventListener('DOMContentLoaded', () => {
    const result = getFaqJson(id);
    if (result) {
      const jsonLd = getJsonLd(result);
      embedJsonLd(jsonLd);
    }
  })
} 

export default embedFaqJsonLd;
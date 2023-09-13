// Retrieve the target ID, and based on the values of 'dt' and 'dd', 
// return the JSON for generating JSON-LD.
const getFaqJson = (id: string) => {
  try {
    const targetElement = document.getElementById(id);

    if (!targetElement) {
      // エレメントが見つからない場合のエラーハンドリング
      console.log(`Element with ID ${id} not found`);
      return null; // または適切なエラー処理を行う
    }

    if (targetElement.tagName.toLowerCase() !== 'dl') {
      // 要素が <dl> 要素でない場合のエラーハンドリング
      console.log(`Element with ID ${id} is not a <dl> element`);
      return null; // または適切なエラー処理を行う
    }

    // jsonData の型を明示的に指定
    const jsonData: { faqlist: { [x: string]: { q: string | null; a: string | null; }; }[] } = { "faqlist": [] };

    const dtElements = targetElement.querySelectorAll("dt");
    const ddElements = targetElement.querySelectorAll("dd");

    for (let i = 0; i < dtElements.length; i++) {
      const question = dtElements[i].textContent;
      const answer = ddElements[i].textContent;

      const faqItem: { [x: string]: { q: string | null; a: string | null; }; } = {
        [`faq${i + 1}`]: {
          "q": question,
          "a": answer
        }
      };

      jsonData.faqlist.push(faqItem);
    }

    return jsonData;
  } catch (e) {
    console.log(e);
    return null;
  }
}

export default getFaqJson;
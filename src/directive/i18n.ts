import PreferencesManager from '@/services/PreferencesManager';

declare global {
  // eslint-disable-next-line
  interface Window { TM_translations: any }
}

function normalizeText(text: string): string {
  return text
    .replace(/[\n\r]/g, '').replace(/[ ]+/g, ' ')
    .trim();
}

export function translateText(englishText: string): string {
  if (window.TM_translations === undefined) return englishText;

  const lang = PreferencesManager.loadValue('lang') || 'en';
  if (lang === 'en') return englishText;

  let translatedText = englishText;
  const englishTextNormalized = normalizeText(englishText);

  if (window.TM_translations[lang][englishTextNormalized]) {
    translatedText = window.TM_translations[lang][englishTextNormalized];
  } else {
    let stripedText = englishTextNormalized.replace(/^\(|\)$/gm, '');
    if (stripedText && stripedText !== englishTextNormalized) {
      stripedText = translateText(stripedText);
      if (stripedText !== englishTextNormalized) {
        translatedText = `(${stripedText})`;
      }
    } else if (stripedText && stripedText.length > 3) {
      console.log(`Please translate "${stripedText}"`);
    }
  }
  return translatedText;
}

// eslint-disable-next-line
function translateChildren(node: any) {
  if (node.childNodes) {
    // eslint-disable-next-line
    node.childNodes.forEach((child: any): void => {
      if (child.nodeType === Node.TEXT_NODE) {
        const translatedText = translateText(child.data);
        if (translatedText !== child.data) {
          // eslint-disable-next-line
          child.data = translatedText;
        }
      } else {
        translateChildren(child);
      }
    });
  }
}

// eslint-disable-next-line
export function translateTextNode(el: any) {
  const lang = PreferencesManager.loadValue('lang') || 'en';
  if (window.TM_translations === undefined) return;
  if (window.TM_translations[lang] === undefined) return;

  translateChildren(el);
}

export const $t = translateText;

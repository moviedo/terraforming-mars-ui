const fs = require('fs');
const path = require('path');

function getAllTranslations() {
  const pathToTranslationsDir = path.resolve('locales');
  const translations = {};
  let translationDir = '';

  const dirs = fs.readdirSync(pathToTranslationsDir);
  for (const idx in dirs) {
    const lang = dirs[idx];
    const localeDir = path.join(pathToTranslationsDir, lang);
    if (lang.length === 2 && fs.statSync(localeDir).isDirectory()) {
      translations[lang] = {};

      translationDir = path.resolve(path.join(pathToTranslationsDir, lang));

      const files = fs.readdirSync(translationDir);
      for (const idx in files) {
        const file = files[idx];

        if (file === undefined || !file.endsWith('.json')) continue;

        const dataJson = JSON.parse(fs.readFileSync(path.join(translationDir, file), 'utf8'));

        for (const k in dataJson) {
          translations[lang][k] = dataJson[k];
        }
      }
    }
  }

  return translations;
}

let pathPrefix = 'dist';
console.log('process.env.NODE_ENV', process.env.NODE_ENV);
if (process.env.NODE_ENV !== 'production') {
  pathPrefix = 'public';
}

const translationsJSON = JSON.stringify(getAllTranslations());
fs.writeFileSync(`${pathPrefix}/translations.json`, translationsJSON);

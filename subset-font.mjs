import subsetFont from 'subset-font';
import { readFileSync, writeFileSync } from 'fs';
import { join } from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const fontsDir = join(__dirname, 'src/assets/fonts');

// I caratteri usati nel sito: 旗袍定制
const CHARACTERS_USED = '旗袍定制';

async function subsetChineseFont() {
	console.log('🔤 Creando subset del font cinese...\n');
	console.log(`   Caratteri da includere: ${CHARACTERS_USED}`);

	const fontPath = join(fontsDir, 'YEZIGONGCHANGSHANHAICHAOFENGSONG-2 (2).TTF');
	const outputPath = join(fontsDir, 'chinese-subset.woff2');

	try {
		const fontBuffer = readFileSync(fontPath);
		const originalSize = fontBuffer.length;

		console.log(`   Dimensione originale: ${(originalSize / 1024 / 1024).toFixed(2)} MB`);

		// Create subset
		const subset = await subsetFont(fontBuffer, CHARACTERS_USED, {
			targetFormat: 'woff2'
		});

		writeFileSync(outputPath, subset);

		const newSize = subset.length;
		const savings = ((originalSize - newSize) / originalSize * 100).toFixed(1);

		console.log(`   Nuova dimensione: ${(newSize / 1024).toFixed(2)} KB`);
		console.log(`   Risparmiato: ${savings}%`);
		console.log(`\n✅ Font subset salvato in: src/assets/fonts/chinese-subset.woff2`);
		console.log('\n👉 Aggiorna index.css per usare il nuovo font');
	} catch (err) {
		console.error('❌ Errore:', err.message);
	}
}

subsetChineseFont();

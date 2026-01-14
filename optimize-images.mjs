import sharp from 'sharp';
import { readdirSync, writeFileSync, readFileSync, unlinkSync, renameSync } from 'fs';
import { join, extname, basename } from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import { statSync } from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const imagesDir = join(__dirname, 'src/assets/images');

const QUALITY = 55;
const MAX_WIDTH = 900;

async function optimizeImage(filename) {
	const srcPath = join(imagesDir, filename);
	const tempPath = join(imagesDir, `_temp_${filename}`);

	const ext = extname(filename).toLowerCase();
	if (!['.webp', '.jpg', '.jpeg', '.png'].includes(ext)) return;

	const originalSize = statSync(srcPath).size;

	// Skip small files
	if (originalSize < 100000) {
		console.log(`⏭️  ${filename}: ${(originalSize / 1024).toFixed(0)}KB (già piccolo)`);
		return;
	}

	try {
		const inputBuffer = readFileSync(srcPath);
		const metadata = await sharp(inputBuffer).metadata();

		let pipeline = sharp(inputBuffer);

		// Resize if needed
		if (metadata.width && metadata.width > MAX_WIDTH) {
			pipeline = pipeline.resize(MAX_WIDTH, null, { fit: 'inside' });
		}

		// Compress to WebP
		const outputBuffer = await pipeline.webp({ quality: QUALITY }).toBuffer();

		if (outputBuffer.length < originalSize) {
			// Write to temp file first
			writeFileSync(tempPath, outputBuffer);
			// Delete original
			unlinkSync(srcPath);
			// Rename temp to original
			renameSync(tempPath, srcPath);

			const savings = ((originalSize - outputBuffer.length) / originalSize * 100).toFixed(0);
			console.log(`✅ ${filename}: ${(originalSize / 1024).toFixed(0)}KB → ${(outputBuffer.length / 1024).toFixed(0)}KB (-${savings}%)`);
			return outputBuffer.length;
		} else {
			console.log(`⏭️  ${filename}: compressione non efficace`);
			return originalSize;
		}
	} catch (err) {
		console.error(`❌ ${filename}: ${err.message}`);
		return originalSize;
	}
}

async function main() {
	console.log('🖼️  Ottimizzazione immagini...\n');

	const files = readdirSync(imagesDir).filter(f =>
		['.webp', '.jpg', '.jpeg', '.png'].includes(extname(f).toLowerCase())
	);

	let totalOriginal = 0;
	let totalNew = 0;

	for (const file of files) {
		const originalSize = statSync(join(imagesDir, file)).size;
		totalOriginal += originalSize;
		const newSize = await optimizeImage(file);
		totalNew += newSize || originalSize;
	}

	console.log('\n📊 Risultato:');
	console.log(`   Prima: ${(totalOriginal / 1024 / 1024).toFixed(2)} MB`);
	console.log(`   Dopo:  ${(totalNew / 1024 / 1024).toFixed(2)} MB`);
	console.log(`   Salvati: ${((totalOriginal - totalNew) / 1024 / 1024).toFixed(2)} MB`);
}

main().catch(console.error);

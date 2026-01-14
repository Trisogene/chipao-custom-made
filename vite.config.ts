import path from "node:path";
import tailwindcss from "@tailwindcss/vite";
import viteReact from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vite.dev/config/
export default defineConfig({
	resolve: {
		alias: {
			"@": path.resolve(__dirname, "./src"),
		},
	},
	plugins: [
		viteReact({
			// https://react.dev/learn/react-compiler
			babel: {
				plugins: [
					[
						"babel-plugin-react-compiler",
						{
							target: "19",
						},
					],
				],
			},
		}),
		tailwindcss(),
	],
	build: {
		target: "esnext",
		minify: "esbuild",
		cssMinify: true,
		rollupOptions: {
			output: {
				manualChunks(id) {
					if (id.includes("node_modules")) {
						if (id.includes("framer-motion")) return "vendor-framer-motion";
						if (id.includes("lucide-react")) return "vendor-lucide";
						if (
							id.includes("react") ||
							id.includes("react-dom") ||
							id.includes("react-router-dom")
						)
							return "vendor-react";
						return "vendor";
					}
				},
			},
		},
		chunkSizeWarningLimit: 800,
	},
});

import { config } from "./config.js"

/**
 * Инициализирует логгер. Замыкает префикс из конфига.
 * @returns {(message: string) => void}
 */
export default function createLogger() {
	const prefix = config.appName || "App"

	return (message) => console.log(`[${prefix}]: ${message}`)
}

import { fileURLToPath } from "url"
import wrapper from "./logger.js"

const log = wrapper()
const filename = fileURLToPath(import.meta.url)

const MS_IN_SECONDS = 1000

log(`scheduler.js запущен (${filename})`)

/**
 * Управление периодическими задачами
 * @param {string} name - Название задачи
 * @param {number} interval - Интервал в секундах
 * @param {function} task - Коллбэк функция
 */
function scheduleTask(name, interval, task) {
	log(`Создана задача: ${name}`)
	setInterval(task, interval * MS_IN_SECONDS)
}

scheduleTask("Main Loop", 10, () => {
	log("running")
})

export function getShortDate(dateInput: Date | string | number = new Date()): string {
	const date = new Date(dateInput);

	if (isNaN(date.getTime())) {
		throw new Error("Fecha inválida en getShortDate()");
	}

	const months = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];

	const month = months[date.getMonth()];
	const day = date.getDate().toString().padStart(2, "0");

	return `${month}'${day}`;
}

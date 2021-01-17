export default function amountFor(aPerformance, play) {
	let result = 0;

	switch (play.type) {
		case 'tragedy':
			result = 40_000;
			if (aPerformance.audience > 30) {
				result += 1000 * (aPerformance.audience - 30);
			}

			break;
		case 'comedy':
			result = 30_000;
			if (aPerformance.audience > 20) {
				result += 10_000 + 500 * (aPerformance.audience - 20);
			}
			result += 300 * aPerformance.audience;
			break;
		default:
			throw new Error(`unknown type: ${play.type}`);
	}
	return result;
}

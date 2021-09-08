function fixResult(result) {
	return Math.abs(result * 100000 - Math.round(result * 100000)) < 0.0000001
		? Math.round(result * 100000) / 100000
		: result
}

export function calculate(args) {
	switch (args[1]) {
		case '+':
			return fixResult(+args[0] + +args[2])
		case '-':
			return fixResult(+args[0] - +args[2])
		case '*':
			return fixResult(+args[0] * +args[2])
		case '/':
			return fixResult(+args[0] / +args[2])
		default:
			return
	}
}

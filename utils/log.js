const chalk = require('chalk');
module.exports = (data, option) => {
	const arrayColor = ['blue', 'yellow', 'green', 'red', 'magenta', 'yellowBright', 'blueBright', 'magentaBright']
	const color_one = chalk[arrayColor[Math.floor(Math.random() * arrayColor.length)]]
	const color_two = chalk[arrayColor[Math.floor(Math.random() * arrayColor.length)]]
	switch (option) {
		case "warn":
			console.log(chalk.green('[ Fail ] » ') + data);
			break;
		case "error":
			console.log(chalk.blue('[ Fail ] » ') + data);
			break;
		case "load":
			console.log(color_one('[ Facebook User New ]') + color_two(data));
			break;
		default:
			console.log(color_one(`${option} » `) + color_two(data));
			break;
	}
}

module.exports.loader = (data, option) => {
	const arrayColor = ['blue', 'yellow', 'green', 'red', 'magenta', 'yellowBright', 'blueBright', 'magentaBright']
	const color_one = chalk[arrayColor[Math.floor(Math.random() * arrayColor.length)]]
	const color_two = chalk[arrayColor[Math.floor(Math.random() * arrayColor.length)]]
	switch (option) {
		case "warn":
			console.log(chalk.greenBright('[ Ngô Trung Kiên ] » ') + data);
			break;
		case "error":
			console.log(chalk.greenBright('[ Ngô Trung Kiên ] » ') + data);
			break;
		default:
			console.log(color_one(`[ Ngô Trung Kiên ] » `) + color_two(data));
			break;
	}
}
module.exports.banner = (data) => {
	const rdcl = ['blue', 'yellow', 'green', 'red', 'magenta', 'yellowBright', 'blueBright', 'magentaBright']
	const color = chalk[rdcl[Math.floor(Math.random() * rdcl.length)]]
	console.log(color(data));
        }
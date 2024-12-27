const chalk = require('chalk').default;

function getDecoration(quantity) {
    const colors = [
        chalk.rgb(255, 153, 0),
        chalk.rgb(102, 0, 255),
        chalk.rgb(204, 51, 153),
    ];
    return Array.from({ length: quantity }, () =>
        Math.random() > 0.5
            ? colors[Math.floor(Math.random() * colors.length)]('●')
            : colors[Math.floor(Math.random() * colors.length)]('○'),
    ).join(' ');
}

function getTree() {
    const star = chalk.rgb(255, 153, 0)('★');
    const branch = chalk.bgRgb(102, 51, 0)('   ');
    const green = (text) => chalk.rgb(51, 204, 153)(text);

    const lines = [
        `         ${star}`,
        `        ${green('/ \\')}`,
        `       ${green('/')} ${getDecoration(1)} ${green('\\')}`,
        `      ${green('/')} ${getDecoration(2)} ${green('\\')}`,
        `     ${green('/')} ${getDecoration(3)} ${green('\\')}`,
        `    ${green('/')} ${getDecoration(4)} ${green('\\')}`,
        `   ${green('/')} ${getDecoration(5)} ${green('\\')}`,
        `        ${branch}`,
        `        ${branch}`,
    ];

    console.clear();
    lines.forEach((line) => console.log(line));
}

function blink() {
    setInterval(() => {
        getTree();
    }, 500);
}

blink();

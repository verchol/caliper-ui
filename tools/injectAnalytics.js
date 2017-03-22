const cheerio = require('cheerio');
const fs = require('fs');
const env = process.env;

// Only operate on files in dist so you're not modifying your source files
const HTML_FILES = ['./dist/index.html'];

let appendAnalytics = function(htmlPath, analytics) {
    let html = fs.readFileSync(htmlPath);
    let $ = cheerio.load(html);
    $('body').append(analytics);
    // write back to ./dist/index.html
    fs.writeFileSync(htmlPath, $.html());
    console.log('Appended analytics code to ' + htmlPath);
};

if (env['ANALYTICS_CODE']) {
    console.log('Injecting ANALYTICS_CODE environment variable into HTML...');
    HTML_FILES.map(filePath => {
        appendAnalytics(filePath, env['ANALYTICS_CODE']);
    });
}
else {
    console.log('Set ANALYTICS_CODE environment variable to enable analytics.');
}

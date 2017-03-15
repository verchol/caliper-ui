const cheerio = require('cheerio');
const fs = require('fs');


const ANALYTICS_PATH = './analytics.html';
// Only operate on files in dist so you're not modifying your source files
const HTML_FILES = ['./dist/index.html'];


let appendAnalytics = function(htmlPath) {
    let html = fs.readFileSync(htmlPath);
    let analytics = fs.readFileSync(ANALYTICS_PATH, 'utf8');
    let $ = cheerio.load(html);
    $('body').append(analytics);
    // write back to ./dist/index.html
    fs.writeFileSync(htmlPath, $.html());
    console.log('Appended analytics code to ' + htmlPath);
};

if (fs.existsSync(ANALYTICS_PATH)) {
    HTML_FILES.map(filePath => {
        appendAnalytics(filePath);
    });
} else {
    console.log('Need analytics? Create an analytics.html file');
}

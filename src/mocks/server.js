// custom server so we can inject the headers object and paginate the reports results
let path = require('path');
let jsonServer = require('json-server');
let server = jsonServer.create();
let router = jsonServer.router(path.join(__dirname, 'db.json'));
let middlewares = jsonServer.defaults();

router.render = (req, res) => {
    // parse url params to determine page and limit
    let params = req.url.split('?')[1].split('&').map((s) => { return s.split('='); });
    // convert params output - [['_page', '1'],['_limit','25']] - to an object
    params = params.reduce((prev,curr) => {
        prev[curr[0]] = parseInt(curr[1]);
        return prev;
    },{});
    // create json response
    res.json({
        headers: {
            total_count: 100,
            count: params._limit,
            page: params._page - 1,
            pages: Math.ceil(100 / params._limit)
        },
        reports: res.locals.data
    });
};

server.use(middlewares);
server.use(router);
server.listen(3000, () => {
    console.log('JSON Server is running');
});

const path = '/users';
const port = 27000;

const userService = function (app, host, createProxy) {
    app.use(path, createProxy({
        target: `${host}:${port}`,
        changeOrigin: true
    }));
};

module.exports = userService;
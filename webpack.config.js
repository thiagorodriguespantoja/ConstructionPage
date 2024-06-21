const path = require('path');

module.exports = {
    // ... outras configurações do webpack ...
    devServer: {
        static: {
            directory: path.join(__dirname, 'public'),
        },
        setupMiddlewares: (middlewares, devServer) => {
            if (!devServer) {
                throw new Error('webpack-dev-server is not defined');
            }

            // Middlewares personalizados que você tinha em `onBeforeSetupMiddleware` e `onAfterSetupMiddleware`
            devServer.app.get('/some/path', (req, res) => {
                res.json({ custom: 'response' });
            });

            // Adicione outros middlewares conforme necessário

            return middlewares;
        },
        // Outras configurações do devServer...
        port: 3000,
        hot: true,
        open: true,
    },
};

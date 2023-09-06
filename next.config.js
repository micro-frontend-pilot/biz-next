/** @type {import('next').NextConfig} */

const NextFederationPlugin = require('@module-federation/nextjs-mf');

const nextConfig = {
    reactStrickMode: true,
    swcMinify: true,

    async headers () {
        return [
            {
                source: '/board-list',
                headers:[
                    {
                        key: "Access-Control-Allow-Origin",
                        value: "http://localhost:3000"
                    }
                ]
            }
        ]
    },

    webpack: (config, options) => {
        const lazyTargets = [
            '/pages/board-list.js',
        ];

        config.resolve.fallback = {
            home:false
        };

        if(!options.isServer) {
            config.plugins.push(
                new NextFederationPlugin({
                    name: "nextjscomponents",
                    filename: "static/remoteEntry.js",
                    remoteType: "var",
                    remotes: {
                        common: "common@http://localhost/pilot/common/remoteEntry.js"
                    },
                    exposes: {
                        "./UserList": "./components/UserList.jsx",
                        "./BoardList": "./pages/board-list.js"
                    },
                    extraOptions: {
                        exposePages: true
                    },
                    shared: [
                        {
                            eager: true,
                            singleton: true,
                        }
                    ]
                })

            )
        }

        return config;
    }
}

module.exports = nextConfig

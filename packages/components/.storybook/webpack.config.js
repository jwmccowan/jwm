const path = require('path');
const WatchRunPlugin = require('webpack-watch-changed');

module.exports = ({ config, tsconfigPath = path.join(__dirname, '../tsconfig.storybook.json') }) => {
    config.plugins = [...(config.plugins || []), new WatchRunPlugin()];

    config.watchOptions = {
        ignored: [/\.js$/, /\.d\.ts$/],
    };

    config.module.rules.push({
        test: /\.(ts|tsx)$/,
        use: [
            {
                loader: require.resolve('ts-loader'),
                options: {
                    configFile: tsconfigPath,
                    projectReferences: true,
                },
            },
            // Optional
            {
                loader: require.resolve('react-docgen-typescript-loader'),
            },
        ],
    });
    config.resolve.alias['@'] = path.resolve(__dirname, '../src/');
    config.resolve.extensions.push('.js', '.ts', '.tsx');
    return config;
};

module.exports = function (api) {
  api.cache(true);
  return {
    presets: [
      'module:metro-react-native-babel-preset',
      'module:react-native-dotenv',
      '@babel/preset-flow',
    ],
    plugins: [
      [
        'module-resolver',
        {
          root: ['./src'],
          extensions: ['.ts', '.ios.ts', '.android.ts'],
          alias: {
            components: './src/components',
          },
        },
      ],
      ['transform-class-properties'],
    ],
  };
};

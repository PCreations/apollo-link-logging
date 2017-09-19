export default {
  input: 'dist/src/loggingLink.js',
  output: {
    file: 'dist/src/bundle.umd.js',
    format: 'umd',
  },
  sourcemap: true,
  name: 'loggingLink',
  exports: 'named',
  onwarn
};

function onwarn(message) {
  const suppressed = [
    'UNRESOLVED_IMPORT',
    'THIS_IS_UNDEFINED'
  ];

  if (!suppressed.find(code => message.code === code)) {
    return console.warn(message.message);
  }
}
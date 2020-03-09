const node = require('rollup-plugin-node-resolve');

export default {
  input: './index.js',
  output: {
    file: './dist/ag-bundle.js',
    format: 'umd',
  },
  plugins: [
    node(),
  ],
  onwarn: (msg, warn) => {
    if (msg.code === 'THIS_IS_UNDEFINED') return;
    if (!/Circular/.test(msg)) {
      warn(msg);
    }
  },
};

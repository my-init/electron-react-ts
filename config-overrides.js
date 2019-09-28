
const {
  override,
  useEslintRc,
  disableEsLint,
  setWebpackTarget
} = require('customize-cra');
module.exports = override(
  // disableEsLint(),
  setWebpackTarget('electron-renderer')
);

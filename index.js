/**
 * Создает конфигурацию для prettier
 *
 * @param {number} printWidth
 * @returns {import('prettier').Config}
 */
export function createConfig(printWidth = 100) {
  return {
    printWidth,
    tabWidth: 2,
    bracketSpacing: true,
    bracketSameLine: false,
    singleQuote: true,
    trailingComma: 'all',
    arrowParens: 'always',
    semi: true,
    quoteProps: 'consistent',
  };
}

export default createConfig();

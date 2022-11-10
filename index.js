const stylelint = require('stylelint')

const { report, ruleMessages, validateOptions } = stylelint.utils
const ruleName = 'stylelint-no-ending-comma-rule'
const messages = ruleMessages(ruleName, {
  expected: () => 'Delete ending `,`',
})

function noEndingCommaPlugin(primaryOption, secondaryOptionObject, context) {
  return function lint(postcssRoot, postcssResult) {
    const validOptions = validateOptions(postcssResult, ruleName)
    if (!validOptions) return

    const isAutoFixing = Boolean(context.fix)

    // Iterate through all CSS declarations
    postcssRoot.walkDecls((decl) => {
      const valueLastCharacterIsComma = decl.value.slice(-1) === ','
      if (!valueLastCharacterIsComma) return

      if (isAutoFixing) { // We are in “fix” mode
        const correctValue = decl.value.substring(0, decl.value.length - 1)
        // Apply the fix
        if (decl.raws.value) {
          decl.raws.value.raw = correctValue
        } else {
          decl.value = correctValue
        }
      } else { // “Report only” mode
        report({
          ruleName,
          result: postcssResult,
          message: messages.expected(), // Build the reported message
          node: decl, // Specify the reported node
          word: ',', // Which exact word caused the error? This positions the error properly
        })
      }
    })
  }
}

module.exports = stylelint.createPlugin(ruleName, noEndingCommaPlugin)
module.exports.ruleName = ruleName
module.exports.messages = messages

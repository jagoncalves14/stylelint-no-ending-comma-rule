<h1 align="center">
  stylelint-no-ending-comma-rule
</h1>

<h3 align="center">
  A [Stylelint](https://github.com/stylelint/stylelint) plugin that checks CSS property values ending with a comma.
</h3>

<p align="center">
  It adds functions to only run unit tests on files that are different between two branches or on changed files that haven't yet been commited; 
</p>

<p align="center">
  <a href="https://github.com/jagoncalves14/stylelint-no-ending-comma-rule/blob/main/LICENSE">
    <img src="https://img.shields.io/badge/license-MIT-blue.svg" alt="stylelint-no-ending-comma-rule is released under the MIT license." />
  </a>
  <a href="https://www.npmjs.com/package/@jagoncalves14/stylelint-no-ending-comma-rule">
    <img src="https://img.shields.io/npm/v/@jagoncalves14/stylelint-no-ending-comma-rule.svg" alt="Current npm package version." />
  </a>
  <a href="https://twitter.com/intent/follow?screen_name=jagoncalves14">
    <img src="https://img.shields.io/twitter/follow/jagoncalves14.svg?label=Follow%20@jagoncalves14" alt="Follow @jagoncalves14" />
  </a>
</p>

## Installation

```
npm install stylelint-no-ending-comma-rule
```

## Details

Stylelint is allowing CSS property values ending with `,`. Example below:

```scss
.foo {
    margin: 0,;
}
```

Although PostCSS considers this as something valid and actually compiles the final property as `margin: 0;`, it looks a bit messy to have code like that on the codebase.
After applying this rule, Stylelint will declare that ending `,` as an error. If applying Stylelint's formatting, the code will be changed to the following:

```scss
.foo {
    margin: 0;
}
```

## Usage

Add `no-ending-comma-rule` to your stylelint config `plugins` array, then add `"jagoncalves14/no-ending-comma-rule"` to your rules,
specifying the property for which you want to check the usage of variable.

Like so:

```js
// .stylelintrc
{
  "plugins": [
    "stylelint-no-ending-comma-rule"
  ],
  "rules": {
    // ...
    "jagoncalves14/stylelint-no-ending-comma-rule": true,
    // ...
  }
}
```

**Note:** If you project uses Prettier, its formatter actually solves this. This plugin is only recommended if your project's formatting is being solely treated by ESLint and Stylelint.

## 🤝 How to Contribute

Whether you're helping us fix bugs, improve the docs, or spread the word, thank you! 💪 🧡 💙

Check out our [**Contributing Guide**](https://github.com/jagoncalves14/stylelint-no-ending-comma-rule/blob/main/CONTRIBUTING.md) for ideas on contributing and setup steps.

## 📝 License

Licensed under the [MIT License](./LICENSE).
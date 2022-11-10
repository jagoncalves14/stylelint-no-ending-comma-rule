# stylelint-no-ending-comma

A [stylelint](https://github.com/stylelint/stylelint) plugin that checks if the CSS rules end with a comma.

## Installation

```
npm install stylelint-no-ending-comma-rule
```

## Details

Stylelint is allowing values ending with `,`. Example below:

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

Add it to your stylelint config `plugins` array, then add `"no-ending-comma-rule"` to your rules,
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
    "stylelint-no-ending-comma-rule": true,
    // ...
  }
}
```

**Note:** If you project uses Prettier, its formatter actually solves this. This plugin is only recommended if your project's formatting is being solely treated by ESLint and Stylelint.

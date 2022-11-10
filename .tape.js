module.exports = {
  'jagoncalves14/stylelint-no-ending-comma-rule': [
    // test valid options
    {
      source: 'body { top: 0; }',
      args: true,
      warnings: 0
    },
    {
      source: 'body { color: rgba(0, 0, 0, 0); }',
      args: true,
      warnings: 0
    },
    // test the # of warnings
    {
      source: 'body { top: 0,; }',
      args: true,
      warnings: 1
    },
    {
      source: 'body { color: rgba(0, 0, 0, 0),; }',
      args: true,
      warnings: 1
    },
    // test for specific warnings
    {
      source: 'body { top: 0,; }',
      args: true,
      warnings: [
        'Delete ending `,` (jagoncalves14/stylelint-no-ending-comma-rule)',
      ]
    },
    {
      source: 'body { color: rgba(0, 0, 0, 0),; }',
      args: true,
      warnings: [
        'Delete ending `,` (jagoncalves14/stylelint-no-ending-comma-rule)',
      ]
    },
    // test autofixes
    {
      source: 'body { top: 0,; }',
      expect: 'body { top: 0; }'
    },
    {
      source: 'body { color: rgba(0, 0, 0, 0),; }',
      expect: 'body { color: rgba(0, 0, 0, 0); }',
    }
  ]
}
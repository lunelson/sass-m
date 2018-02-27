
# TODO

## old business

- reduce API surface; be more agnostic and testable
- simplify the code of mm-for: forget the lookup tables
- fix the generation of `query-string` to handle (null, null) arguments

## new business

- use read-data [read-data and findup, or cosmiconfig] function if existing (via penny), to gather a `sass-m-config.json` file
- ...from file where `m-init()` is called

```scss
@if (function-exists('read-data')) {
  // ...
}
```
```
sass-m-config.json
sass-m-config.yaml
sass-m-config.yml
```

## API summary

  DEFAULTS

    $base|$root (rename $base?)
    $media

  FUNCTIONS

    m($m)
    m-orig($m)
    -
    m-var($var|$subvar, $m)
    m-orig-var($var|$subvar, $m)
    m-var-orig($var|$subvar, $m)

  MIXINS

    m()
    mm()
    mm-for()

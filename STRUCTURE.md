## file structure

_index

stylesheets/

  base/
    functions.scss
      _media
      _media-orig
      _base
      _base-orig
      _fonts
        ...
          size
          family
          em-height
          ex-height
          spacing-max
          spacing-end

      _parse-mult
      _get-props-for
      _get-media-for
      _normalize-medium
      _build-query-string
      _setup-m-by-breakpoint
      _setup-m-by-columns

      m(m) // current medium
      m-orig(m) // original medium
      m-value(key, m) // medium-value
      m-orig-value(key, m)

      font
      size
      line
      trim-ex
      trim-em
      inner-x
      inner-y
      inner-y--ex
      inner-y--em
      outer-top
      outer-right
      outer-bottom
      outer-left

    mixins
      m
      mm-at
      mm-for
      mm

    setups
      setup-m(baseMap, mediaMap, fontsMap, options)
        - options: setup-type, js-globals, do-grid,-stack,-typo
        - setup base, media ( --by-breakpoint | --by-columns )
          - output base and media as data
        - setup fonts, outer, wrap, unwrap

  grid/
    functions.scss
      _grid-width
      cell-width // for pushing elements

    mixins.scss
      _cell-padding
      _grid-margins
      _float-cell
      _float-grid
      _flex-cell
      _flex-grid
      _degrid
      cell
      grid
      regrid
      ungrid
      cell-push
      cell-span
      cell-cycle
      grid-debug
    setup.scss
      setup-grid

  page/
    mixins/
      outer
      wrap
      unwrap

  stack/
    mixins.scss
      stack
    setup.scss
      setup-stack

  typo/
    mixins.scss
      typo
    setup.scss
      setup-typo

  util/
    functions.scss
    mixins.scss
      clip, hide, show, hold
    setup.scss
      setup-fonts
      setup-outer
      setup-wrap
      setup-unwrap
      setup-hold

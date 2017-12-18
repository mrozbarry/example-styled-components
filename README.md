# Comparison between React+SASS and React+Styled-Components

## Findings

|                    | Lines of code | Number of files | Build Size  |
| ------------------ | ------------- | --------------- |------------ |
| Styled-Components  | 84            | 2<sup>1</sup>   | 329K        |
| React+Sass         | 79            | 5               | 286K        |

Notes:

 - <sup>1</sup> Could have been broken up into multiple smaller components, one for each styled element.


## Thoughts

### General

 - Non-minified code made styled-components almost a full 2x larger than react and sass.

### React+Sass

 - A much more familiar flow to me personally.
 - Required more dev-oriented dependencies and workflow.
 - I was suprised it produced a smaller bundle and had less lines of code.


### Styled-Components

 - Based on build sizes, larger run-time dependency.
 - Personal lack of familiarity.
 - Suprised it handled sass-like syntax which allowed me to do the same pseudo-selector for label as I had in sass.
 - Props-based theming feels odd, but probably no more odd than sass variables
 - Curious if there would be a way to extract/handle all static styles at compile time, and only deal with props-oriented styles at run time? Not sure if this would actually buy the browser or compiler much, though.

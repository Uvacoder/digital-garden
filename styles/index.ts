import css from 'styled-jsx/css'

const styles = css.global`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html,
  body {
    height: 100%;
  }

  body {
    font-family: 'Inter', sans-serif;
    color: hsl(0 0% 100%);
    background-color: hsl(220 20% 14%);
  }

  h1 {
    padding: 2rem 0;
    font-size: 2rem;
    font-weight: 300;
  }

  p {
    font-size: 1.125rem;
    line-height: 1.4;
  }

  a {
    color: tomato;
  }

  ol,
  ul {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    list-style-position: inside;
  }

  img {
    width: 100%;
    height: 100%;
    display: block;
  }

  code[class*='language-'],
  pre[class*='language-'] {
    color: #f8f8f2;
    background: none;
    font-family: 'Fira Code', Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono',
      monospace;
    text-align: left;
    white-space: pre;
    word-spacing: normal;
    word-break: normal;
    word-wrap: normal;
    line-height: 1.5;
    -moz-tab-size: 4;
    -o-tab-size: 4;
    tab-size: 4;
    -webkit-hyphens: none;
    -moz-hyphens: none;
    -ms-hyphens: none;
    hyphens: none;
  }

  /* code blocks */
  pre[class*='language-'] {
    padding: 1em;
    margin: 0.5em 0;
    overflow: auto;
    border-radius: 0.3em;
  }

  :not(pre) > code[class*='language-'],
  pre[class*='language-'] {
    background: #2e3440;
  }

  /* inline code */
  :not(pre) > code[class*='language-'] {
    padding: 0.1em;
    border-radius: 0.3em;
    white-space: normal;
  }

  .token.comment,
  .token.prolog,
  .token.doctype,
  .token.cdata {
    color: #636f88;
  }

  .token.punctuation {
    color: #81a1c1;
  }

  .namespace {
    opacity: 0.7;
  }

  .token.property,
  .token.tag,
  .token.constant,
  .token.symbol,
  .token.deleted {
    color: #81a1c1;
  }

  .token.number {
    color: #b48ead;
  }

  .token.boolean {
    color: #81a1c1;
  }

  .token.selector,
  .token.attr-name,
  .token.string,
  .token.char,
  .token.builtin,
  .token.inserted {
    color: #a3be8c;
  }

  .token.operator,
  .token.entity,
  .token.url,
  .language-css .token.string,
  .style .token.string,
  .token.variable {
    color: #81a1c1;
  }

  .token.atrule,
  .token.attr-value,
  .token.function,
  .token.class-name {
    color: #88c0d0;
  }

  .token.keyword {
    color: #81a1c1;
  }

  .token.regex,
  .token.important {
    color: #ebcb8b;
  }

  .token.important,
  .token.bold {
    font-weight: bold;
  }

  .token.italic {
    font-style: italic;
  }

  .token.entity {
    cursor: help;
  }
`

export default styles

import React from "react"
import { injectGlobal } from "styled-components"
import * as fonts from "../fonts"

injectGlobal`
  @font-face {
    font-family: 'Gloria Hallelujah';
    font-style: normal;
    font-weight: normal;
    src: local('Gloria Hallelujah'), url('${fonts.GloriaHallelujahTTF}') format('ttf');
  }
  body {
    font-family: 'Gloria Hallelujah';
    font-size: 48px;
  }
`

export default () => <div>Hello world!</div>

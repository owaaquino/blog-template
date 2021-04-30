import React from "react"
import Helmet from "react-helmet"

import "./globalStyle"
import { colors } from "./colors"

const baselineratio = 16 / 9
const basegrid = [28, 32, 36]

const theme = {
  colors: {
    ...colors,
    background: "#fff",
    navbarBackground: colors.darkGrey1,
    heading: "#262626",
    body: "#3a3a3a",
    link: {
      default: colors.teal1,
      hover: "#24b3b5",
    },
    category: {
      default: colors.grey1,
      // based on category slugs
      "html-css": "#ef8d24",
      html: "#ef8d24",
      css: "#248aaf",
      javascript: "#f6b33c",
      mobile: "#2C5773",
      "design-ux": "#3cbc8d",
      design: "#3cbc8d",
      ux: "#3cbc8d",
      entrepreneur: "#3dbfd9",
      web: "#1c94c6",
      php: "#666699",
      ruby: "#eb5745",
      woorank: "#428bca",
      wordpress: "#248aaf",
      bitbucket: "#205081",
      "developer-center": "#0a91f0",
      java: "#8e4cd9",
      blogs: "#075858",
    },
  },
  fontSizes: {
    xs: "0.75rem",
    sm: "0.875rem",
    md: "1rem",
    lg: "1.25rem",
    xl: "1.5rem",
    xxl: "2.25rem",
    xxxl: "3rem",
  },
  fontWeight: {
    thin: 300,
    normal: 400,
    semiBold: 500,
    bold: 700,
    bolder: 900,
  },
  breakpoints: [312, 624, 936, 1248],
  baseline: baselineratio * 1 + "rem",
  basefont: {
    mobile: basegrid[1] / baselineratio + "px",
    tablet: basegrid[0] / baselineratio + "px",
    laptop: basegrid[1] / baselineratio + "px",
    wide: basegrid[2] / baselineratio + "px",
  },
  space: [],
  typescale: [1.15, 1.25, 1.5],
}

theme.breakpoints.mobile = `${theme.breakpoints[0]}px`
theme.breakpoints.tablet = `${theme.breakpoints[1]}px`
theme.breakpoints.laptop = `${theme.breakpoints[2]}px`
theme.breakpoints.wide = `${theme.breakpoints[3]}px`

for (let i = 0; i < 4.5; i += 0.25) {
  theme.space.push(`${i}rem`)
}

const Theme = ({ children }) => (
  <>
    <Helmet>
      <link
        rel="preload"
        href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,300;0,400;0,500;0,700;0,900;1,300;1,400;1,500;1,700;1,900&display=swap"
        as="style"
      />
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,300;0,400;0,500;0,700;0,900;1,300;1,400;1,500;1,700;1,900&display=swap"
        type="text/css"
      ></link>
    </Helmet>
    {children}
  </>
)

export { theme }
export default Theme
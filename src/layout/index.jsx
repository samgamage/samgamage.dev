/** @jsx jsx */
import {css, Global} from "@emotion/core"
import React, {useEffect, useRef, useState} from "react"
import Helmet from "react-helmet"
import {FaArrowCircleUp as ArrowUpBtn} from "react-icons/fa"
import {jsx, Styled} from "theme-ui"
import config from "../../config/SiteConfig"
import Footer from "../components/Footer"
import Header from "../components/Header"

let hasPassiveSupport
const getHasPassiveEventSupport = () => {
  if (typeof hasPassiveSupport === "boolean") {
    return hasPassiveSupport
  }

  hasPassiveSupport = false

  try {
    const opts = Object.defineProperty({}, "passive", {
      get() {
        hasPassiveSupport = true
        return hasPassiveSupport
      },
    })

    typeof window !== "undefined" && window.addEventListener("test", null, opts)
  } catch (e) {
    hasPassiveSupport = false
  }

  return hasPassiveSupport
}
const useScrollPosition = () => {
  const [scroll, setScroll] = useState({x: 0, y: 0})
  const tickingRef = useRef()

  const handleScroll = () => {
    setScroll({
      x: typeof window !== "undefined" && window.pageXOffset,
      y: typeof window !== "undefined" && window.pageYOffset,
    })
    tickingRef.current = false
  }

  const onScroll = () => {
    if (tickingRef.current) {
      return
    }

    tickingRef.current = true
    typeof window !== "undefined" && window.requestAnimationFrame(handleScroll)
  }

  useEffect(() => {
    typeof window !== "undefined" &&
      window.addEventListener(
        "scroll",
        onScroll,
        getHasPassiveEventSupport() ? {passive: true} : false,
      )

    return () => {
      typeof window !== "undefined" &&
        window.removeEventListener("scroll", onScroll)
    }
  }, [])

  return scroll
}

const globalStyles = css`
  * {
    box-sizing: border-box;
  }
  body {
    margin: 0;
  }
  pre {
    background-color: #061526 !important;
    border-radius: 4px;
    font-size: 16px;
    padding: 10px;
    overflow-x: auto;
    /* Track */
    ::-webkit-scrollbar {
      width: 100%;
      height: 5px;
      border-radius: 0 0 5px 5px;
    }
    ::-webkit-scrollbar-track {
      background: #061526;
      border-radius: 0 0 4px 4px;
    }
    /* Handle */
    ::-webkit-scrollbar-thumb {
      background: #888;
      border-radius: 5px;
    }
  }
  .highlight-line {
    margin: 0 -10px;
    padding: 0 5px;
  }
`

const BackToTop = () => {
  const scrollBreakpoint = 1000
  const {_, y: scrollY} = useScrollPosition()

  const onArrowClick = () => {
    typeof window !== undefined &&
      window.scrollTo({left: 0, top: 0, behavior: "smooth"})
  }

  return (
    <div
      sx={{
        position: "fixed",
        right: 4,
        bottom: 4,
        transition: "all 0.2s ease",
        opacity: scrollY > scrollBreakpoint ? 1 : 0,
      }}
    >
      <ArrowUpBtn
        sx={{
          ":hover": {
            transition: "all 0.2s ease",
            color: "secondary",
            cursor: "pointer",
          },
        }}
        title="Back To Top"
        type="button"
        onClick={onArrowClick}
        size={40}
      />
    </div>
  )
}
const MainLayout = ({children, centered = false}) => (
  <React.Fragment>
    <Helmet>
      <meta name="description" content={config.siteDescription} />
    </Helmet>
    <Styled.root>
      <Global styles={globalStyles} />
      <Header />
      <div
        sx={{
          minHeight: "calc(100vh - 102px - 93px)",
          display: centered ? "flex" : "",
          alignItems: centered ? "center" : "",
        }}
      >
        {children}
      </div>
      <BackToTop />
      <Footer config={config} />
    </Styled.root>
  </React.Fragment>
)

export default MainLayout

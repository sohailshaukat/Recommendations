import { ChakraProvider, ColorModeScript } from "@chakra-ui/react"
import * as React from "react"
import ReactDOM from "react-dom"
import { App } from "./App"
import customTheme from "./theme"

ReactDOM.render(
  <React.StrictMode>
    <ColorModeScript />
    <ChakraProvider theme={customTheme}>
    <App />
    </ChakraProvider>

  </React.StrictMode>,
  document.getElementById("root"),
)

import {createGlobalStyle} from 'styled-components'

export const GlobalStyle = createGlobalStyle `
    :root {
        --soft-white: #f12f12f12;
        --green: #8bcf21;
        --yellow: #Ffcb16;
        --dark: #383b40;
        --deep-blue: #011640;
        --deep-blue-secondary: #010F2B;
    }

h1 {
    font-family: cursive;
}

body {
    background: var(--deep-blue);
}

* {
    margin: 0;
    padding: 0;
    border-sizing: border-box;
}

`
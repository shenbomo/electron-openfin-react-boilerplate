import React from 'react'
import ReactDom from 'react-dom'
import Nested from './nested.jsx'

let renderer = (
    <div>
        <h1>Rendered by the renderer</h1>
        <Nested/>
    </div>
)
ReactDom.render(renderer, document.getElementById('renderer'))


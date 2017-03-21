import React from 'react'
import Hello from './hello.jsx'
import World from './world.jsx'

export default class Nested extends React.Component {
    render() {
        return (
            <div>
                <h1>Nested</h1>
                <Hello/>
                <World/>
            </div>
        )
    }
}
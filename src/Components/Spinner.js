import React, { Component } from 'react'
import lode from './lode.gif'
export default class Spinner extends Component {
    render() {
        return (
            <div>
                <div className="text-center">
                    <img src={lode} alt="Lode" />
                </div>
            </div>
        )
    }
}

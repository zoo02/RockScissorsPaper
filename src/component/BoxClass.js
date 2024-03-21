import React, { Component } from 'react'

export default class BoxClass extends Component {
    constructor() {
        super()
        this.resultClass = ""
    }

    Box = () => {
        if (this.props.result === 'WIN') {
            this.resultClass = 'win'
        } else if (this.props.result === 'LOSE') {
            this.resultClass = 'lose'
        } else if (this.props.result === 'DRAW') {
            this.resultClass = 'draw'
        }
    }
    render() {
        this.Box()
        return (
            <div className='background'>
                <div className='box'>
                    <h1>{this.props.title}</h1>
                    <img className='item-img' src={this.props.item && this.props.item.img} />
                    <h2 className={`propsResult ${this.resultClass}`}>{this.props.result}</h2>
                </div>
            </div>
        )
    }
  }


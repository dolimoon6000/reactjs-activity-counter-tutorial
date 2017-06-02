import React from 'react'
import '../stylesheets/ui.scss'

export const SkiDayCount = React.createClass({
    render () {
        const { total, powder, backcountry } = this.props

        return (
            <div className="ski-day-count">
                <div className="total-days">
                    <span>{total}</span>
                    <span>days</span>
                </div>
                <div className="powder-days">
                    <span>{powder}</span>
                    <span>days</span>
                </div>
                <div className="backcountry-days">
                    <span>{backcountry}</span>
                    <span>days</span>
                </div>
            </div>
        )
    }
})
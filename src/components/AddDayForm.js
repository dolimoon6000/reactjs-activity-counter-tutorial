import { Component } from 'react'
import { PropTypes } from 'prop-types'


export const AddDayForm = ({ resort, date, powder, backcountry }) => {
    let _resort, _date, _powder, _backcountry
    const submit = (e) => {
        e.preventDefault()
        console.log('resort', _resort.value)
        console.log('date', _date.value)
        console.log('powder', _powder.checked)
        console.log('backcountry', _backcountry.checked)
    }

    return (
        <form onSubmit={submit} className="add-day-form">
            <label htmlFor="resort">Resort Name</label>
            <input
                type="text"
                id="resort"
                required
                defaultValue={resort}
                ref={input => _resort = input}
            />

            <label htmlFor="date">Date</label>
            <input
                type="date"
                id="date"
                required
                defaultValue={date}
                ref={input => _date = input}
            />

            <div>
                <input
                    type="checkbox"
                    id="powder"
                    defaultChecked={powder}
                    ref={input => _powder = input}
                />
                <label htmlFor="powder">Powder Day</label>
            </div>

            <div>
                <input
                    type="checkbox"
                    id="backcountry"
                    defaultChecked={backcountry}
                    ref={input => _backcountry = input}
                />
                <label htmlFor="backcountry">Backcountry Day</label>
            </div>

            <button>Add Day</button>
        </form>
    )
}

AddDayForm.propTypes = {
    resort: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    powder: PropTypes.bool.isRequired,
    backcountry: PropTypes.bool.isRequired
}

AddDayForm.defaultProps = {
    resort: "Kirkwood",
    date: "2017-02-12",
    powder: true,
    backcountry: false
}

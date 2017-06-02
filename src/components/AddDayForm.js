import { Component } from 'react'
import { PropTypes } from 'prop-types'

const tahoeResorts = [
	"Alpine Meadows",
	"Boreal",
	"Diamond Peak",
	"Donner Ski Ranch",
	"Heavenly",
	"Homewood",
	"Kirkwood",
	"Mt. Rose",
	"Northstar",
	"Squaw Valley",
	"Sugar Bowl"
]

class AutoComplete extends Component {
    get value() {
        return this.refs.inputResort.value
    }

    set value(inputValue) {
        this.refs.inputResort.value = inputValue
    }

    render() {
        return (
            <div>
                <input type="text" list="tahoe-resorts" ref="inputResort" />
                <datalist id="tahoe-resorts">
                    {this.props.options.map((option, i) => <option key={i}>{option}</option>)}
                </datalist>
            </div>
        )
    }
}

export const AddDayForm = ({ resort, date, powder, backcountry, onNewDay }) => {
    let _resort, _date, _powder, _backcountry
    const submit = (e) => {
        e.preventDefault()
        onNewDay({
            resort: _resort.value,
            date: _date.value,
            powder: _powder.checked,
            backcountry: _backcountry.checked
        })
        _resort.value = ''
        _date.value = ''
        _powder.checked = false
        _backcountry.checked = false
    }

    return (
        <form onSubmit={submit} className="add-day-form">
            <label htmlFor="resort">Resort Name</label>
            <AutoComplete options={tahoeResorts} ref={input => _resort = input} />

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

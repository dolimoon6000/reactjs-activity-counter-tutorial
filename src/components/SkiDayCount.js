import '../stylesheets/ui.scss'

const percentFromDecimal = (decimal) => {
    return ((decimal * 100) + '%')
}

const calGoalProgress = (total, goal) => {
    return percentFromDecimal(total/goal)
}

export const SkiDayCount = ({ total, powder, backcountry, goal }) => (
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
        <div>
            <span>{calGoalProgress(total, goal)}</span>
        </div>
    </div>
)

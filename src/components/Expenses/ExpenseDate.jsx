import './ExpenseDate.css'

let thisYear = new Date()
thisYear = thisYear.getFullYear()

function ExpenseDate(props) {
    let month = props.date.toLocaleString('en-US',{month: 'long'})
    let day = props.date.toLocaleString('en-US',{day: '2-digit'})
    let year = props.date.getFullYear()
    let difference = thisYear - year

    if (difference > 0){
        year = `${difference} year(s) ago`
    }else if (difference < 0){
        year = 'future'
    }else{
        year = 'this year'
    }
    return (
        <div className='expense-date'>
            <div className='expense-date__month'>{month}</div>
            <div className='expense-date__day'>{day}</div>
            <div className='expense-date__year'>{year}</div>
        </div>
    );
}

export default ExpenseDate;
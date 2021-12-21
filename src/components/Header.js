import PropTypes from 'prop-types'
import Button from './Button.js'
import Tasks from './Tasks.js'

const Header = ({ title, onAdd, showAdd }) => {
    
    
    
    return (
        <header className='header'>
            <h1>{title}</h1>
           
            <Button color={showAdd ? 'red' : 'green'} text={showAdd ? 'Close' : 'Add'} onClick={onAdd}/>
            
        </header>
    )
}

Header.defaultProps = {
    title: 'Task Tracker'
}



export default Header

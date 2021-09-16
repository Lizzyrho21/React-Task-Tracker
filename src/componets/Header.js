
//REMEBER-- COMPONENTS are bits of code used to create an UI (User Interface)
// bolierplate for an arrow function component! 
import React from 'react' // used to be require for every react component

import PropTypes from 'prop-types'
import Button from './button'

// you pass in a argument.. in this case, 'title'
const Header = ({title, onAdd, showAdd}) => {

    return (
       <header className='header'>
           <h1> {title} </h1>
           {/* we can reuse components from imported js  */}
            <Button color={showAdd ? 'red' : 'green'} text={showAdd ?  'Close' : 'Add'} onClick=
            {onAdd} />
       </header>
    )
}

// this will be the code by default!
Header.defaultProps = {
    title: 'Task Tracker',
}
// check for ERRORS
Header.propTypes = {
    title: PropTypes.string.isRequired, 
}
//CSS IN JS//
// const headingStyle = {
//     color:'red',
//     backgroundColor: 'green',

// }
export default Header

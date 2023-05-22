import PropTypes from 'prop-types';
import c from './Button.module.css'


export const Button = ({onLoad}) => { 
    return <button type="button" className={c.Button} onClick={onLoad} >Load more</button>
}

Button.propTypes = {
    onLoad: PropTypes.func
};
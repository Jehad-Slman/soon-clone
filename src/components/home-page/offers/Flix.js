import classes from './Flix.module.css';

const Flix = props => {

    return (
        <div className={`${classes.flix} ${props.className || ''}`}>
            {props.children}
        </div>
    );
};

export default Flix;
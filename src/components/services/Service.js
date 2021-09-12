import { useHistory } from "react-router";

import classes from './Service.module.css';

const Service = props => {
    const history = useHistory();

    const clickHandler = () => {
        history.push(`/services/${props.id}`);
    };
    
    return (
        <div onClick={clickHandler} className={`${classes.container} ${props.darkMood ? classes.dark : ''}`}>
            {props.children}
        </div>
    );
};

export default Service;
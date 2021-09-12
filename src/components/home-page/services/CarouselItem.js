import { useHistory } from 'react-router';

import classes from './CarouselItem.module.css';

const CarouselItem = props => {
    const history = useHistory();

    const clickHandler = () => {
        history.push(`/services/${props.id}`)
    }

    return <div onClick={clickHandler} className={`${classes.item} ${props.dark ? classes.dark : ''}`}>{props.children}</div>
};

export default CarouselItem;
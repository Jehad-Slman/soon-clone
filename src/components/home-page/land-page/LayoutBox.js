import classes from "./LayoutBox.module.css";

const LayoutBox = props => {

    return (
        <div className={classes.box}>
            <h2>{props.num} +</h2>
            <p>{props.des}</p>
        </div>
    )
};

export default LayoutBox;
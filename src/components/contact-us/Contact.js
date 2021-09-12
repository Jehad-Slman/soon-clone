import Card from '../Card';

import classes from './Contact.module.css';
const Contact = props => {

    const submitHandler = event => {
        event.preventDefault();
    }

    return (
        <Card darkMood={props.darkMood}>
            <div className={`${classes.contact} ${props.darkMood ? classes.dark : ''}`}>
                <h2>Not quite sure exactly what you need? Maybe you want it all! Regardless, you may contact us today to get a free test sample of any of our services.</h2>
                <form onSubmit={submitHandler}>
                    <div className={classes.container}>
                        <input type='text' placeholder='First Name'/>
                        <input type='text' placeholder='Last Name'/>
                    </div>

                    <div className={classes.container}>
                        <input type='text' placeholder='Phone Number'/>
                        <input type='text' placeholder='Subject'/>
                    </div>

                    <div className={classes.area}>
                        <textarea rows='10' placeholder='Message'/>
                    </div>

                    <div className={classes.btn}>
                        <button type='submit'>Send</button>
                    </div>
                </form>
            </div>
        </Card>
    );
};

export default Contact;
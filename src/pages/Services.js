import OurService from "../components/services/OurServices";

const Services = props => {
    return (
       <OurService darkMood={props.darkMood}/>
    );
};

export default Services;
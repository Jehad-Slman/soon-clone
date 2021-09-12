import { useParams } from "react-router";
import SDetail from "../components/services/SDetail";

const ServiceDetail = props => {
    const params = useParams();

    return (
        <SDetail darkMood={props.darkMood} id={params.id}/>
    )
};

export default ServiceDetail;
import { ReactComponent as HappyIcon } from "../../../assets/icons/happy_reaction.svg";
const Opinion = (props) => {
    return (
        <div className="opinion">
            <div className="opinion_reaction">
                <HappyIcon className="opinion_reaction-icon"></HappyIcon>
                <h3>{props.note}/5</h3>
            </div>
            <div className="opinion_content">
                <h5>
                    {props.comment}
                </h5>
            </div>
        </div>
    );
}

export default Opinion;
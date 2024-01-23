import { ReactComponent as HappyReaction } from "../../../assets/icons/happy_reaction.svg";
import { ReactComponent as SadReaction } from "../../../assets/icons/sad_reaction.svg";
const Opinion = (props) => {
    return (
        <div className="opinion">
            <div className="opinion_reaction">
                {
                    props.option.note < 3 ? <SadReaction className="opinion_reaction-icon"></SadReaction> 
                    : <HappyReaction className="opinion_reaction-icon"></HappyReaction>
                }
                <div className="opinion_note">
                    <p>{props.option["note"]}/5</p>
                </div>
            </div>
            <div className="opinion_content">
                <p>
                    {props.option["comment"]}
                </p>
            </div>
        </div>
    );
}

export default Opinion;
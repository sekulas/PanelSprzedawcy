import { ReactComponent as HappyIcon } from "../../assets/icons/happy_reaction.svg";
const Opinion = () => {
    return (
        <div className="opinion">
            <div className="opinion_reaction">
                <HappyIcon className="opinion_reaction-icon"></HappyIcon>
                <h3>5/5</h3>
            </div>
            <div className="opinion_content">
                <h5>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum  
                </h5>
            </div>
        </div>
    );
}

export default Opinion;
import React, {useState} from "react";
import './toggle-element.scss';

interface Props {
    firstText: string;
    secondText: string;
    state: boolean;
    img?: string[];
    setState: (prevState: boolean) => void;
}

const ToggleElement = ({firstText, secondText, state, setState, img}: Props) => {

    const [isActive, setIsActive] = useState(true);

    const handleClick = () => {
        setIsActive(!isActive);
        setState(!state);
    }

    return (
        <div className={'toggle-element'}>
            <div className={`form_left_toggle ${isActive ? 'active' : null}`} onClick={handleClick}>
                {img && <img src={img[0]} />}
                {firstText}
            </div>
            <div className={`form_right_toggle ${!isActive ? 'active' : null}`} onClick={handleClick}>
                {img && <img src={img[1]} />}
                {secondText}
            </div>
        </div>
    );
}

export default ToggleElement;
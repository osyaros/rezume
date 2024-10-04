import { FC } from "react";

import cls from './BackButton.module.scss';
import Icon from "../Icon/Icon";
import { useNavigate } from "react-router-dom";

const BackButton: FC = () => {
    const navigate = useNavigate();
    return (
        <button className={cls.backBtn} onClick={() => navigate(-1)} role='link'>
            <Icon id='arrow_left' width={45} height={45} />
        </button>
    )
}

export default BackButton
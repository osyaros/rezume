import { FC } from "react";
import { useParams } from "react-router-dom";

const DetailPage: FC = () => {
    const { category, experience } = useParams<{ category: string, experience: string }>();
    return <div>DetailPage</div>;
};

export default DetailPage
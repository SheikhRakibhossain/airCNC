import { Link } from "react-router-dom";
import logoImage from "../../../images/logo.png"

const Logo = () => {
    return (
        <>
            <Link to="/"><img src={logoImage} alt="Logo iamge" width={100} height={100}/></Link>
        </>
    );
};

export default Logo;
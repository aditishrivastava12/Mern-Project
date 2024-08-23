import { NavLink } from "react-router-dom";
import "./Footer.css";

export const Footer = () => {
    return (
        <footer>
            <div className="container">
                <div className="footer-brand">
                    <NavLink to="/">TeachTech</NavLink>
                </div>
               
                
                <div className="footer-copyright">
                    <p>&copy; 2024 TeachTech. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}

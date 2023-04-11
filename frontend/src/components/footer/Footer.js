import "./Footer.scss";
import React from "react";

const Footer = () => {

    return (
        <footer className="w-100 d-flex align-items-center">
            <div className="container">
                <div className="row">
                    <div className="col-12 d-flex justify-content-between align-items-center flex-wrap">
                        <div className="footer-item">
                            2023
                        </div>
                        <div className="footer-item">
                            © Kozodoi, Barabukha, Kondratiuk. All Rights reserved.
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

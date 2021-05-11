import React, { useState, useEffect } from "react";
import countapi from "countapi-js";
import Button from "react-bootstrap/Button";
import Badge from "react-bootstrap/Badge";

import "./Footer.style.css";

const Footer = () => {
    const [visitorsCount, setVisitorsCount] = useState("");
    
    useEffect(() => {
        countapi.visits().then((res) => {setVisitorsCount(res.value)})
    }, []);
    
    return(
        <div className="footer-style pt-1 pb-1">
            <div className="py-2 text-center">
                Brewed with &#128151; Aviroop Nandy { new Date().getFullYear() }
            </div>
            <div className="visitors">
                <Button variant="primary">
                    Visitors <Badge variant="light">{ visitorsCount }</Badge>
                </Button>
            </div>
        </div>
    );
}

export default Footer;
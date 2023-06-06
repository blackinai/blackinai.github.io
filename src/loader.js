import React, { useEffect, useState } from 'react';
import './index.css';

export default function Loader() {
    const [isLoading, setLoading] = useState(true);

    function fakeRequest() {
        return new Promise(resolve => setTimeout(() => resolve(), 2500));
    }

    useEffect(() => {
        fakeRequest().then(() => {
            const el = document.querySelector(".loader-container");
            if (el) {
                el.remove();
                setLoading(!isLoading);
            }
        });
        window.scrollTo(0, 0)
    });

    if (isLoading) {
        window.scrollTo(0, 0)
        return null;
    }

    return(
        <div className="Loader"></div>
    );
}
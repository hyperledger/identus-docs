import React, {useLayoutEffect, useRef, SVGSVGElement, useMemo, useState, useEffect} from 'react';
import styles from './index.module.css';
export default function AtalaGraphic() {
    const [text, setText] = useState("");

    function generateRandomHash(length) {
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let result = '';

        for (let i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() * characters.length));
        }

        return result;
    }

    useEffect(() => {
        setInterval(() => {
            setText(generateRandomHash(5500));
        }, 200)
    }, [])

    return (
        <div className={styles.hero__graphic__wrapper}>
            <div className={styles.hero__graphic}>
                {text}
            </div>
        </div>
    )
}
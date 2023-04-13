import React, {useCallback, useRef} from 'react';
import Link from '@docusaurus/Link';
import styles from './styles.module.css'
export default function Button({to, className, children}) {
    const lightRef = useRef(null);
    const handleMouseMove = useCallback((event) => {

        const {clientX, clientY, currentTarget} = event;
        const {
            x: offsetX,
            y: offsetY
        } = currentTarget.getBoundingClientRect();

        const mouseX = (clientX - offsetX);
        const mouseY = (clientY - offsetY);

        lightRef.current.animate({
            top: `${mouseY}px`,
            left: `${mouseX}px`,
        }, {fill: "forwards", duration: 500})
    }, [])

    const handleMouseLeave = useCallback(() => {

        lightRef.current.animate({
            top: `50%`,
            left: `50%`,
        }, {fill: "forwards", duration: 500})
    }, [])
    return (
        <Link to={to} className={`${styles.button} ${className}`} onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
            {children}
            <div className={styles.light} ref={lightRef}/>
        </Link>
    )
}
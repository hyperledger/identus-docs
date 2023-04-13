import React, {useCallback, useEffect, useRef} from 'react';
import styles from './index.module.css'

export default function Blob() {
    const blob = useRef(null);
    const handlePointerMove = useCallback((event) => {
        const {clientX, clientY} = event;
        blob.current.animate({
            top: `${clientY}px`,
            left: `${clientX}px`,
        }, {duration: 20000, fill: "forwards"})
    }, [blob])
    useEffect(() => {
        window.addEventListener("pointermove", handlePointerMove);
        return () => {
            window.removeEventListener("pointermove", handlePointerMove)
        }
    }, [])
    return (
        <div style={{
            position: "fixed",
            zIndex: -1,
            width: "100%",
            height: "100%",
            top: 0,
            overflow: "hidden",
            right: 0,
            left: 0,
            pointerEvents: "none",
            filter: "blur(150px)",
        }}>
            <div ref={blob} className={styles.blob}/>
            <div className={styles.blob__blur}/>
        </div>
    )
}
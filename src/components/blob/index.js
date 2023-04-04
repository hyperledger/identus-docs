import React, {useCallback, useEffect, useRef, useState} from 'react';
import styles from './index.module.css';

export default function Blob() {
    const canvasRef = useRef(null);
    const [canvasSize, setCanvasSize] = useState({width: window.innerWidth, height: window.innerHeight});
    const [client, setClient] = useState({x: 0, y: 0});
    const [position, setPosition] = useState({x: 0, y: 0});
    const [isAnimating, setIsAnimating] = useState(false);
    const [startTime, setStartTime] = useState(null);

    const draw = useCallback((x, y) => {
        const context = canvasRef.current.getContext("2d");
        context.clearRect(0, 0, canvasSize.width, canvasSize.height);
        const radius = 400;
        const gradient = context.createLinearGradient(x - radius, y, x + radius, y);
        context.shadowBlur = 1000;
        context.shadowColor = "r#5FE9D0";
        gradient.addColorStop(0, "#2ED3B7");
        gradient.addColorStop(1, "#5FE9D0");
        context.filter = "blur(50px) opacity(.5)";
        // context.transform = 'scale(1, 5)'
        context.beginPath();
        context.arc(x, y, radius, 0, 2 * Math.PI);
        context.fillStyle = gradient;
        context.fill();
    }, [canvasSize]);

    const handlePointerMove = useCallback((event) => {
        const {clientX, clientY} = event;
        setStartTime(Date.now());
        setClient({x: clientX, y: clientY});
    }, [setStartTime, setClient]);

    const handleAnimation = useCallback(() => {
        draw(client.x, client.y);

        function animate() {
            const currentTime = Date.now();
            const elapsedTime = currentTime - startTime;
            const progress = Math.min(elapsedTime / 1000, 1);
            const newX = position.x + (client.x - position.x) * progress;
            const newY = position.y + (client.y - position.y) * progress;

            // Rotate and scale the canvas
            const rotation = progress * 360;
            const scale = 1 + (progress / 2);
            const context = canvasRef.current.getContext("2d");
            context.save();
            context.translate(newX, newY);
            context.rotate(rotation * (Math.PI / 180));
            context.scale(scale, scale);
            context.translate(-newX, -newY);

            if (progress < 1) {
                requestAnimationFrame(animate);
            }

            // Draw the circle and restore the canvas
            draw(newX, newY);
            setPosition({x: newX, y: newY});
            context.restore();
        }

        setIsAnimating(true);
        requestAnimationFrame(animate);

        return () => setIsAnimating(false);
    }, [position, client, draw, startTime]);

    useEffect(() => {
        handleAnimation();
    }, [startTime, canvasSize]);

    useEffect(() => {
        window.addEventListener("pointermove", handlePointerMove);
        window.addEventListener("resize", () => {
            setCanvasSize({
                width: window.innerWidth,
                height: window.innerHeight
            });
        });
        return () => {
            window.removeEventListener("pointermove", handlePointerMove);
            window.removeEventListener("resize", () => {
            });
        };
    }, [canvasRef, canvasSize, handlePointerMove]);

    return (
        <canvas
            className={styles.blob__wrapper}
            height={canvasSize.height}
            width={canvasSize.width}/>

    )

}

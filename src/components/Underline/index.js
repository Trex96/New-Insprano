"use client"
import { useEffect, useRef } from 'react';
import styles from './Style.module.css'
import PropTypes from 'prop-types';


UnderLine.propTypes = {
    marginTop: PropTypes.string.isRequired,
    marginBottom: PropTypes.string.isRequired
};


function UnderLine({marginTop, marginBottom}) {
    const path = useRef(null);
    const animationRef = useRef(null);
    let progress = 0;
    let x = 0.5;
    let time = Math.PI / 2;

    const setPath = (progress) => {
        if (!path.current) return;
        
        const {innerWidth} = window;
        const width = innerWidth * 0.7;
        const pathData = `M0 50 Q${width * x} ${50 + progress}, ${width} 50`;
        
        try {
            path.current.setAttribute("d", pathData);
        } catch (error) {
            console.error('Error setting path:', error);
        }
    }

    const manageMouseEnter = () => {
        if(animationRef.current) {
            window.cancelAnimationFrame(animationRef.current);
            animationRef.current = null;
        }
    }

    const manageMouseMove = (e) => {
        if (!path.current) return;

        const {movementY, clientX} = e;
        const {left, width} = path.current.getBoundingClientRect();
        x = (clientX - left) / width;
        progress += movementY;
        setPath(progress);
    }

    const manageMouseLeave = () => {
        animateOut();
    }

    const lerp = (x, y, a) => x * (1-a) + y * a;

    const animateOut = () => {
        if (!path.current) return;

        const newProgress = progress * Math.sin(time);
        time += 0.2;
        setPath(newProgress);
        progress = lerp(progress, 0, 0.025);

        if(Math.abs(progress) > 0.75) {
            animationRef.current = window.requestAnimationFrame(animateOut);
        } else {
            resetAnimation();
        }
    }

    const resetAnimation = () => {
        time = Math.PI / 2;
        progress = 0;
        if (path.current) {
            setPath(0);
        }
    }

    useEffect(() => {
        setPath(progress);
        
        return () => {
            if (animationRef.current) {
                window.cancelAnimationFrame(animationRef.current);
            }
        };
    }, []);

    const dynamicStyles = {
        marginTop,
        marginBottom,
    };

    return (
        <div className='w-full'>
            <div 
                style={dynamicStyles}
                className={`line ${styles.line} relative w-[100%] h-[.25vw] mt-[16vw] mb-[6vw]
                sm:h-[.01vw]`}
            >
                <div 
                    className={`box ${styles.box}`} 
                    onMouseEnter={manageMouseEnter}
                    onMouseMove={manageMouseMove}
                    onMouseLeave={manageMouseLeave}
                >
                </div>
                <svg className='w-full h-[100px] absolute -top-[50px]'>
                    <path 
                        ref={path} 
                        className={`path1 ${styles.path1}`}
                        d="M0 50 Q0 50, 0 50"
                    />
                </svg>
            </div>
        </div>
    )
}

export default UnderLine
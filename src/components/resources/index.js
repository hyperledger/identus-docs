import React, {useCallback, useRef, useState} from 'react'
import styles from './index.module.css';
import Link from '@docusaurus/Link';
import {useLocation} from '@docusaurus/router';

const RESOURCES = [
    {
        title: "Tutorials",
        imgSrc: "/img/resources/tutorials.svg",
        content: "Learn how to build with Atala PRISM through our tutorials",
        linkTo: "/tutorials"
    },
    {
        title: "Wallet SDK Swift",
        imgSrc: "/img/resources/wallet-sdk-swift.svg",
        content: "Build Swift-based applications using our SDKs",
        linkTo: "https://swift-docs.atalaprism.io"
    },
    {
        title: "Wallet SDK TypeScript",
        imgSrc: "/img/resources/wallet-sdk-typescript.svg",
        content: "Build web-based applications using our SDKs",
        linkTo: "#"
    },
    {
        title: "APIs",
        imgSrc: "/img/resources/apis.svg",
        content: "Our APIs simplify agent management and reduce time and cost-to-solution for developers",
        linkTo: "/agent-api"
    },
    {
        title: "Resources",
        imgSrc: "/img/resources/resources.svg",
        content: "Everything you need to learn more about Atala PRISM",
        linkTo: "https://github.com/input-output-hk/prism-did-method-spec/blob/main/w3c-spec/PRISM-method.md"
    },
    {
        title: "Changelog",
        imgSrc: "/img/resources/changelog.svg",
        content: "View the previous versions of Atala PRISM",
        linkTo: "http://atala-prism-v2-changelog-page.io/"
    },
]

function ResourceLink({linkTo}) {
    // const {colorMode} = useColorMode()
    return (
        <div className={styles.resource__link}>
            <svg width={23} height={22} fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M3.338 6A9.996 9.996 0 0 1 12 1c5.523 0 10 4.477 10 10s-4.477 10-10 10a9.996 9.996 0 0 1-8.662-5M11 15l4-4m0 0-4-4m4 4H1"
                    stroke="#667085"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </svg>
        </div>
    )
}

function Resource(props) {
    const ref = useRef(null);
    const handleMouseMove = useCallback((event) => {
        const {clientX, clientY, currentTarget} = event;
        const {height : targetHeight, width: targetWidth, x: offsetX, y: offsetY} = currentTarget.getBoundingClientRect();
        const centerX = targetWidth / 2;
        const centerY = targetHeight / 2;
        const mouseX = (clientX - offsetX);
        const mouseY = (clientY - offsetY);
        const x = ((mouseX - centerX) * .08);
        const y = ((mouseY - centerY) * .08);

        ref.current.animate({transform: `rotateX(${x}deg) rotateY(${y}deg)`}, {fill: "forwards"})
    }, [ref])
    const handleMouseLeave = useCallback((event) => {
        ref.current.animate({transform: `rotateX(${0}deg) rotateY(${0}deg)`}, {fill: "forwards", duration: 1000})
    }, [])
    return (
        <Link
              ref={ref}
              href={props.linkTo}
              className={styles.home__resources__resource}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
        >
            <img src={props.imgSrc} alt={props.title}/>
            <h3>{props.title}</h3>
            <p>{props.content}</p>
            <ResourceLink linkTo={props.linkTo}/>
        </Link>
    )
}

export default function HomeResources() {
    return (
        <div className={styles.home__resources}>
            {
                RESOURCES.map((resource, index) => (
                    <Resource {...resource} key={index}/>
                ))
            }
        </div>
    )
}
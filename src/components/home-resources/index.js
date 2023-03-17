import React from 'react'
import styles from './index.module.css';

const RESOURCES = [
    {
        title: "Get started",
        content: "This guide will walk you through the process of setting up and using your digital identity.",
        imgSrc: "/img/resources/get-started.svg",
        button: {
            text: "Get started",
            link: "#"
        },
    },
    {
        title: "Docs",
        content: "Welcome to the ATALA Prism V2 SSI ecosystem! This guide will walk you through the process of...",
        imgSrc: "/img/resources/docs.svg",
        button: {
            text: "Get started",
            link: "#"
        },
    },
    {
        title: "Tutorials",
        imgSrc: "/img/resources/tutorials.svg",
        content: "Welcome to the ATALA Prism V2 SSI ecosystem! This guide will walk you through the process of...",
        button: {
            text: "Get started",
            link: "#"
        },
    },
    {
        title: "APIs",
        imgSrc: "/img/resources/apis.svg",
        content: "Welcome to the ATALA Prism V2 SSI ecosystem! This guide will walk you through the process of...",
        button: {
            text: "Get started",
            link: "#"
        },
    },
    {
        title: "SDKs",
        imgSrc: "/img/resources/sdks.svg",
        content: "Welcome to the ATALA Prism V2 SSI ecosystem! This guide will walk you through the process of...",
        button: {
            text: "Get started",
            link: "#"
        },
    },
    {
        title: "Wallet",
        imgSrc: "/img/resources/wallet.svg",
        content: "Welcome to the ATALA Prism V2 SSI ecosystem! This guide will walk you through the process of...",
        button: {
            text: "Get started",
            link: "#"
        },
    },
    {
        title: "Resources",
        imgSrc: "/img/resources/resources.svg",
        content: "Welcome to the ATALA Prism V2 SSI ecosystem! This guide will walk you through the process of...",
        button: {
            text: "Get started",
            link: "#"
        },
    },
    {
        title: "Changelog",
        imgSrc: "/img/resources/changelog.svg",
        content: "Welcome to the ATALA Prism V2 SSI ecosystem! This guide will walk you through the process of...",
        button: {
            text: "Get started",
            link: "#"
        },
    },
]

export default function HomeResources() {
    return (
        <div className={styles.home__resources}>
                    {
                        RESOURCES.map((resource, index) => (
                            <div key={index}>
                                {
                                    index === 0 ? (
                                        <>
                                            <img src={resource.imgSrc} alt={resource.title}/>
                                            <div>
                                                <h3>{resource.title}</h3>
                                                <p>{resource.content}</p>
                                                <button className={styles.button}>
                                                    {resource.button.text}
                                                </button>
                                            </div>
                                        </>
                                    ) : (
                                        <>

                                            <img src={resource.imgSrc} alt={resource.title}/>
                                            <h3>{resource.title}</h3>
                                            <p>{resource.content}</p>
                                            <button className={styles.button}>
                                                {resource.button.text}
                                            </button>
                                        </>
                                    )
                                }
                            </div>
                        ))
                    }
        </div>
    )
}
import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import HomeResources from '../resources';

const FeatureList = [
    {
        title: 'Decentralization',
        Svg: require('@site/static/img/modularity-and-flexibility.svg').default,
        description: (
            <>
                Atala PRISM’s suite of infrastructure products provides easy-to-use and easy-to-integrate verifiable
                data and identity components that power diverse and scalable solutions.
            </>
        ),
    },
    {
        title: 'Interoperability',
        Svg: require('@site/static/img/interoperability.svg').default,
        description: (
            <>
                Build secure, private, and verifiable interactions between individuals, organizations, and devices using
                open standards and protocols such as <a href="https://www.w3.org/TR/did-core/" target="_blank"
                                                        rel="noreferrer">W3C DID spec</a>, <a
                href="https://www.w3.org/TR/vc-data-model/" target="_blank" rel="noreferrer">W3C VC-JWT</a>, <a
                href="https://hyperledger.github.io/anoncreds-spec/"
                target="_blank"
                rel="noreferrer">HL
                Anoncreds</a> , and <a href="https://identity.foundation/didcomm-messaging/spec/" target="_blank"
                                       rel="noreferrer">DIDComm V2</a> .
            </>
        ),
    },
    {
        title: 'Security and Privacy',
        Svg: require('@site/static/img/security-privacy.svg').default,
        description: (
            <>
                Security features, such as end-to-end encryption, verifiable claims, and secure storage of data, ensure
                software-defined trust and protection for your users
            </>
        ),
    },
];

function Feature({Svg, title, description}) {
    return (
        <div className={clsx('col col--4')}>
            <div className="text--center">
                <Svg className={styles.featureSvg} role="img"/>
            </div>
            <div className="text--center padding-horiz--md">
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
        </div>
    );
}

export default function HomepageFeatures() {
    return (
        <section className={styles.features}>
            <div className="container">
                <div className="row">
                    {FeatureList.map((props, idx) => (
                        <Feature key={idx} {...props} />
                    ))}
                </div>
                <HomeResources/>
            </div>
        </section>
    );
}

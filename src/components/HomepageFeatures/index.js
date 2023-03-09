import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Decentralization',
    Svg: require('@site/static/img/decentralization.svg').default,
    description: (
      <>
        Designed to allow individuals to take control
        of their personal data and interactions without relying
        on centralized intermediaries, providing autonomy and security to the users.
      </>
    ),
  },
  {
    title: 'Interoperability',
    Svg: require('@site/static/img/interoperability.svg').default,
    description: (
      <>
        Enables users to easily access a wide range of services
        and benefits across different platforms, allowing for secure,
        private, and verifiable interactions between individuals,
        organizations, and devices using open standards and protocols.
      </>
    ),
  },
  {
    title: 'Security and Privacy',
    Svg: require('@site/static/img/security-privacy.svg').default,
    description: (
      <>
        Provides strong protection for users' personal information
        and interactions through features such as end-to-end encryption,
        verifiable claims, and secure storage of data, ensuring trust and protection
        for the users.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
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
      </div>
    </section>
  );
}

import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/features';

import styles from './index.module.css';
import AtalaGraphic from '../components/atala-graphic';
import Blob from '../components/blob';
import Button from '../components/button';
function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero', styles.heroBanner)}>
      <div className={clsx('container', styles.container)}>
        <div className={styles.hero__content}>
          <span className={clsx('hero__subtitle', styles.hero__tagline)}>{siteConfig.tagline}</span>
          <h1 className={clsx('hero__title', styles.hero__title)} dangerouslySetInnerHTML={{ __html: siteConfig.title }} />
          <Button
            className={clsx("button button--lg", styles.hero__button)}
            to="/home/">
            Get Started
          </Button>
        </div>
        <AtalaGraphic />
      </div>
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Hyperledger Identus - ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <Blob />
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}

import React from 'react';
import {useThemeConfig, useColorMode} from '@docusaurus/theme-common';
import styles from './index.module.css';

function Footer() {
    const {footer} = useThemeConfig();
    const {colorMode} = useColorMode()
    if (!footer) {
        return null;
    }
    const {copyright, logo} = footer;
    return (
        <div className="container">
            <footer className={styles.footer}>
                <img src={logo.src} alt={logo.alt} width={logo.width} height={logo.height}/>
                <span className={styles.copyright}>{copyright}</span>
            </footer>
        </div>
    );
}

export default React.memo(Footer);

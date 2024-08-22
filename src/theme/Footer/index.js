import React from 'react';
import {useThemeConfig, useColorMode} from '@docusaurus/theme-common';
import styles from './index.module.css';

const Logo = ({color = "#fff"}) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={145} height={38} fill="none">)

function Footer() {
    const {footer} = useThemeConfig();
    const {colorMode} = useColorMode()
    if (!footer) {
        return null;
    }
    const {copyright} = footer;

    return (
        <div className="container">
            <footer className={styles.footer}>
                <Logo color={colorMode === 'light' ? "#101828" : "#ffffff"}/>
                <span className={styles.copyright}>{copyright}</span>
            </footer>
        </div>
    );
}

export default React.memo(Footer);

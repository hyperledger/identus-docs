import React from 'react';
import {useThemeConfig, useColorMode} from '@docusaurus/theme-common';
import styles from './index.module.css';

const Logo = ({color = "#fff"}) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={145} height={38} fill="none">
        <g filter="url(#a)">
            <g clipPath="url(#b)">
                <rect width={32} height={32} x={3} y={2} fill="url(#c)" rx={8} />
                <path
                    fill="#fff"
                    fillRule="evenodd"
                    d="m18.671 8.46-5.798 9.968a.541.541 0 0 1-.936-.001l-.372-.646a.542.542 0 0 1 0-.542l5.8-9.97c.209-.36.73-.358.937.003l.371.647a.54.54 0 0 1-.001.54h-.001ZM11.93 20.05l-2.324 3.995a.542.542 0 0 1-.47.27l-.746-.003a.541.541 0 0 1-.465-.813l2.324-3.997a.542.542 0 0 1 .47-.269l.746.003a.541.541 0 0 1 .466.813ZM12.382 24.326l.746.003a.54.54 0 0 0 .47-.27l7.061-12.14a.54.54 0 0 0 .001-.54l-.371-.647a.541.541 0 0 0-.937-.003l-7.436 12.784c-.21.36.05.811.465.813h.001ZM16.371 24.342l.746.003a.543.543 0 0 0 .47-.27l5.058-8.695a.54.54 0 0 0 .001-.542l-.371-.646a.541.541 0 0 0-.938-.003l-5.432 9.34c-.209.36.05.81.466.813ZM19.582 24.625l.373.644c.209.36.728.36.937 0l4.425-7.607a.541.541 0 0 0-.466-.813l-.746-.003a.542.542 0 0 0-.47.27l-4.052 6.966a.54.54 0 0 0 0 .543ZM22.88 28.73l1.319-2.268a.54.54 0 0 0 0-.542l-.37-.647a.541.541 0 0 0-.938-.002l-1.32 2.272a.54.54 0 0 0 0 .543l.372.644c.209.36.728.36.937 0ZM28.845 16.862l-.744-.005a.541.541 0 0 0-.472.269l-3.795 6.526c-.21.36.05.812.465.813l.746.003a.54.54 0 0 0 .47-.27l3.794-6.523a.541.541 0 0 0-.465-.813h.001Z"
                    clipRule="evenodd"
                />
            </g>
        </g>
        <path
            fill={color}
            fillRule="evenodd"
            d="M47.623 12.906a.41.41 0 0 1 .41-.41h1.9c1.078 0 1.853.214 2.3.639.45.424.668 1.04.668 1.884 0 .843-.218 1.42-.67 1.853-.448.428-1.221.647-2.298.647h-1.9a.41.41 0 0 1-.41-.41V12.905Zm2.48-2.714H45.41a.41.41 0 0 0-.41.41v14.84c0 .226.184.41.41.41h1.802a.41.41 0 0 0 .41-.41v-5.21a.41.41 0 0 1 .411-.41h2.07c1.735 0 3.091-.426 4.031-1.267.95-.85 1.432-2.04 1.432-3.538 0-1.497-.465-2.668-1.383-3.532-.912-.859-2.285-1.293-4.08-1.293ZM66.605 15.103c0 1.735-.935 2.543-2.947 2.543h-2.07a.41.41 0 0 1-.41-.41v-4.265a.41.41 0 0 1 .41-.41h2.07c2.01 0 2.947.808 2.947 2.543v-.001Zm1.555 3.069c.737-.806 1.11-1.873 1.11-3.174 0-1.436-.465-2.61-1.38-3.488-.912-.874-2.278-1.317-4.063-1.317h-4.86a.41.41 0 0 0-.411.41v14.84c0 .226.183.41.41.41h1.802a.41.41 0 0 0 .41-.41v-5.295a.41.41 0 0 1 .41-.41h.934c.14 0 .27.071.346.189l3.666 5.737c.076.118.206.189.346.189h2.03a.411.411 0 0 0 .343-.637l-3.407-5.163a.408.408 0 0 1 .221-.615c.863-.264 1.567-.688 2.095-1.268"
            clipRule="evenodd"
        />
        <path
            fill={color}
            d="M74.58 10.192H72.78a.41.41 0 0 0-.41.41v14.84c0 .227.183.41.41.41h1.801a.41.41 0 0 0 .41-.41v-14.84a.41.41 0 0 0-.41-.41Z"
        />
        <path
            fill={color}
            fillRule="evenodd"
            d="M86.686 17.743c-.596-.287-1.393-.594-2.37-.91-.778-.251-1.395-.478-1.833-.677a2.841 2.841 0 0 1-1.016-.758c-.252-.3-.375-.689-.375-1.189 0-.637.19-1.11.58-1.448.407-.352.945-.521 1.644-.521.768 0 1.352.193 1.785.59.35.32.59.67.723 1.063.065.19.252.312.453.303l1.87-.072a.456.456 0 0 0 .423-.564c-.233-.95-.747-1.76-1.53-2.409-.925-.763-2.177-1.151-3.724-1.151-.994 0-1.875.175-2.62.521-.759.353-1.35.86-1.76 1.509-.41.647-.617 1.402-.617 2.244 0 .976.226 1.781.671 2.39a4.26 4.26 0 0 0 1.595 1.35c.588.284 1.37.585 2.328.899.785.247 1.412.481 1.869.694.419.198.776.47 1.06.813.268.32.398.735.398 1.266 0 .619-.189 1.108-.578 1.497-.384.384-.959.577-1.71.577-.59 0-1.094-.116-1.497-.347a2.554 2.554 0 0 1-.939-.88 2.762 2.762 0 0 1-.325-.75.455.455 0 0 0-.454-.337l-1.845.044a.454.454 0 0 0-.434.54c.13.659.394 1.262.786 1.8.493.676 1.16 1.212 1.98 1.596.815.38 1.753.574 2.791.574 1.039 0 1.994-.207 2.736-.616.749-.412 1.316-.957 1.686-1.62a4.35 4.35 0 0 0 .553-2.144c0-1.018-.228-1.854-.68-2.483a4.277 4.277 0 0 0-1.629-1.395M105.014 10.7l-4.431 10.654a.411.411 0 0 1-.758.003L95.32 10.699a.41.41 0 0 0-.378-.25h-2.205a.41.41 0 0 0-.41.41v14.584c0 .227.183.41.41.41h1.801a.41.41 0 0 0 .41-.41v-7.736c0-.451.624-.573.792-.154l3.242 8.044a.411.411 0 0 0 .381.258h1.631a.41.41 0 0 0 .381-.258l3.219-8.056c.168-.42.793-.3.793.153v7.75c0 .227.184.41.411.41h1.8a.41.41 0 0 0 .41-.41V10.86a.41.41 0 0 0-.41-.41h-2.205c-.166 0-.316.1-.38.253l.001-.002Z"
            clipRule="evenodd"
        />
        <defs>
            <linearGradient
                id="c"
                x1={3}
                x2={35}
                y1={2}
                y2={2}
                gradientUnits="userSpaceOnUse"
            >
                <stop stopColor="#2C2FE0" />
                <stop offset={1} stopColor="#5559F2" />
            </linearGradient>
            <clipPath id="b">
                <rect width={32} height={32} x={3} y={2} fill="#fff" rx={8} />
            </clipPath>
            <filter
                id="a"
                width={38}
                height={38}
                x={0}
                y={0}
                colorInterpolationFilters="sRGB"
                filterUnits="userSpaceOnUse"
            >
                <feFlood floodOpacity={0} result="BackgroundImageFix" />
                <feColorMatrix
                    in="SourceAlpha"
                    result="hardAlpha"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                />
                <feOffset dy={1} />
                <feGaussianBlur stdDeviation={1} />
                <feColorMatrix values="0 0 0 0 0.0627451 0 0 0 0 0.0941176 0 0 0 0 0.156863 0 0 0 0.06 0" />
                <feBlend
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_5683_166489"
                />
                <feColorMatrix
                    in="SourceAlpha"
                    result="hardAlpha"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                />
                <feOffset dy={1} />
                <feGaussianBlur stdDeviation={1.5} />
                <feColorMatrix values="0 0 0 0 0.0627451 0 0 0 0 0.0941176 0 0 0 0 0.156863 0 0 0 0.1 0" />
                <feBlend
                    in2="effect1_dropShadow_5683_166489"
                    result="effect2_dropShadow_5683_166489"
                />
                <feBlend
                    in="SourceGraphic"
                    in2="effect2_dropShadow_5683_166489"
                    result="shape"
                />
            </filter>
        </defs>
    </svg>
)

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

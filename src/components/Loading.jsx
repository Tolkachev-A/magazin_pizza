import React from "react"
import ContentLoader from "react-content-loader"

export const MyLoader = (props) => (
    <ContentLoader
        className='pizza-block'
        speed={2}
        width={280}
        height={460}
        viewBox="0 0 280 460"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
        {...props}
    >
        <circle cx="138" cy="114" r="110" />
        <rect x="0" y="236" rx="0" ry="0" width="280" height="25" />
        <rect x="0" y="283" rx="6" ry="6" width="280" height="80" />
        <rect x="1" y="389" rx="6" ry="6" width="83" height="33" />
        <rect x="128" y="377" rx="20" ry="20" width="155" height="54" />
    </ContentLoader>
)


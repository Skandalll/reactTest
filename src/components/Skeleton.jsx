import React from "react"
import ContentLoader from "react-content-loader"

const Skeleton = (props) => (
    <ContentLoader
        speed={0.4}
        width={270}
        height={460}
        viewBox="0 0 270 460"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
        {...props}
    >
        <circle cx="135" cy="132" r="131" />
        <rect x="21" y="288" rx="0" ry="0" width="246" height="94" />
        <rect x="128" y="347" rx="0" ry="0" width="23" height="2" />
    </ContentLoader>
)

export default Skeleton
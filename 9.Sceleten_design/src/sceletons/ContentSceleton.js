import React from 'react'
import Shimmer from './Shimmer'
import SkeletonElement from './SkeletonElement'

function ContentSceleton({theme}) {
    const themeclass = theme || "light"

    return (
        <div className={`skeleton-wrapper ${themeclass}`}>
            <div className="skeleton-post">
                <SkeletonElement type='title'/>
                <SkeletonElement type='text'/>
                <SkeletonElement type='text'/>
                <SkeletonElement type='text'/>
            </div>
            <Shimmer/>
        </div>
    )
}

export default ContentSceleton

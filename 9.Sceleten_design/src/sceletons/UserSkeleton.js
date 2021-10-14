import React from 'react'
import Shimmer from './Shimmer'
import SkeletonElement from './SkeletonElement'

function UserSkeleton({theme}) {
    const themeclass = theme || "light"

    return (
        <div className={`skeleton-wrapper ${themeclass}`}>
            <div className="skeleton-user">
                <div>
                <SkeletonElement type='avtar'/>
                    
                </div>
                <div>
                <SkeletonElement type='title'/>
                <SkeletonElement type='text'/>
                <SkeletonElement type='text'/>

                </div>
        <Shimmer/>
            </div>
        </div>
    )
}

export default UserSkeleton

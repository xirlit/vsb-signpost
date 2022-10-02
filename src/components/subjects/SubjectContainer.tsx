import { FC, PropsWithChildren } from "react";

import './SubjectContainer.css'

const SubjectContainer: FC<PropsWithChildren> = ({children}) => {
    return (
        <div className='subject-container'>
            {children}
        </div>
    )
}

export default SubjectContainer;
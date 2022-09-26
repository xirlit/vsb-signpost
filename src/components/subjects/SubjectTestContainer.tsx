import { FC, PropsWithChildren } from "react";

import './SubjectTestContainer.css'

type SubjectTestContainerProps = PropsWithChildren<{
    title: string,
    tests?: SubjectTestProps[]
}>

export type SubjectTestProps = {
    testName?: string,
    minPoints: number,
    maxPoints: number,
    date?: Date,
    attempts?: number
}

const SubjectTestContainer: FC<SubjectTestContainerProps> = ({title, children, tests}) => {
    const cn = 'subject-test-container';
    return (
        <div className={cn}>
            <div className={cn.concat('__title')}>{title}</div>
            {tests?.map(test => {
                return (
                    <div className={cn.concat('__test--container')}>
                        <div className={cn.concat('__test--value')}>{test.testName}</div>
                        <div className={cn.concat('__test--value')}>{test.minPoints}</div>
                        <div className={cn.concat('__test--value')}>{test.maxPoints}</div>
                        <div className={cn.concat('__test--value')}>{test.date?.toLocaleDateString('en-GB')}</div>
                        <div className={cn.concat('__test--value')}>{test.attempts}</div>
                    </div>
                )
            })}
            <div>{children}</div>
        </div>
    )
}

export default SubjectTestContainer;
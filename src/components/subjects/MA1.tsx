import { FC } from 'react';
import SubjectContainer from './SubjectContainer';
import SubjectTestContainer, { SubjectTestProps } from './SubjectTestContainer'

import './MA1.css'

const MA1: FC = () => {
    const creditsTests: SubjectTestProps[] = [
        {
            testName: "1. písemka",
            minPoints: 0,
            maxPoints: 15,
            date: new Date('2022-09-24')
        },
        {
            testName: "2. písemka",
            minPoints: 0,
            maxPoints: 15
        }
    ];

    const finalTest: SubjectTestProps[] = [
        {
            minPoints: 70,
            maxPoints: 21,
            attempts: 3
        }
    ]
    return (
        <SubjectContainer>
            <div>Matematická analýza 1</div>
            <SubjectTestContainer title='Zápočet' tests={creditsTests} />
            <SubjectTestContainer title='Zkouška' tests={finalTest}/>
            <div>
                Za zápočtový testy dohromady minimálně 10 bodů, 
                body ze zápočtových testů se připočítávají k celkovým bodům ze zkoušky.
            </div>
            <div>Celkem bodů: 100</div>
            <div>Minimum bodů: 51</div>
            <div>Minimum bodů: 51</div>
            <div>Minimum bodů: 51</div>
            <div>Minimum bodů: 51</div>
            <div>Minimum bodů: 51</div>
            <div>Minimum bodů: 51</div>
            <div>Minimum bodů: 51</div>
            <div>Minimum bodů: 51</div>
            <div>Minimum bodů: 51</div>
            <div>Minimum bodů: 51</div>
            <div>Minimum bodů: 51</div>
            <div>Minimum bodů: 51</div>
            <div>Minimum bodů: 51</div>
            <div>Minimum bodů: 51</div>
            <div>Minimum bodů: 51</div>
            <div>Minimum bodů: 51</div>
            <div>Minimum bodů: 51</div>
            <div>Minimum bodů: 51</div>
            <div>Minimum bodů: 51</div>
            <div>Minimum bodů: 51</div>
            <div>Minimum bodů: 51</div>
            <div>Minimum bodů: 51</div>
            <div>Minimum bodů: 51</div>
            <div>Minimum bodů: 51</div>
            <div>Minimum bodů: 51</div>
            <div>Minimum bodů: 51</div>
            <div>Minimum bodů: 51</div>
            <div>Minimum bodů: 51</div>
            <div>Minimum bodů: 51</div>
            <div>Minimum bodů: 51</div>
            <div>Minimum bodů: 51</div>
            <div>Minimum bodů: 51</div>
            <div>Minimum bodů: 51</div>
            <div>Minimum bodů: 51</div>
            <div>Minimum bodů: 51</div>
            <div>Minimum bodů: 51</div>
            <div>Minimum bodů: 51</div>
            <div>Minimum bodů: 51</div>
            <div>Minimum bodů: 51</div>
            <div>Minimum bodů: 51</div>
            <div>Minimum bodů: 51</div>
            <div>Minimum bodů: 51</div>
            <div>Minimum bodů: 51</div>
            <div>Minimum bodů: 51</div>
            <div>Minimum bodů: 51</div>
            <div>Minimum bodů: 51</div>
            <div>Minimum bodů: 51</div>
            <div>Minimum bodů: 51</div>
            <div>Minimum bodů: 51</div>
            <div>Minimum bodů: 51</div>
        </SubjectContainer>
    )
}

export default MA1;
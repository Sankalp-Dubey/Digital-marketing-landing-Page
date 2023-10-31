import { SectionContainer } from '@/components/layout.component'
import { SectionSubTitle } from '@/components/typography.component'
import React from 'react'

const details = [
    {
        heading: 'Web design and development',
        description: 'Spirehub Softwraes is a top web development company in India that provides quality website design and web application development services which can take your business to new heights.'
    },
    {
        heading: 'E-commerce solutions',
        description: 'Spirehub Softwraes is Preferred Android app development company that builds highly robust and scalable Android apps with easy user interface and better user experience (UI/UX) meeting your requirements and budget.'
    },
    {
        heading: 'PHP development',
        description: 'Spirehub Softwraes is Preferred Android app development company that builds highly robust and scalable Android apps with easy user interface and better user experience (UI/UX) meeting your requirements and budget.'
    },
    {
        heading: 'PHP development',
        description: 'Spirehub Softwraes is Preferred Android app development company that builds highly robust and scalable Android apps with easy user interface and better user experience (UI/UX) meeting your requirements and budget.'
    },
    {
        heading: 'PHP development',
        description: 'Spirehub Softwraes is Preferred Android app development company that builds highly robust and scalable Android apps with easy user interface and better user experience (UI/UX) meeting your requirements and budget.'
    },
    {
        heading: 'PHP development',
        description: 'Spirehub Softwraes is Preferred Android app development company that builds highly robust and scalable Android apps with easy user interface and better user experience (UI/UX) meeting your requirements and budget.'
    },
]

function CompanyServices() {
    return (
        <SectionContainer>
            <div className='company-service-container'>
                <div className='comapny-services-grid grid grid-cols-2'>
                    <div className='company-div'>
                        <div className='linear-line'></div>
                        <div className='flex flex-col md:gap-3 gap-2'>
                            <SectionSubTitle >Web design and  <br /> development</SectionSubTitle>
                            <p>Spirehub Softwraes is a top web development company in India that provides quality website design and web application development services which can take your business to new heights.</p>
                        </div>
                    </div>
                    <div className='company-div'>
                        <div className='linear-line'></div>
                        <div className='flex flex-col md:gap-3 gap-2'>
                            <SectionSubTitle >E-commerce <br /> solutions</SectionSubTitle>
                            <p>Spirehub Softwraes is Preferred Android app development company that builds highly robust and scalable Android apps with easy user interface and better user experience (UI/UX) meeting your requirements and budget.</p>
                        </div>
                    </div>
                    <div className='company-div'>
                        <div className='linear-line'></div>
                        <div className='flex flex-col md:gap-3 gap-2'>
                            <SectionSubTitle >PHP <br /> development</SectionSubTitle>
                            <p>Spirehub Softwraes is Preferred Android app development company that builds highly robust and scalable Android apps with easy user interface and better user experience (UI/UX) meeting your requirements and budget.</p>
                        </div>
                    </div>
                    <div className='company-div'>
                        <div className='linear-line'></div>
                        <div className='flex flex-col md:gap-3 gap-2'>
                            <SectionSubTitle >PHP <br /> development</SectionSubTitle>
                            <p>Spirehub Softwraes is Preferred Android app development company that builds highly robust and scalable Android apps with easy user interface and better user experience (UI/UX) meeting your requirements and budget.</p>
                        </div>
                    </div>
                    <div className='company-div'>
                        <div className='linear-line'></div>
                        <div className='flex flex-col md:gap-3 gap-2'>
                            <SectionSubTitle >PHP <br /> development</SectionSubTitle>
                            <p>Spirehub Softwraes is Preferred Android app development company that builds highly robust and scalable Android apps with easy user interface and better user experience (UI/UX) meeting your requirements and budget.</p>
                        </div>
                    </div>
                    <div className='company-div'>
                        <div className='linear-line'></div>
                        <div className='flex flex-col md:gap-3 gap-2'>
                            <SectionSubTitle >PHP <br /> development</SectionSubTitle>
                            <p>Spirehub Softwraes is Preferred Android app development company that builds highly robust and scalable Android apps with easy user interface and better user experience (UI/UX) meeting your requirements and budget.</p>
                        </div>
                    </div>
                </div>
            </div>
        </SectionContainer>
    )
}

export default CompanyServices

import { PrimaryButton } from '@/components/buttons.component'
import Iconify from '@/components/iconify'
import { SectionContainer } from '@/components/layout.component'
import { Heading, SectionSubTitle, SectionTitle } from '@/components/typography.component'
import Image from 'next/image'
import React from 'react'

function CompanyInformation() {
    return (
        <div className="our-mission mt-[-20px] md:mt-0">
            <SectionContainer >
                <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-x-10 gap-y-10">
                    <div className='our-mission-img md:mt-0 mt-5'>
                        <Image alt='our-mission' src='/images/girlwithlaptop.png' height={700} width={500} className='w-full' />
                    </div>

                    <div className="our-mission-content md: mb-0 mb-8">
                        <SectionTitle className="text-transform: capitalize ">
                            Spirehub Software is one of the top web development companies with over <b>seven years of experience.</b>
                        </SectionTitle>
                        <p className="mb-2 mt-3">
                            Spirehub Softwares is a ISO 27001 certified web development company, backed by a strong workforce of 100+ experts providing high-performance custom web development services of any complexity with incredible competence. Spirehub Softwares is a leading offshare web development company that have been delivering result-oriented web solutions to SME&apos;s across the globe for more than 7+ years. We are committed towards adhering to latest technology trends and successfully implementing en-to-end web solutions that enhances the brand value of your your business. The development cycle at Spirehub Softwares enables us to take the scalibility and reliability of our web solutions to next level so you can focus on your core business process.
                        </p>
                        <PrimaryButton className='md: mt-10 mt-5'>Schedule a Meeting</PrimaryButton>
                    </div>
                </div>
            </SectionContainer>
        </div>
    )
}

export default CompanyInformation

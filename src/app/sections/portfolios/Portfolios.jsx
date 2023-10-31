import { OutlinedWhiteButton } from '@/components/buttons.component'
import { SectionContainer } from '@/components/layout.component'
import { SectionSubTitle, SectionTitle } from '@/components/typography.component'
import Image from 'next/image'
import React from 'react'
import PortfolioTab from './PortfolioTabs'

function Portfolio() {
    return (
        <section className="portfolio-container bg-dark-teal pb-28">
            <SectionContainer className="pt-5">
                <SectionSubTitle className="text-center">
                    <span className="uppercase text-white">Clients who trust us</span>
                </SectionSubTitle>
                <SectionTitle className="text-center">
                    <span className="text-white">Our Portfolios</span>
                </SectionTitle>
                <PortfolioTab />
            </SectionContainer>
        </section>
    )
}

export default Portfolio

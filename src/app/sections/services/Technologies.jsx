import ToolsTab from '@/components/home/ToolsTab'
import { SectionContainer } from '@/components/layout.component'
import { SectionTitle } from '@/components/typography.component'
import Image from 'next/image'
import React from 'react'

function Technologies() {
    return (
        <div className='technology-container'>
            <div className='flex flex-col gap-5 text-center'>
                <SectionTitle><b>Technologies</b> We Work</SectionTitle>
                <p className='technology-content'>Spirehub Softwares places a high value on developing our technical capabilities as an emerging web app development company in India. Our well-skilled developers not have a wealth of knowledge and creative minds, but they are also constanlty in the search for new ideas and innovative approaches to delivering you the masterpiece you embrace.</p>
                <ToolsTab />
            </div>

        </div>
    )
}

export default Technologies

import { Collapsible } from "@/components/Collapsible"
import { aboutData } from '@/data/aboutData'

export default function About() {

    
    return (
        <>
            {
                aboutData.map((element, index) => (
                    <Collapsible 
                        key={index}
                        title={element.title}
                        content={element.content}
                    />        
                ))
            }
        </>
    )
}
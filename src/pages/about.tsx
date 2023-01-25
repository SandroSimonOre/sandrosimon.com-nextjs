import { Collapsible } from "@/components/Collapsible"
import { aboutData } from '@/data/aboutData'

export default function About() {

    
    return (
        <>
            {
                aboutData.filter(element => element.show === true).map((element, index) => (
                    <Collapsible 
                        key={index}
                        title={element.title}
                        paragraphs={element.paragraphs}
                    />        
                ))
            }
        </>
    )
}
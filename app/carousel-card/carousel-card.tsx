import Image from "next/image"

export default function CarouselCard({
    source, 
    title, 
    description, 
    url,
    style
}:{
        source: string, 
        title: string, 
        description: string, 
        url: string,
        style?: React.CSSProperties /* The '?' makes this prop optional. The 'React.CSSProperties makes this prop accept a JS object where the keys are CSS properties and the values are CSS values.' */
}) {
    return(
        <a 
            href={url} 
            target="_blank" 
            className="bg-[#414559] rounded-[20px] place-self-center min-w-2/3 grid grid-rows-1" 
            style={style}
        >
            <Image 
                src={source}
                alt='a picture of a project'
                height={100}
                width={100}
                style={{placeSelf:'center', borderRadius:20+'px', margin:5+'%' }}
            />
            <h2 className="text-white place-self-center">{title}</h2>
            <p className="text-white place-self-center max-w-3/4 text-center mb-[5%]">{description}</p>
        </a>
    )
}
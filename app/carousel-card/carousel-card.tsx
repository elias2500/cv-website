import Image from "next/image"

export default function CarouselCard({source, title, description, url}:{source: string, title: string, description: string, url: string}) {
    return(
        <a href={url} target="_blank" className="bg-black rounded-[20px] place-self-center min-w-2/3 grid grid-rows-1">
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
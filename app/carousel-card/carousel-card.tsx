import Image from "next/image"

export default function CarouselCard() {
    return(
        <div className="bg-black rounded-lg place-self-center min-w-2/3 grid grid-rows-1">
            <Image 
                src='/100x100.png'
                alt='a picture of a project'
                height={100}
                width={100}
                style={{placeSelf:'center', borderRadius:8+'px', }}
            />
            <h2 className="text-white place-self-center">Project name</h2>
            <p className="text-white place-self-center max-w-3/4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
    )
}
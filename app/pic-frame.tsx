import Image from 'next/image';

export default function PictureFrame() {
    return(
        <Image
            src='/egw.jpg'
            alt='A picture of me'
            width={2583}
            height={2583}
            style={{gridColumn:1, gridRow:1, zIndex:2,}}
            className='w-40 h-40 rounded-full ring-4 ring-black'
        />
    )
}
import Image from "next/image"

const Fiveth = () => {
    return (
        <>
            <div className='md:w-[80vw] w-[90vw] max-md:flex-col-reverse py-40 xl:h-[60vh] max-md:py-12 text-white m-auto max-md:h-auto h-screen flex max-md:gap-7 gap-5 justify-between items-center'>
                <div className='relative md:w-[40vw] md:h-[60vh] w-[80vw] h-[40vh]'>
                    <Image src={'/children.png'} className='absolute z-10 top-0' fill={true} />
                </div>
                <div className='flex flex-col max-md:gap-7 gap-5 px-3'>
                    <h2 className='font-extrabold text-3xl md:text-5xl'>Create Profile For Your Kids.</h2>
                    <p className='text-base md:text-lg'>Send Children on Adventure With their favourite Characters in a space made just for them -- Free with your membership</p>
                </div>
            </div>
        </>
    )
}

export default Fiveth
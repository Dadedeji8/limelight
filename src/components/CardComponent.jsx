import { BiBriefcase } from "react-icons/bi"

const CardComponent = ({ content = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis qui et in itaque nisi nostrum quod cum. Dicta nisi voluptatem, facilis nostrum omnis ratione consequatur illo. Temporibus deserunt suscipit possimus?' }) => {
    return (
        <div className="flex flex-col items-center md:items-start justify-center md:justify-start card max-w-[350px] mb-10  ">
            <div><BiBriefcase className="text-8xl  text-yellow-700" /></div>
            <div>
                <h1 className="text-2xl text-center font-semibold md:text-left text-white opacity-70">
                    The Header
                </h1>
                <p className='text-white text-center md:text-left opacity-45 text-sm leading-loose '>
                    {content}</p></div>
        </div>
    )
}

export default CardComponent

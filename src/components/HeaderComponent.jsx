const HeaderComponent = ({ title = 'Hello' }) => {
    return (
        <h1 className='text-3xl md:text-6xl font-black text-center text-white'>
            {title}

        </h1>
    )
}

export default HeaderComponent

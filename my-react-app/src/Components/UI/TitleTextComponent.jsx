export function TitleTextComponent({title, smallTitle, resultTitle}) {

    return (
        <div className="container mt-5">
            {title && <h1 className='text-light'>{title}</h1>}
            {smallTitle && <h2 className='text-light'>{smallTitle}</h2>}
            {resultTitle && <h3 className='text-light'>{resultTitle}</h3>}
        </div>
    )
}
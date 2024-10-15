export default function FileCard ({title, des}) {
    return(
        <div className="card bg-purple-400 text-primary-content w-[259px] h-[210px]">
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p>{des}</p>
                <div className="card-actions justify-end pb-2">
                    <button className="btn btn-xs">Open</button>
                </div>
            </div>
        </div>
    )

}
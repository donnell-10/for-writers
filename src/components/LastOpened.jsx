import React from "react";

const LastOpenedCard = ({project}) => {
    return(
        <div className="border border-black w-[358px] h-[153px] rounded-lg">
            <h2 className="border-b border-gray-600 p-2 text-sm">Last Opened</h2>
            <div className="flex justify-center p-3">
                <h1 className="text-lg">{project.type} ~ {project.name}</h1>
            </div>
            <div className="flex justify-end p-4">
                <button>Open</button>
            </div>
        </div>
    )
}

export default LastOpenedCard
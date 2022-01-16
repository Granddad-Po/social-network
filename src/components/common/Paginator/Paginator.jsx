import s from "./Paginator.module.css";
import React from "react";

let Paginator = ({totalUserCount, pageSize, currentPage, onPageChanged}) => {

    let pagesCount = Math.ceil(totalUserCount / pageSize);

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        if (i <= 20)
            pages.push(i);
    }

    return (
            <div>
                {pages.map(p => {
                    return <span className={currentPage === p ? s.selectedPage : s.pageNumber}
                                 onClick={(e) => {
                                     onPageChanged(p)
                                 }}>{p}</span>
                })}
            </div>
    )
}

export default Paginator;
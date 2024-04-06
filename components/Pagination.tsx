/* eslint-disable */
'use client';

import { PaginationProps } from "utils/types";

export default function Pagination({items, currentPage, pageSize, onPageChange}:PaginationProps){
    const pagesCount = Math.ceil(items / pageSize);

    if (pagesCount === 1) return null;
    const pages = Array.from({ length: pagesCount }, (_, i) => i + 1);
    
    return(
    <div>
        <ul className="pagination">
            {pages.map((page,index)=>(
                <li key={index} className={page === currentPage ? 'pageItemActive' : 'pageItem'}>
                    <p onClick={()=>onPageChange(page)}>{page}</p>
                </li>
            ))}
        </ul>
    </div>);
}
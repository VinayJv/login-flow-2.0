/* eslint-disable */
'use client';

import Pagination from "components/Pagination";
import { useUserContext } from "context/UserContext";
import { useRouter } from "next/navigation";
import { useLayoutEffect, useState } from "react";
import { paginate } from "utils";
import { Categories } from "utils/types";

export default function Dashboard(){
    const router = useRouter();
    const [categories, setCategories] = useState<Categories[]>([]);
    const [pageNumber, setPageNumber] = useState(1);
    const pageSize = 6;

    const paginatedCategories = paginate(categories, pageNumber, pageSize);

    const onPageChange = (page: number) => {
        setPageNumber(page);
    }

    
    const getAllCategories = async() => {
        const { allCategories } = await fetch("/api/categories").then((data)=>data.json());
        setCategories(allCategories);
        console.log(Array.isArray(categories));
    }

    const { userStatus, user } = useUserContext() ?? {}; 

    console.log(userStatus, user, typeof categories);

    useLayoutEffect(()=>{
        if(!userStatus && !user?.verified){
            router.push("/");
        }
        getAllCategories();
    },[]);

    return(
    <div className="categoryContainer">
        <h1>Please mark your interests!</h1>
        <p>We will keep you notified</p>
        <div className="categories">
            <p>My saved interests!</p>
            {paginatedCategories.map((item)=><label>{item.name}
                <input type="checkbox" key={item.id}></input>
            </label>)}
            <Pagination items={categories.length} currentPage={pageNumber} pageSize={pageSize} onPageChange={onPageChange}/>
        </div>
    </div>);
}
/* eslint-disable */
'use client';

import { CustomButton } from "components/CustomButton";
import Pagination from "components/Pagination";
import { useUserContext } from "context/UserContext";
import { useRouter } from "next/navigation";
import { useLayoutEffect, useState } from "react";
import { paginate } from "utils";
import { Categories } from "utils/types";

export default function Dashboard() {
    const router = useRouter();
    const [categories, setCategories] = useState<Categories[]>([]);
    const [pageNumber, setPageNumber] = useState(1);
    const pageSize = 6;
    const { userStatus, user, setUser, setUserStatus } = useUserContext() ?? {};

    const paginatedCategories = paginate(categories, pageNumber, pageSize);

    const onPageChange = (page: number) => {
        setPageNumber(page);
    }

    const checkForCategory = (categoryName: string) => {
        if(user?.category.includes(categoryName)){
            return true
        } else {
            return false
        }
    }

    const handleCheckboxInput = async (event: React.BaseSyntheticEvent) => {
        const clickedCategory = event.target.value;
        if(event.target.checked){
            if(user?.category !== undefined){
                const updatedCategory = [...user.category, clickedCategory];
                const { updatedUser, status } = await fetch(`/api/user/${user?.id}`,{
                    method: 'POST',
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({updatedCategory: updatedCategory}),
                }).then((data)=>data.json());
                if(status === 200){
                    if(setUser !== undefined){
                        setUser(updatedUser);
                    }
                } 
            }
        } else {
            const updatedCategory = user?.category.filter((categoryName)=>categoryName !== clickedCategory);
            const { updatedUser, status } = await fetch(`/api/user/${user?.id}`,{
                method: 'POST',
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({updatedCategory: updatedCategory}),
            }).then((data)=>data.json());
            if(status === 200){
                if(setUser !== undefined){
                    setUser(updatedUser);
                }
            } 
        }
    }  


    const getAllCategories = async () => {
        const { allCategories } = await fetch("/api/categories").then((data) => data.json());
        setCategories(allCategories);
    }

    const handleLogout = () => {
        if(setUser !== undefined && setUserStatus !== undefined){
            setUser({
                email: "",
                name: "",
                password: "",
                category: [],
                id: 0,
                createdAt: new Date(),
                verified: false,
            });
            setUserStatus(false);
        }
        router.push("/");
    }


    useLayoutEffect(() => {
        if (!userStatus && !user?.verified) {
            router.push("/");
        }
        getAllCategories();
    }, []);

    console.log(user);
    return (
        <div className="categoryContainer">
            <h1>Please mark your interests!</h1>
            <p>We will keep you notified</p>
            <div className="categories">
                <p>My saved interests!</p>
                {paginatedCategories.map((item, index) => <label key={index}>
                    {checkForCategory(item.name) ? <input type="checkbox" defaultChecked key={item.id} value={item.name} onChange={handleCheckboxInput}></input> : <input type="checkbox" key={item.id} value={item.name} onChange={handleCheckboxInput}></input>}
                    {item.name}</label>)}
                <Pagination items={categories.length} currentPage={pageNumber} pageSize={pageSize} onPageChange={onPageChange} />
            </div>
            <CustomButton title="LOGOUT" btnType="button" handleClick={handleLogout}/>
        </div>);
}
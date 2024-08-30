import { getCategory } from '@/app/action/category';
import React from 'react'

const Category = async () => {

    const category = await getCategory();

    return (
        <div className="flex space-x-5">
            {
                category?.map((cat) => {
                    return (
                        <div key={cat._id}>
                            <h1>{cat.title}</h1>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Category
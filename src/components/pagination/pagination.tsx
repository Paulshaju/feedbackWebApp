import { Button } from '@mui/material'
import React from 'react'
import '../pagination/pagination.scss'

export const Pagination = (_props: any) => {

    const pageNumbers = []
    for (let i = 1; i <= Math.ceil(_props.totalPosts / _props.postPerPage); i++) {
        pageNumbers.push(i)
    }
    return (
        <div className='paginationContainer'>
            {
                pageNumbers.map(number => {
                    return (
                        <div>
                            <Button>{number}</Button>
                        </div>
                    )

                })
            }
        </div>
    )
}


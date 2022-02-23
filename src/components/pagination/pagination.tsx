import { Button, IconButton } from '@mui/material'
import React from 'react'
import '../pagination/pagination.scss'
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';

export const Pagination = (_props: any) => {

    const pageNumbers = []
    for (let i = 1; i <= Math.ceil(_props.totalPosts / _props.postPerPage); i++) {
        pageNumbers.push(i)
    }
    return (
        <div className='paginationContainer'>
            <IconButton aria-label="next" disabled={_props.currentPage === 1} onClick={() => _props.paginate(_props.currentPage-1)} className='pagintaionButton'>
                <NavigateBeforeIcon fontSize='small' />
            </IconButton>
            {
                pageNumbers.map(number => {
                    return (
                        <div key={number}>
                            <Button className={"pagintaionButton" + (number === _props.currentPage ? ' selectedButton' : '')} onClick={() => _props.paginate(number)}>{number}</Button>
                        </div>
                    )

                })
            }
            <IconButton aria-label="next" disabled={_props.currentPage === Math.ceil(_props.totalPosts / _props.postPerPage)} onClick={() => _props.paginate(_props.currentPage+1)} className='pagintaionButton'>
                <NavigateNextIcon fontSize='small' />
            </IconButton>
        </div>
    )
}



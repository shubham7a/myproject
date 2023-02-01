import React, { useEffect } from 'react'
import data from '../utils/data'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

export default function Products({ searchResult }) {
    useEffect(() => {
        console.log(searchResult)
    }, [searchResult])
    return (
        <div>
            {
                data.map((product) => {
                    if (searchResult === product.item.toLowerCase()) {
                        return (
                            product.subMenu.map((subMenu) => {
                                return (
                                    <div className='w-full grid grid-cols-3 gap-10 p-10 '>
                                        {
                                            subMenu.subCategory.map((subCategory) => {
                                                return (
                                                    <div className='col-span-1'>
                                                        <Card >
                                                            <CardActionArea>
                                                                <CardMedia
                                                                    className='h-40 !object-scale-down'
                                                                    component="img"
                                                                    image={subCategory.image}
                                                                    alt="green iguana"
                                                                />
                                                                <CardContent>
                                                                    <Typography gutterBottom variant="h5" component="div">
                                                                        {subCategory.item}
                                                                    </Typography>
                                                                </CardContent>
                                                            </CardActionArea>
                                                            <CardActions className="flex justify-center">
                                                                <Button className="!bg-blue-400 !text-white" size="small" >
                                                                    Show
                                                                </Button>
                                                            </CardActions>
                                                        </Card>
                                                    </div>
                                                )
                                            })
                                        }
                                    </div>
                                )
                            })
                        )
                    }
                    // else if (searchResult === product.subMenu.item){
                    //     return (
                    //         <div>
                    //             <h1>{product.item}</h1>
                    //             {
                    //                 product.subMenu.map((subMenu) => {
                    //                     return (
                    //                         <div>
                    //                             <h2>{subMenu.item}</h2>
                    //                             {
                    //                                 subMenu.subCategory.map((subCategory) => {
                    //                                     return (
                    //                                         <div>
                    //                                             <h3>{subCategory.item}</h3>
                    //                                         </div>
                    //                                     )
                    //                                 })
                    //                             }
                    //                         </div>
                    //                     )
                    //                 })
                    //             }
                    //         </div>
                    //     )
                    // }
                    else {
                        return (
                            <div>
                                <h1></h1>
                            </div>
                        )
                    }
                })
            }
        </div>
    )
}

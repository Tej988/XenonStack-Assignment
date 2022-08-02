import React from 'react'
import { Avatar, Box, Card, CardContent, CardHeader, CardMedia, IconButton, Typography } from '@mui/material'
// import ModeEditIcon from '@mui/icons-material/ModeEdit';
// import RestoreFromTrashIcon from '@mui/icons-material/RestoreFromTrash';

const Blog = ({ title, description, image, userName, }) => {
    return (
        <div><Card sx={{
            width: "40%", margin: 'auto', mt: '2', padding: 2, boxShadow: "10px 10px 20px #ccc", ":hover:": {
                boxShadow: "20px 20px 30px #ccc"
            }
        }}>
            <Box display={'flex'}>
      
            </Box>
                <CardHeader
                    avatar={
                        <Avatar sx={{ bgcolor: "red" }}>
                            {userName}
                        </Avatar>
                    }
                    title={title}
                // subheader="September 14, 2016"
                />
                <CardMedia
                    component="img"
                    height="auto"
                    // width={'50'}
                    image={image}
                    alt="image"
                />
                <CardContent>
                    <Typography>
                        {description}
                    </Typography>
                </CardContent>

        </Card></div>
    )
}

export default Blog
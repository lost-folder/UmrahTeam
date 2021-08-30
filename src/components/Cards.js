import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Axios from 'axios';
import { Image } from 'cloudinary-react';
const useStyles = makeStyles({
    root: {
        maxWidth: 345,
    },
    media: {
        height: 140,
    },
});


function Cards(props) {
    const [imageSelected, setImageSelected] = useState("");
    const classes = useStyles();

    const UploadImage = () => {
        const formData = new FormData();
        formData.append("file", imageSelected)
        formData.append("upload_preset", "q75nnvbe")

        Axios.post("https://api.cloudinary.com/v1_1/dcogs9hfh/image/upload",
            formData
        ).then((response) => {
            console.log(response);
        });
    }
    return (
        <div>
            <Card className={classes.root}>
                <CardActionArea>
                   
                <Image style={{ width: 300 }}
                            cloudName="dcogs9hfh"
                            publicId={""}
                        />
                    {/* <CardMedia className={classes.media}
 
                         image={props.image}

                        title={props.title} /> */}
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            {props.title}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            {props.description}
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button size="small" color="primary">
                        Share
                    </Button>
                    <Button size="small" color="primary">
                        Learn More
                    </Button>
                </CardActions>

            </Card>
            <div>
                <input type="file"
                    onChange={(event) => {
                        setImageSelected(event.target.files[0])
                    }} />
            </div>
            <button onClick={UploadImage}>
                submit
            </button>
            

        </div>

    )
}



const img = "data:image/png;base64,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"

export default Cards


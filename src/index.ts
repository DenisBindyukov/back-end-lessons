import express, {Request, Response} from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import {videosRoutes} from "./videos-routes";

const app = express();
app.use(cors());
app.use(bodyParser.json());
const port = process.env.PORT || 5009;


app.get('/', (req: Request, res: Response) => {
    res.send('Happy coding!');
});

// app.get('/videos', (req: Request, res: Response) => {
//     const videos = videosRepository.getVideos();
//     res.send(videos);
// });

// app.get('/videos/:videoId', (req: Request, res: Response) => {
//     const id = +req.params.videoId;
//     const video = videosRepository.getVideoById(id);
//
//     if (video) {
//         res.send(video)
//     } else {
//         res.send(404)
//     }
// });

// app.post('/videos', (req: Request, res: Response) => {
//     const result =  videosRepository.createVideo(req.body.title)
//
//     if (result) {
//         res.status(201).send()
//     } else {
//         res.status(400).send('incorrectValue')
//     }
//
// })

// app.delete('/videos/:id', (req: Request, res: Response) => {
//     const id = +req.params.id
//     const result = videosRepository.deleteVideoById(id)
//     if (result) {
//         res.send(204)
//     } else res.send(400)
// })

// app.put('/videos/:id', (req: Request, res: Response) => {
//     const id = +req.params.id
//     const title = req.body.title
//     const result = videosRepository.updateVideoById(id, title)
//     if (result) {
//         res.send(200)
//     } else res.send(401)
// })

app.use('/videos', videosRoutes);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});


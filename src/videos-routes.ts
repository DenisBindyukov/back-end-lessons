import {Request, Response, Router} from "express";
import {videosRepository} from "./repositories/videos-repository";

export const videosRoutes = Router({});

videosRoutes
    .get('/', (req: Request, res: Response) => {
        const videos = videosRepository.getVideos();
        res.send(videos);
    })
    .get('/:videoId', (req: Request, res: Response) => {
        const id = +req.params.videoId;
        const video = videosRepository.getVideoById(id);

        if (video) {
            res.send(video)
        } else {
            res.send(404)
        }
    })
    .post('/', (req: Request, res: Response) => {
        const result = videosRepository.createVideo(req.body.title)

        if (result) {
            res.status(201).send()
        } else {
            res.status(400).send('incorrectValue')
        }

    })
    .delete('/:id', (req: Request, res: Response) => {
        const id = +req.params.id
        const result = videosRepository.deleteVideoById(id)
        if (result) {
            res.send(204)
        } else res.send(400)
    })
    .put('/:id', (req: Request, res: Response) => {
        const id = +req.params.id
        const title = req.body.title
        const result = videosRepository.updateVideoById(id, title)
        if (result) {
            res.send(200)
        } else res.send(401)
    })
import {videos, VideoType} from "./db";

class Error {
    message: string;
    resultCode: number;

    constructor(message: string, resultCode: number) {
        this.message = message;
        this.resultCode = resultCode
    }
}

export const videosRepository = {
    getVideos() {
        return videos
    },
    getVideoById(id: number) {
        return videos.find((el) => el.id === id);
    },
    deleteVideoById(id: number) {
        if (!id) {
            return false
        }
        const oldArrayVideos = videos.map((el) => { return {...el}})
        const index =  videos.findIndex((el) => el.id === id);
        videos.splice(index, 1);

        if (oldArrayVideos.length === videos.length) {
            return false
        }

        return true
    },

    updateVideoById(id: number, title: string) {
        if (!id || !title.trim() || typeof title !== 'string') {
            return false
        }
            const video = videos.find(el => el.id === id);
            const index = videos.findIndex((el) => el.id !== id);
            videos.splice(index, 1);

            if (video) {
                videos.push({...video, title})
            }
            return false
    },
    createVideo(title: string) {
        if ( typeof title !== 'string' || !title.trim()) {
          return false
        }

        const newVideo = {
            id: +(new Date()),
            title,
            author: 'it-incubator.eu'
        }
        videos.push(newVideo)
        return newVideo
    }
}
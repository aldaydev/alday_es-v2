export interface VideoType {
    id: number,
    name: string,
    project: string,
    date: string,
    url: string,
    highlight: boolean
};

export type Videos = VideoType[];
export interface ProjectLinks {
    spotify: string,
    youtube: string,
    apple: string,
    amazon: string,
}

export interface Project {
    id: number,
    name: string,
    type: string,
    year: number,
    links: ProjectLinks,
    cover: string
}

export type Projects = Project[];
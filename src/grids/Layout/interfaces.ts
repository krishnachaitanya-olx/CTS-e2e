export interface LinksInterface {
    title: string,
    icon: string,
    url: string,
    type?: string,
    children?: Array<LinksInterface>
}

export interface AppLayoutInterface {
    location: Object,
    match: {
        path: string,
        url: string,
        isExact: boolean,
        params: Object
    }
}
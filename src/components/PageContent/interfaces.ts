export interface AppLayoutInterface {
    location: Object,
    match: {
        path: string,
        url: string,
        isExact: boolean,
        params: Object
    }
}
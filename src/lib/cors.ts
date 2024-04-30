
export const SetCorsHeaders = (res: Response, methods: string | undefined = "OPTIONS, GET, POST") => {
    res.headers.set("Access-Control-Allow-Origin", "*")
    res.headers.set("Access-Control-Request-Method", "*")
    res.headers.set("Access-Control-Allow-Methods", methods)
    res.headers.set("Access-Control-Allow-Headers", "*")  
}
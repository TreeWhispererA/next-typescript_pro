//Interface for the request and response methods
export interface ResponseFuncs{
    GET ?: Function,
    POST ?: Function,
    PUT ?: Function,
    DELETE ?: Function
}

//Interface for the Todo model on the frontend
export interface Todo{
    _id ?: number,
    item : string,
    completed : boolean
}


import { IReserve } from './reserveRequest.model';

export interface IReserveResponse {
    status: number,
    response: IReserve
}

/*
response
{
    "status": 1,
    "response": {
        "_id": "5f9822a8d1a7c70017dcdb3b",
        "booking_date_start": "2020-10-23T00:00:00.000Z",
        "booking_date_end": "2020-10-25T00:00:00.000Z",
        "experience_id": "5f63f4dddc60966cb9db85a7",
        "comments": "Comentarios...",
        "user_id": "5f91ecf9a22d2facb666d7be",
        "__v": 0
    }
}
*/

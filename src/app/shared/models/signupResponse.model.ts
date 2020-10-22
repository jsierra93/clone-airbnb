import { IuserModel } from './user.model';

export interface SignupResponseModel{
    status : number,
    response: IuserModel
}
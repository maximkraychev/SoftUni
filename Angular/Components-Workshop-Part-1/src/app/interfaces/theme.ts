import { IUser } from "./user";

export interface ITheme {
     created_at: string;
     posts: string[];
     subscribers: string[];
     themeName: string;
     updatedAt: string;
     userId: IUser;
     __v: number;
     _id: string;

}
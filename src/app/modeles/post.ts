import { IPost } from "../interfaces/post";

export class Post implements IPost {

    public readonly id: number = 0;
    public body: string = '';
    public title: string = '';
    public userId: number = 0;

    constructor(obj: IPost) {
        Object.assign(this, obj)
    }
}

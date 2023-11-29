import {IAlbum} from "../interfaces/album";

export class Album implements IAlbum {
  public readonly id: number = 0;
  public title: string = '';
  public userId: number = 0;

  constructor( obj: IAlbum) {
    this.id = obj.id;
    this.title = obj.title;
    this.userId = obj.userId;
  }
}

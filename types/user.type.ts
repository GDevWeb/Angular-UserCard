export interface GenreI {
  id: number;
  name: string;
}

export type Genre = 'male' | 'female' | 'other';

export enum Subscription {
  free,
  member,
  gold,
}

export interface Job {
  id: number;
  name: string;
}

export interface User {
  id: number;
  genre: Genre;
  fname: string;
  lname: string;
  age: number;
  imgURL: string;
  job: string;
  skills: string[];
  hobbies: string[];
  account: {
    status: boolean;
    subscription: Subscription;
  };
  tasks: {
    id: number;
    title: string;
    time: string;
    summary: string;
    status: boolean;
  }[];
}

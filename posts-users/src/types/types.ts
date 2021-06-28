export type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

export type User = {
  id: number;
  name: string;
  username: string;
  email: string;
  address: Address;
  phone: string;
  website: string;
  company: Company;
};

export type Address = {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: Coordinates;
};

export type Coordinates = {
  lat: string;
  lng: string;
};

export type Company = {
  name: string;
  catchPhrase: string;
  bs: string;
};

export type PostsResponse = {
  status: "idle" | "pending" | "success" | "error";
  data: Post[];
  error: string | null;
};

export type UsersResponse = {
  status: "idle" | "pending" | "success" | "error";
  data: User[];
  error: string | null;
};
export interface Ieventos{
    _id: string;
    title: string;
    description: string;
    location: string;
    startDate: Date;
    endDate: Date;
    createdAt: Date;
    isPrivate: boolean;
    price?: number;
    image?: string;
    tags: string[];
    organizerId: IUser;
    status: string,
    guestIds: IUser[],
    expenses: IExpense[]
}

export interface IUser {
    _id: string;
    name: string;
    age: number;
    email: string;
    password: string;
    image: string;
    signUpDate: Date;
    location: string;
    interestIds?: string[];
    events?: string[];
    expenses?: string[];
  }

  export interface IExpense {
    _id: string;
    description: string;
    amount: number;
    eventId: string;
    userId: string;
  }
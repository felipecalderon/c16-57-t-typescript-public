export interface Ieventos{
    _id: String;
    title: String;
    description: String;
    location: String;
    startDate: String;
    endDate: String;
    createdAt: String;
    isPrivate: boolean;
    price?: number;
    image?: String;
    tags?: String[];
    organizerId: String;
    status: string,
    guestIds: [],
    expenses: []
}
export interface Ieventos{
    _id: string;
    title: string;
    description: string;
    location: string;
    startDate: string;
    endDate: string;
    createdAt: string;
    isPrivate: boolean;
    price?: number;
    image?: string;
    tags?: string[];
    organizerId: string;
    status: string,
    guestIds: [],
    expenses: []
}
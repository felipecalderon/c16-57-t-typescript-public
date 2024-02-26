
export interface GetEventsQuery {
    page?: string;
    limit?: string;
    location?: string;
    tags?: string;
    is_guest?:string;
    is_admin?:string;
}
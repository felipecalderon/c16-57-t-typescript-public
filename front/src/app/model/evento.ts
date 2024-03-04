export class evento {
    id: String;
    title: String;
    description: String;
    location: String;
    startdate: String;
    enddate: String;
    price?: number;
    image?: String;
    tags?: String[];
    organizerid: String;
    constructor(id: String, title: String, description: String, location: String, startdate: String, enddate: String, organizerid: String,image?: String, tags?: string[], price?: number) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.location = location;
        this.startdate = startdate;
        this.enddate = enddate;
        this.price = price;
        this.image = image;
        this.organizerid = organizerid;
    }
}
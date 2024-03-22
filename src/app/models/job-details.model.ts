export class JobDetails {
    id: number;
    companyName: string;
    title: string;
    companyLogo: string;
    reference: string;
    location: string;
    industries: string[];
    types: string;
    description: string;
    publishDate: Date

    constructor(
        id: number,
        companyName: string,
        title: string,
        companyLogo: string,
        reference: string,
        location: string,
        industries: string[],
        types: string,
        description: string,
        publishDate: string
    ) {
        this.id = id;
        this.companyName = companyName;
        this.title = title;
        this.companyLogo = companyLogo;
        this.reference = reference;
        this.location = location;
        this.industries = industries;
        this.types = types;
        this.description = description;
        this.publishDate = new Date(publishDate);
    }
}
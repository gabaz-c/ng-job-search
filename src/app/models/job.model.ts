export class Job {
    id: number;
    companyName: string;
    title: string;
    companyLogo: string;
    reference: string;

    constructor(id: number, companyName: string, title: string, companyLogo: string, reference: string) {
        this.id = id;
        this.companyName = companyName;
        this.title = title;
        this.companyLogo = companyLogo;
        this.reference = reference;
    }
}
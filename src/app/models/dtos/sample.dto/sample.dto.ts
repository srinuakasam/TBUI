export class SampleDto {
    constructor(
        public id: number,
        public name: string,
        public username: string,
        public address: {
            street: string;
            suite: string;
            city: string;
            zipcode: string;
            geo: {
                lat: string;
                lng: string;
            };
        },
        public phone: string,
        public website: string,
        public company: {
            name: string;
            catchPhrase: string;
            bs: string;
        }
    ) {}    

    public getDetails(): string {
        return `Name: ${this.name}, Address: ${this.address.street}, ${this.address.city}, ${this.address.zipcode}, Phone: ${this.phone}, Website: ${this.website}`;
    }
    public getAddress(): string {
        return `Street: ${this.address.street}, Suite: ${this.address.suite}, City: ${this.address.city}, Zipcode: ${this.address.zipcode}`;
    }
    public getCompanyInfo(): string {

        return `Company: ${this.company.name}, Catchphrase: ${this.company.catchPhrase}`;
    }
    public getUserInfo(): string {
        return `ID: ${this.id}, Name: ${this.name}, Username: ${this.username}`;
    }
    public getContactInfo(): string {
        return `Phone: ${this.phone}, Website: ${this.website}`;
    }
}

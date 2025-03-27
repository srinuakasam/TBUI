export class TrackRecordDto {
    constructor(
        public id:number,
        public firstName: string,
        public lastName: string,
        public dateOfBirth: Date,
        public age: number,
        public gender: string,
        public medicalRecordNumber: string,
    ) { }

    public getFullName(): string {
        return `${this.firstName} ${this.lastName}`;
    }

    public getCalculatedAge(): number {
        const today = new Date();
        const birthDate = new Date(this.dateOfBirth);
        let age = today.getFullYear() - birthDate.getFullYear();
        const monthDifference = today.getMonth() - birthDate.getMonth();
        if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDate.getDate())) {
            age--;
        }
        return age;
    }
}

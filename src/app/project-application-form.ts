export class ProjectApplicationForm {

    constructor(
        public projectName: string,
        public dateProposed: Date,
        public proposerName: string,
        public department: string,
        public dateStart: Date,
        public dateEnd: Date,

        public projectDescription: string,
        public capabilityPlanning: string,
        public schedule: string,
        public contactPerson: string,
        public miscellaneous: string,
    ) { }
}
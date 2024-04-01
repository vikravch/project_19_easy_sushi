export default class Activity{
    constructor(
        public readonly activityName: string = ""
    ) {}

    toObj(){
        return {
            activityName: this.activityName
        }
    }
}
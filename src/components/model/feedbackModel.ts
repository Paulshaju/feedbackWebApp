export interface feedbackModel{
    itAccount:string,
    surName:string,
    firstName:string,
    score:string,
    comments:string,
    cogPositive:number,
    cogNeutral:number,
    cogNegative:number,
    created:Date,
    response:string
}
export interface chartDataModel{
    name:string,
    positive:number,
    negative:number,
    neutral:number
}
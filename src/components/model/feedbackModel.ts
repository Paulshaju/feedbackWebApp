export interface feedbackModel{
    id:number
    itAccount:string,
    surName:string,
    firstName:string,
    score:string,
    comments:string,
    cogPositive:number,
    cogNeutral:number,
    cogNegative:number,
    created:Date,
    response:string,
    keyPhrases:string[]
}
export interface chartDataModel{
    name:string,
    positive:number,
    negative:number,
    neutral:number
}
export interface funnelDataModel{
    "id":string,
    "value":number,
    "label":string
}
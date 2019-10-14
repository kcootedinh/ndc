export interface IAgendaDataItem {
    title: string
    speaker: string
    startTime: { hour: number, minutes: number }
    endTime: { hour: number, minutes: number }
    day: string
    location: string
    tags: string[]
    link: string
}

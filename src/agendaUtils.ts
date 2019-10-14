import moment from 'moment';
import { IAgendaItem } from './IAgendaItem';

const mapAgenda = (agenda: IAgendaItem[]) => {
    return agenda.reduce((groups: { [key: string]: IAgendaItem[] }, item) => {
        if (!groups[item.day]) {
            groups[item.day] = [];
        }
        groups[item.day].push(item);
        return groups;
    }, {});
};

const groupTimeSlots = (agenda: IAgendaItem[]) => {
    return agenda.reduce((groups: { [key: string]: IAgendaItem[] }, item) => {
        if (!groups[formatTimeSlot(item)]) {
            groups[formatTimeSlot(item)] = [];
        }
        groups[formatTimeSlot(item)].push(item);
        return groups;
    }, {});
};

const formatTimeSlot = (item: IAgendaItem) =>
    `${moment(item.startTime).format('hh:mm')} - ${moment(item.endTime).format('hh:mm')}`;

export { mapAgenda, groupTimeSlots, formatTimeSlot };

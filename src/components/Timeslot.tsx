import React from "react";
import { IAgendaItem } from "../agendaUtils";
import Talk from "./Talk";

interface ITimeSlotProps {
  talks: IAgendaItem[];
  timeSlot: string;
}

const TimeSlot: React.FC<ITimeSlotProps> = ({ talks, timeSlot }) => (
  <div className="Timeslot">
    <h4>{timeSlot}</h4>
    {talks.map(item => (
      <Talk
        key={`${item.speaker}${item.title}`}
        title={item.title}
        speaker={item.speaker}
      />
    ))}
  </div>
);

export default TimeSlot;

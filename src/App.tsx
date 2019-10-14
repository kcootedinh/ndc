import React from 'react';
import AgendaData from './AgendaData';
import AgendaItem from './AgendaItem';
import './App.css';

const App: React.FC = () => {
    function formatTime({ hour, minutes }: { hour: number, minutes: number }) {
        return `${hour.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;
    }

    function toTitleCase(text: string) {
        return text[0].toUpperCase() + text.slice(1);
    }

    return <div className="App">
        {AgendaData.map((item) =>
            <AgendaItem
                title={item.title}
                speaker={item.speaker}
                startTime={formatTime(item.startTime)}
                endTime={formatTime(item.endTime)}
                day={toTitleCase(item.day)}
            />)}
    </div>;
};

export default App;

// src/components/Calendar.js

import React, { useEffect, useState } from 'react';
import ical from 'ical.js';

export default function Calendar() {
    const [events, setEvents] = useState([]);

    useEffect(() => {
        fetch("https://yourserver.com/path/to/yourfile.ics")
            .then(response => response.text())
            .then(data => {
                const jcalData = ical.parse(data);
                const comp = new ical.Component(jcalData);
                const vevents = comp.getAllSubcomponents('vevent');
                setEvents(vevents.map(event => ({
                    summary: event.getFirstPropertyValue('summary'),
                    dtstart: event.getFirstPropertyValue('dtstart'),
                    dtend: event.getFirstPropertyValue('dtend'),
                })));
            });
    }, []);

    return (
        <div>
            <h1>Upcoming Events</h1>
            <ul>
                {events.map((event, index) => (
                    <li key={index}>
                        <strong>{event.summary}</strong><br />
                        Start: {event.dtstart.toString()}<br />
                        End: {event.dtend.toString()}
                    </li>
                ))}
            </ul>
        </div>
    );
}

import React, { useEffect, useState } from 'react';
import ical from 'ical.js';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import EventComponent from './EventComponent';

const localizer = momentLocalizer(moment);

export default function MonthCalendar() {
    const [events, setEvents] = useState([]);

    useEffect(() => {
        fetch("https://events.terrain.scouts.com.au/calendar-feeds/daeccdb1-3466-33cd-b6c0-a03a34644a90/47af5873-2823-43b1-a1f7-b058aba47a41")
            .then(response => response.text())
            .then(data => {
                const jcalData = ical.parse(data);
                const comp = new ical.Component(jcalData);
                const vevents = comp.getAllSubcomponents('vevent');
                setEvents(vevents.map(event => {
                    const summary = event.getFirstPropertyValue('summary');
                    const description = event.getFirstPropertyValue('description');
                    const start = event.getFirstPropertyValue('dtstart').toJSDate();
                    const end = event.getFirstPropertyValue('dtend').toJSDate();

                    let category = '';
                    if (description.includes('Event owner: Belmont Joeys')) {
                        category = 'joeys';
                    } else if (description.includes('Event owner: Belmont Cubs')) {
                        category = 'cubs';
                    } else if (description.includes('Event owner: Belmont Scouts')) {
                        category = 'scouts';
                    } else if (description.includes('Event owner: Belmont Venturers')) {
                        category = 'venturers';
                    }

                    let color = '';
                    switch (category) {
                        case 'joeys':
                            color = '#b65518'; // Joeys color
                            break;
                        case 'cubs':
                            color = '#ffc82e'; // Cubs color (text will be black)
                            break;
                        case 'scouts':
                            color = '#00ae42'; // Scouts color
                            break;
                        case 'venturers':
                            color = '#9e1b32'; // Venturers color
                            break;
                        default:
                            color = '#00664a'; // Default group color
                    }

                    return {
                        title: `${summary} (${moment(start).format('h:mm A')} - ${moment(end).format('h:mm A')})`,
                        start,
                        end,
                        allDay: false,
                        color,
                        textColor: category === 'cubs' ? 'black' : 'white', // Set black text for Cubs
                        description,
                    };
                }));
            });
    }, []);

    const eventStyleGetter = (event) => {
        const style = {
            backgroundColor: event.color,
            borderRadius: '5px',
            opacity: 0.8,
            color: event.textColor,
            border: '0px',
            display: 'block',
            padding: '5px'
        };
        return {
            style: style
        };
    };

    return (
        <div>
            <Calendar
                localizer={localizer}
                events={events}
                startAccessor="start"
                endAccessor="end"
                style={{ height: 600 }}
                eventPropGetter={eventStyleGetter}
                components={{
                    event: EventComponent,
                }}
            />
        </div>
    );
}

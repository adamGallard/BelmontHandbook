import React from 'react';
import { Tooltip } from 'react-tooltip';

const EventComponent = ({ event }) => (
    <div>
        {event.title}
        <Tooltip anchorSelect={`#${event.title}`} place="top" content={event.description} />
    </div>
);

export default EventComponent;

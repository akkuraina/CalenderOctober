import React, { useState } from 'react';
import './Calendar.css';

const daysInOctober2024 = [
  1, 2, 3, 4, 5, 6, 7,
  8, 9, 10, 11, 12, 13, 14,
  15, 16, 17, 18, 19, 20, 21,
  22, 23, 24, 25, 26, 27, 28,
  29, 30, 31
];

const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

const Calendar = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [eventText, setEventText] = useState('');
  const [events, setEvents] = useState({});
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (day) => {
    setSelectedDate(day);
    setEventText('');
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const saveEvent = () => {
    if (eventText.trim()) {
      setEvents((prevEvents) => ({
        ...prevEvents,
        [selectedDate]: [...(prevEvents[selectedDate] || []), eventText]
      }));
      setIsModalOpen(false);
    }
  };

  return (
    <div className="calendar">
      <h2>October 2024 Calendar</h2>
      <div className="calendar-grid">
        {/* Render days of the week */}
        {daysOfWeek.map((day, index) => (
          <div key={index} className="day-header">
            {day}
          </div>
        ))}

        {/* Empty spaces for Sunday-based layout */}
        {[...Array(2)].map((_, idx) => (
          <div key={`empty-${idx}`} className="date empty"></div>
        ))}

        {/* Render each day in October */}
        {daysInOctober2024.map((day) => (
          <div key={day} className="date" onClick={() => openModal(day)}>
            <span>{day}</span>
            {/* Render events for each day */}
            {events[day] && events[day].map((event, idx) => (
              <div key={idx} className="event">{event}</div>
            ))}
          </div>
        ))}
      </div>

      {/* Modal for adding events */}
      {isModalOpen && (
        <div className="modal" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <span className="close" onClick={closeModal}>&times;</span>
            <h3>Add Event for October {selectedDate}, 2024</h3>
            <input
              type="text"
              value={eventText}
              onChange={(e) => setEventText(e.target.value)}
              placeholder="Event details"
            />
            <button onClick={saveEvent}>Save Event</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Calendar;

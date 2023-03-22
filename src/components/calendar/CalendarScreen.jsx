import React, { useState } from 'react';
import Navbar from '../ui/Navbar';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import { messages } from '../../helpers/calendar-messages-es';
import 'moment/locale/es';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import CalendarEvent from './CalendarEvent';
import CalendarModal from './CalendarModal';
import { useDispatch, useSelector } from 'react-redux';
import { closeFormModal, openFormModal } from '../../store/actions/uiActions';
import AddNewFab from '../ui/AddNewFab';
import DeleteEventFab from '../ui/DeleteEventFab';
import { addActiveEvent, clearActiveEvent } from '../../store/actions/eventsActions';

moment.locale('es');

const localizer = momentLocalizer(moment);

const CalendarScreen = () => {
  const [lastView, setLastView] = useState(localStorage.getItem('lastView') || 'month');
  const dispatch = useDispatch();
  const { events } = useSelector((state) => state.events);
  const { activeEvent } = useSelector((state) => state.events);

  const onDoubleClick = (e) => {
    console.log(e);
    dispatch(addActiveEvent(e));
    dispatch(openFormModal());
  };

  const onSelectEvent = (e) => {
    console.log(e);
    dispatch(closeFormModal());
    dispatch(addActiveEvent(e));
  };

  const onViewChange = (e) => {
    setLastView(e);
    localStorage.setItem('lastView', e);
  };

  const onSelectSlot = () => {
    dispatch(clearActiveEvent());
  };

  const eventsStyleGetter = (event, start, end, isSelected) => {
    const style = {
      backgroundColor: '#367CF7',
      borderRadius: '0px',
      opacity: 0.8,
      display: 'block',
      color: 'white',
    };

    return { style };
  };

  return (
    <div className='calendar-screen'>
      <Navbar />
      <Calendar
        eventPropGetter={eventsStyleGetter}
        messages={messages}
        localizer={localizer}
        events={events}
        startAccesor='start'
        endAccesor='end'
        onDoubleClickEvent={onDoubleClick}
        onSelectEvent={onSelectEvent}
        onView={onViewChange}
        view={lastView}
        onSelectSlot={onSelectSlot}
        selectable={true}
        components={{
          event: CalendarEvent,
        }}
      />
      {activeEvent && <DeleteEventFab />}
      <AddNewFab />
      <CalendarModal />
    </div>
  );
};

export default CalendarScreen;

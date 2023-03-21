import moment from 'moment/moment';
import React, { useState } from 'react';
import DateTimePicker from 'react-datetime-picker';
import Modal from 'react-modal';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

Modal.setAppElement('#root');

const now = moment().minutes(0).seconds(0).add(1, 'hours');
const nowPlusOne = now.clone().add(1, 'hours');

const CalendarModal = () => {
  const [dateStart, setDateStart] = useState(now.toDate());
  const [dateEnd, setDateEnd] = useState(nowPlusOne.toDate());

  const handleStartDateChange = (e) => {
    setDateStart(e);
  };

  const handleEndDateChange = (e) => {
    setDateEnd(e);
  };

  return (
    <Modal isOpen={true} style={customStyles} closeTimeoutMS={200} className={'modal'} overlayClassName={'modal-fondo'}>
      <h1> Nuevo evento </h1>
      <hr />
      <form className='container'>
        <div className='form-group mb-2'>
          <label>Fecha y hora inicio</label>
          <DateTimePicker className={'form-control'} onChange={handleStartDateChange} value={dateStart} />
        </div>

        <div className='form-group mb-2'>
          <label>Fecha y hora fin</label>
          <DateTimePicker
            className={'form-control'}
            onChange={handleEndDateChange}
            value={dateEnd}
            minDate={dateStart}
          />
        </div>

        <hr />
        <div className='form-group mb-2'>
          <label>Titulo y notas</label>
          <input type='text' className='form-control' placeholder='Título del evento' name='title' autoComplete='off' />
          <small id='emailHelp' className='form-text text-muted'>
            Una descripción corta
          </small>
        </div>

        <div className='form-group mb-2'>
          <textarea type='text' className='form-control' placeholder='Notas' rows='5' name='notes'></textarea>
          <small id='emailHelp' className='form-text text-muted'>
            Información adicional
          </small>
        </div>

        <button type='submit' className='btn btn-outline-primary btn-block'>
          <i className='far fa-save'></i>
          <span> Guardar</span>
        </button>
      </form>
    </Modal>
  );
};

export default CalendarModal;
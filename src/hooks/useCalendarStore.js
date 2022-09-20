import { useDispatch, useSelector } from "react-redux";
import { onAddNewEvent, onDeleteEvent, onSetActiveEvent, onUpdateEvent } from "../redux/calendar/calendarSlice";


export const useCalendarStore = () => {

    const dispatch = useDispatch();
    const {events, activeEvent} = useSelector( state => state.calendar );

    const setActiveEvent = ( calendarEvent ) =>{
        dispatch(onSetActiveEvent( calendarEvent ))
    }

    const startSavingEvent = async( calendarEvent ) => {

      if( calendarEvent._id ){
        //Actualizando nota
        dispatch(onUpdateEvent( {...calendarEvent} ))
      }else{
        //Creando nota
        dispatch(onAddNewEvent( {...calendarEvent, _id: new Date().getTime() } ));
      }
    }

    const startDeletingEvent = () =>{
      dispatch( onDeleteEvent() );
    }

  return {
    //* Propiedade
    activeEvent,
    events,
    hasEventSelected: !!activeEvent,


    //* Metodos
    setActiveEvent,
    startSavingEvent,
    startDeletingEvent,

  }
    
}

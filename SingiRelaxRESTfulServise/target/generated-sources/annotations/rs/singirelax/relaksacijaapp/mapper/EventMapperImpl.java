package rs.singirelax.relaksacijaapp.mapper;

import java.util.ArrayList;
import java.util.List;
import javax.annotation.Generated;
import rs.singirelax.relaksacijaapp.dto.EventDTO;
import rs.singirelax.relaksacijaapp.model.Event;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2019-07-03T22:56:15+0200",
    comments = "version: 1.2.0.Final, compiler: javac, environment: Java 1.8.0_162 (Oracle Corporation)"
)
public class EventMapperImpl implements EventMapper {

    @Override
    public EventDTO toEventDTO(Event event) {
        if ( event == null ) {
            return null;
        }

        EventDTO eventDTO = new EventDTO();

        eventDTO.setId( event.getId() );
        eventDTO.setName( event.getName() );
        eventDTO.setLocation( event.getLocation() );
        eventDTO.setEventType( event.getEventType() );
        eventDTO.setDescription( event.getDescription() );
        eventDTO.setDateFrom( event.getDateFrom() );
        eventDTO.setDateTo( event.getDateTo() );
        eventDTO.setRating( event.getRating() );
        eventDTO.setAttendance( event.getAttendance() );

        return eventDTO;
    }

    @Override
    public Event toEvent(EventDTO eventDTO) {
        if ( eventDTO == null ) {
            return null;
        }

        Event event = new Event();

        event.setName( eventDTO.getName() );
        event.setId( eventDTO.getId() );
        event.setLocation( eventDTO.getLocation() );
        event.setEventType( eventDTO.getEventType() );
        event.setDescription( eventDTO.getDescription() );
        event.setDateFrom( eventDTO.getDateFrom() );
        event.setDateTo( eventDTO.getDateTo() );
        event.setRating( eventDTO.getRating() );
        event.setAttendance( eventDTO.getAttendance() );

        return event;
    }

    @Override
    public List<EventDTO> toListDTO(List<Event> eventList) {
        if ( eventList == null ) {
            return null;
        }

        List<EventDTO> list = new ArrayList<EventDTO>( eventList.size() );
        for ( Event event : eventList ) {
            list.add( toEventDTO( event ) );
        }

        return list;
    }

    @Override
    public List<Event> toList(List<EventDTO> eventDTOList) {
        if ( eventDTOList == null ) {
            return null;
        }

        List<Event> list = new ArrayList<Event>( eventDTOList.size() );
        for ( EventDTO eventDTO : eventDTOList ) {
            list.add( toEvent( eventDTO ) );
        }

        return list;
    }
}

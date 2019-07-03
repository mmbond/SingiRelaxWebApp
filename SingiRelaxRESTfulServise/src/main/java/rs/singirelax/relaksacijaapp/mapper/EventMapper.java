package rs.singirelax.relaksacijaapp.mapper;

import org.mapstruct.Mapper;
import org.mapstruct.factory.Mappers;
import rs.singirelax.relaksacijaapp.dto.EventDTO;
import rs.singirelax.relaksacijaapp.model.Event;

import java.util.List;

@Mapper
public interface EventMapper {

    EventMapper INSTANCE = Mappers.getMapper(EventMapper.class);

    EventDTO toEventDTO(Event event);

    Event toEvent(EventDTO eventDTO);

    List<EventDTO> toListDTO(List<Event> eventList);

    List<Event> toList(List<EventDTO> eventDTOList);
}

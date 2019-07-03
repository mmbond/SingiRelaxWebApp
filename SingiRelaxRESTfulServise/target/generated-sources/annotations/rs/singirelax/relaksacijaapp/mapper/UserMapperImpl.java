package rs.singirelax.relaksacijaapp.mapper;

import java.util.ArrayList;
import java.util.List;
import javax.annotation.Generated;
import rs.singirelax.relaksacijaapp.dto.EventDTO;
import rs.singirelax.relaksacijaapp.dto.UserDTO;
import rs.singirelax.relaksacijaapp.model.Event;
import rs.singirelax.relaksacijaapp.model.User;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2019-07-03T22:56:15+0200",
    comments = "version: 1.2.0.Final, compiler: javac, environment: Java 1.8.0_162 (Oracle Corporation)"
)
public class UserMapperImpl implements UserMapper {

    @Override
    public UserDTO toUserDTO(User user) {
        if ( user == null ) {
            return null;
        }

        UserDTO userDTO = new UserDTO();

        userDTO.setId( user.getId() );
        userDTO.setFirstName( user.getFirstName() );
        userDTO.setLastName( user.getLastName() );
        userDTO.setEmail( user.getEmail() );
        userDTO.setPassword( user.getPassword() );
        userDTO.setPhone( user.getPhone() );
        userDTO.setAddress( user.getAddress() );
        userDTO.setRegistrationDate( user.getRegistrationDate() );
        userDTO.setUserType( user.getUserType() );
        userDTO.setInterests( user.getInterests() );
        userDTO.setEvents( eventListToEventDTOList( user.getEvents() ) );

        return userDTO;
    }

    @Override
    public User toUser(UserDTO userDTO) {
        if ( userDTO == null ) {
            return null;
        }

        User user = new User();

        user.setId( userDTO.getId() );
        user.setFirstName( userDTO.getFirstName() );
        user.setLastName( userDTO.getLastName() );
        user.setEmail( userDTO.getEmail() );
        user.setPassword( userDTO.getPassword() );
        user.setEvents( eventDTOListToEventList( userDTO.getEvents() ) );
        user.setPhone( userDTO.getPhone() );
        user.setAddress( userDTO.getAddress() );
        user.setRegistrationDate( userDTO.getRegistrationDate() );
        user.setUserType( userDTO.getUserType() );
        user.setInterests( userDTO.getInterests() );

        return user;
    }

    @Override
    public List<UserDTO> toListDTO(List<User> userList) {
        if ( userList == null ) {
            return null;
        }

        List<UserDTO> list = new ArrayList<UserDTO>( userList.size() );
        for ( User user : userList ) {
            list.add( toUserDTO( user ) );
        }

        return list;
    }

    @Override
    public List<User> toList(List<UserDTO> userDTOList) {
        if ( userDTOList == null ) {
            return null;
        }

        List<User> list = new ArrayList<User>( userDTOList.size() );
        for ( UserDTO userDTO : userDTOList ) {
            list.add( toUser( userDTO ) );
        }

        return list;
    }

    protected EventDTO eventToEventDTO(Event event) {
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

    protected List<EventDTO> eventListToEventDTOList(List<Event> list) {
        if ( list == null ) {
            return null;
        }

        List<EventDTO> list1 = new ArrayList<EventDTO>( list.size() );
        for ( Event event : list ) {
            list1.add( eventToEventDTO( event ) );
        }

        return list1;
    }

    protected Event eventDTOToEvent(EventDTO eventDTO) {
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

    protected List<Event> eventDTOListToEventList(List<EventDTO> list) {
        if ( list == null ) {
            return null;
        }

        List<Event> list1 = new ArrayList<Event>( list.size() );
        for ( EventDTO eventDTO : list ) {
            list1.add( eventDTOToEvent( eventDTO ) );
        }

        return list1;
    }
}

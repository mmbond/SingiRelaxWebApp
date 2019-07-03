package rs.singirelax.relaksacijaapp.service.implementation;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import rs.singirelax.relaksacijaapp.dao.DAOException;
import rs.singirelax.relaksacijaapp.dao.EventDAO;
import rs.singirelax.relaksacijaapp.dto.EventDTO;
import rs.singirelax.relaksacijaapp.mapper.EventMapper;
import rs.singirelax.relaksacijaapp.model.Event;
import rs.singirelax.relaksacijaapp.service.EventService;
import rs.singirelax.relaksacijaapp.service.ServiceException;

import javax.transaction.Transactional;
import java.util.List;

@Service
@Transactional
public class EventServiceImpl implements EventService {

    private EventDAO eventDAO;

    @Autowired
    public EventServiceImpl(EventDAO eventDAO) {
        this.eventDAO = eventDAO;
    }

    @Override
    public EventDTO save(EventDTO entityDTO) throws ServiceException {
        Event event = EventMapper.INSTANCE.toEvent(entityDTO);

        try {
            event = eventDAO.save(event);
        }
        catch (DAOException e) {
            throw new ServiceException("Neuspesno cuvanje dogadjaja");
        }
        return EventMapper.INSTANCE.toEventDTO(event);
    }

    @Override
    public EventDTO update(EventDTO entityDTO) throws ServiceException {
        Event event = eventDAO.findOne(entityDTO.getId());
        if (event == null) {
            throw new RuntimeException("Dogadjaj nije pronadjen");
        }
        try {
            event = EventMapper.INSTANCE.toEvent(entityDTO);
            event = eventDAO.merge(event);
        } catch (DAOException e) {
            throw new ServiceException("Neuspesno azuriranje dogadjaja");
        }
        return EventMapper.INSTANCE.toEventDTO(event);
    }

    @Override
    public void delete(Integer id) throws ServiceException {
        Event event = eventDAO.findOne(id);
        try {
            eventDAO.delete(event);
        } catch (DAOException e) {
            throw new ServiceException("Neuspesno brisanje dogadjaja");
        }
    }

    @Override
    public EventDTO findOne(Integer id) {
        Event event = eventDAO.findOne(id);
        if (event != null) {
            return EventMapper.INSTANCE.toEventDTO(event);
        }
        else{
            throw new RuntimeException("Dogadjaj nije pronadjen");
        }
    }

    @Override
    public List<EventDTO> findAll() {
        List<Event> events = eventDAO.findAll();
        return EventMapper.INSTANCE.toListDTO(events);
    }
}


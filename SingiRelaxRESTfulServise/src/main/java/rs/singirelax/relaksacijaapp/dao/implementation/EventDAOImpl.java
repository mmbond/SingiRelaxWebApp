package rs.singirelax.relaksacijaapp.dao.implementation;

import org.springframework.stereotype.Repository;
import rs.singirelax.relaksacijaapp.dao.EventDAO;
import rs.singirelax.relaksacijaapp.model.Event;

@Repository
public class EventDAOImpl extends AbstractDAO<Event, Integer> implements EventDAO {
    public EventDAOImpl() {
        super();
    }
}

package rs.singirelax.relaksacijaapp.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import rs.singirelax.relaksacijaapp.dto.EventDTO;
import rs.singirelax.relaksacijaapp.service.EventService;
import rs.singirelax.relaksacijaapp.service.ServiceException;

import javax.validation.Valid;
import java.util.List;

@RestController
@RequestMapping("/events")
public class EventController {

    private final EventService eventService;

    @Autowired
    public EventController(EventService eventService) {
        this.eventService = eventService;
    }

    @PostMapping(value = "/save")
    public EventDTO saveUser(@RequestBody @Valid EventDTO eventDTO) throws ServiceException {
        return eventService.save(eventDTO);
    }

    @GetMapping(value = "/id/{id}")
    public EventDTO getById(@PathVariable("id") Integer id) {
        return eventService.findOne(id);
    }

    @PutMapping(value = "/update")
    public EventDTO updateUser(@RequestBody @Valid EventDTO eventDTO) throws ServiceException {
        return  eventService.update(eventDTO);
    }

    @DeleteMapping(value ="/delete/{id}")
    public HttpStatus deleteUser(@PathVariable("id") Integer id) throws ServiceException{
        eventService.delete(id);
        return HttpStatus.OK;
    }

    @GetMapping(value = "/all")
    @ResponseBody
    public List<EventDTO> getAllUsers() {
        return eventService.findAll();
    }

}

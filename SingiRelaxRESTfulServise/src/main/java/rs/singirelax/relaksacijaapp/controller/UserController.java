package rs.singirelax.relaksacijaapp.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import rs.singirelax.relaksacijaapp.dto.LoginDTO;
import rs.singirelax.relaksacijaapp.dto.UserDTO;
import rs.singirelax.relaksacijaapp.service.ServiceException;
import rs.singirelax.relaksacijaapp.service.UserService;

import javax.validation.Valid;
import java.util.List;

@RestController
@RequestMapping("/users")
public class UserController {

    private final UserService userService;

    @Autowired
    public UserController(UserService userService) {
        this.userService = userService;
    }

    @PostMapping(value = "/save")
    public UserDTO saveUser(@RequestBody @Valid UserDTO userDTO) throws ServiceException {
        return userService.save(userDTO);
    }

    @GetMapping(value = "/id/{id}")
    public UserDTO getById(@PathVariable("id") Integer id) {
        return userService.findOne(id);
    }

    @PutMapping(value = "/update")
    public UserDTO updateUser(@RequestBody @Valid UserDTO userDTO) throws ServiceException {
        return  userService.update(userDTO);
    }

    @DeleteMapping(value ="/delete/{id}")
    public HttpStatus deleteUser(@PathVariable("id") Integer id) throws ServiceException{
        userService.delete(id);
        return HttpStatus.OK;
    }

    @GetMapping(value = "/all")
    @ResponseBody
    public List<UserDTO> getAllUsers() {
        return userService.findAll();
    }

    @PostMapping(value = "/authenticate")
    public UserDTO authenticate(@RequestBody @Valid LoginDTO loginDTO) {
        try {
            return userService.authenticate(loginDTO);
        }catch (ServiceException e) {
            return null;
        }
    }
}




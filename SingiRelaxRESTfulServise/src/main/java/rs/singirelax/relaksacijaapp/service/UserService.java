package rs.singirelax.relaksacijaapp.service;

import rs.singirelax.relaksacijaapp.dto.LoginDTO;
import rs.singirelax.relaksacijaapp.dto.UserDTO;

public interface UserService extends BaseService<UserDTO, Integer> {

    UserDTO authenticate(LoginDTO entityDTO) throws ServiceException;
}

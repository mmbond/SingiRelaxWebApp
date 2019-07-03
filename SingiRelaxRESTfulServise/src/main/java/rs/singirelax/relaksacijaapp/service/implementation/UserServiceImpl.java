package rs.singirelax.relaksacijaapp.service.implementation;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import rs.singirelax.relaksacijaapp.dao.DAOException;
import rs.singirelax.relaksacijaapp.dao.UserDAO;
import rs.singirelax.relaksacijaapp.dto.LoginDTO;
import rs.singirelax.relaksacijaapp.dto.UserDTO;
import rs.singirelax.relaksacijaapp.mapper.UserMapper;
import rs.singirelax.relaksacijaapp.model.User;
import rs.singirelax.relaksacijaapp.service.ServiceException;
import rs.singirelax.relaksacijaapp.service.UserService;

import javax.transaction.Transactional;
import java.util.List;

@Service
@Transactional
public class UserServiceImpl implements UserService {

    private UserDAO userDAO;

    @Autowired
    public UserServiceImpl(UserDAO userDAO) {
        this.userDAO = userDAO;
    }

    @Override
    public UserDTO save(UserDTO entityDTO) throws ServiceException {
        User user = UserMapper.INSTANCE.toUser(entityDTO);

        try {
            user = userDAO.save(user);
        }
        catch (DAOException e) {
            throw new ServiceException("Neuspesno cuvanje korisnika");
        }
        return UserMapper.INSTANCE.toUserDTO(user);
    }

    @Override
    public UserDTO update(UserDTO entityDTO) throws ServiceException {
        User user = userDAO.findOne(entityDTO.getId());
        if (user == null) {
            throw new RuntimeException("Korisnik nije pronadjen");
        }
        try {
            user = UserMapper.INSTANCE.toUser(entityDTO);
            user = userDAO.merge(user);
        } catch (DAOException e) {
            throw new ServiceException("Neuspesno azuriranje korisnika");
        }
        return UserMapper.INSTANCE.toUserDTO(user);
    }

    @Override
    public void delete(Integer id) throws ServiceException {
        User user = userDAO.findOne(id);
        try {
            userDAO.delete(user);
        } catch (DAOException e) {
            throw new ServiceException("Neuspesno brisanje korisnika");
        }
    }

    @Override
    public UserDTO findOne(Integer id) {
        User user = userDAO.findOne(id);
        if (user != null) {
            return UserMapper.INSTANCE.toUserDTO(user);
        }
        else{
            throw new RuntimeException("Korisnik nije pronadjen");
        }
    }

    @Override
    public List<UserDTO> findAll() {
        List<User> users = userDAO.findAll();
        return UserMapper.INSTANCE.toListDTO(users);
    }

    @Override
    public UserDTO authenticate(LoginDTO entityDTO) throws ServiceException {
        User user;
        try {
          user = userDAO.authenticate(entityDTO.getEmail(), entityDTO.getPassword());
        } catch (DAOException e) {
            throw new ServiceException("Neuspesna autentikacija");
        }
        return UserMapper.INSTANCE.toUserDTO(user);
    }
}


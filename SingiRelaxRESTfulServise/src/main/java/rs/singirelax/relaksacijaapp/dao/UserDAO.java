package rs.singirelax.relaksacijaapp.dao;

import rs.singirelax.relaksacijaapp.model.User;

public interface UserDAO  extends BaseDAO<User, Integer> {

    User authenticate(String username, String password) throws DAOException;
}

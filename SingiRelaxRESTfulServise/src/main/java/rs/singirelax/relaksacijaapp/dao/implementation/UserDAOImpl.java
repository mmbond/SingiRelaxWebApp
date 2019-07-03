package rs.singirelax.relaksacijaapp.dao.implementation;

import org.springframework.stereotype.Repository;
import rs.singirelax.relaksacijaapp.dao.DAOException;
import rs.singirelax.relaksacijaapp.dao.UserDAO;
import rs.singirelax.relaksacijaapp.model.User;

import javax.persistence.Query;

@Repository
public class UserDAOImpl extends AbstractDAO<User, Integer> implements UserDAO {

    public UserDAOImpl() {
        super();
    }

    @Override
    public User authenticate(String email, String password) throws DAOException {
        String select = "SELECT user FROM User user WHERE user.email=:email and user.password=:password";

        Query query = entityManager.createQuery(select);
        query.setParameter("email", email);
        query.setParameter("password", password);

        try {
            return (User) query.getSingleResult();
        } catch (Exception e) {
            throw new DAOException("Neuspesna autentikacija");
        }
    }
}
package rs.singirelax.relaksacijaapp.dao;


import java.io.Serializable;
import java.util.Collection;
import java.util.List;

public interface BaseDAO <T, PK extends Serializable> {

    T findOne(PK id);

    List<T> findAll();

    T save(T entity) throws DAOException;

    T merge(T entity) throws DAOException;

    void delete(T entity) throws DAOException;

    void deleteById(PK id) throws DAOException;

    void deleteAll(Collection<T> collection) throws DAOException;

    void deleteAll() throws DAOException;

    void flush() throws DAOException;
}
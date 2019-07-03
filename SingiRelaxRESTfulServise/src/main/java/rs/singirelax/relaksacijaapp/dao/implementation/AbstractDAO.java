package rs.singirelax.relaksacijaapp.dao.implementation;

import rs.singirelax.relaksacijaapp.dao.BaseDAO;
import rs.singirelax.relaksacijaapp.dao.DAOException;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import java.io.Serializable;
import java.lang.reflect.ParameterizedType;
import java.util.Collection;
import java.util.List;

public abstract class AbstractDAO<T, PK extends Serializable> implements BaseDAO<T, PK> {

    @PersistenceContext
    EntityManager entityManager;

    public AbstractDAO() {
        this.classT = (Class<T>) ((ParameterizedType) this.getClass().getGenericSuperclass())
                .getActualTypeArguments()[0];
    }

    protected Class<T> classT;

    @Override
    public T findOne(PK id) {
        return entityManager.find(classT, id);
    }


    @Override
    public List<T> findAll() {
        return entityManager.createQuery("FROM " + classT.getName()).getResultList();
    }

    @Override
    public T save(T entity) throws DAOException {
        T persistEntity;

        entityManager.persist(entity);
        persistEntity = entity;

        return persistEntity;
    }

    @Override
    public T merge(T entity) throws DAOException {
        return entityManager.merge(entity);
    }

    @Override
    public void delete(T entity) throws DAOException {
        entityManager.remove(entity);

    }

    @Override
    public void deleteById(PK id) throws DAOException {
        T entity = findOne(id);
        if (entity!=null)
            entityManager.remove(entity);
    }

    @Override
    public void deleteAll(Collection<T> collection) throws DAOException {
        for (T t: collection)
            delete(t);
    }

    @Override
    public void deleteAll() throws DAOException{
        deleteAll(findAll());
    }

    @Override
    public void flush() throws DAOException {
        entityManager.flush();
    }
}

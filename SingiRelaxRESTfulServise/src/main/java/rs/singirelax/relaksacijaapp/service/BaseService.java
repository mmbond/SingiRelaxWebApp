package rs.singirelax.relaksacijaapp.service;


import java.io.Serializable;
import java.util.List;

public interface BaseService<T, PK extends Serializable> {

    T save(T entityDTO) throws ServiceException;

    T update(T entityDTO) throws ServiceException;

    void delete(PK id) throws ServiceException;

    T findOne(PK id);

    List<T> findAll();

}
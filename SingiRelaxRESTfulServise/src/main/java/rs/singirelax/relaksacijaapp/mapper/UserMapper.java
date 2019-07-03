package rs.singirelax.relaksacijaapp.mapper;


import org.mapstruct.Mapper;
import org.mapstruct.factory.Mappers;
import rs.singirelax.relaksacijaapp.dto.UserDTO;
import rs.singirelax.relaksacijaapp.model.User;

import java.util.List;

@Mapper
public interface UserMapper {

    UserMapper INSTANCE = Mappers.getMapper(UserMapper.class);

    UserDTO toUserDTO(User user);

    User toUser(UserDTO userDTO);

    List<UserDTO> toListDTO(List<User> userList);

    List<User> toList(List<UserDTO> userDTOList);

}







package com.nvm.redux.service.serviceImpl;

import com.nvm.redux.entity.User;
import com.nvm.redux.repository.UserRepository;
import com.nvm.redux.request.UserRequest;
import com.nvm.redux.response.UserResponse;
import com.nvm.redux.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Service
public class UserServiceImpl implements UserService {

    private UserRepository userRepository;

    @Autowired
    public UserServiceImpl(UserRepository userRepository){
        this.userRepository=userRepository;
    }

    @Override
    public String addUser(UserRequest userRequest) {
        User userAdd=new User();
        userAdd.setUserName(userRequest.getUsername());
        userAdd.setEmail(userRequest.getEmail());
        userAdd.setPassword(userRequest.getPassword());
        userAdd.setCreatedAt(new Date());
        userAdd.setUpdatedAt(new Date());
        userRepository.save(userAdd);
        return "Create an User Successfully!";
    }

    @Override
    public List<UserResponse> getAll() {
        List<User> listUser=userRepository.findAll();
        List<UserResponse> listUserResponse=new ArrayList<>();
        for(User user:listUser){
            listUserResponse.add(new UserResponse(user.getId(),user.getUserName(),user.getEmail(),user.getPassword(),user.getCreatedAt(),user.getUpdatedAt()));
        }
        return listUserResponse;
    }

    @Override
    public String updateUser(Long id, UserRequest userRequest) {
        User userToEdit=userRepository.getReferenceById(id);
        userToEdit.setUserName(userRequest.getUsername());
        userToEdit.setPassword(userRequest.getPassword());
        userToEdit.setEmail(userRequest.getEmail());
        userToEdit.setUpdatedAt(new Date());
        userRepository.save(userToEdit);
        return "Update an User Successfully!";
    }

    @Override
    public String deleteUser(Long id) {
        userRepository.deleteById(id);
        return "Delete an User Successfully!";
    }
}

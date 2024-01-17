package com.nvm.redux.service;

import com.nvm.redux.request.UserRequest;
import com.nvm.redux.response.UserResponse;

import java.util.List;

public interface UserService {

    String addUser(UserRequest userRequest);

    List<UserResponse> getAll();

    String updateUser(Long id,UserRequest userRequest);

    String deleteUser(Long id);
}

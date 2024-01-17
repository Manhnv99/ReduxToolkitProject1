package com.nvm.redux.response;


import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

@AllArgsConstructor
@NoArgsConstructor
@Data
public class UserResponse {

    private Long id;

    private String userName;

    private String email;

    private String password;

    private Date createdAt;

    private Date updatedAt;
}

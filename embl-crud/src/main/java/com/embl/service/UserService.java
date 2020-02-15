package com.embl.service;

import com.embl.model.User;
import com.embl.model.UserDto;

import java.util.List;

public interface UserService {

	User save(UserDto user);

	List<User> findAll();

	void delete(int id);

	User findById(int id);

	UserDto update(UserDto userDto);
}

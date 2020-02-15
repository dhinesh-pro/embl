package com.embl.service.impl;

import com.embl.dao.UserDao;
import com.embl.model.User;
import com.embl.model.UserDto;
import com.embl.service.UserService;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Transactional
@Service(value = "userService")
public class UserServiceImpl implements UserService {
	
	@Autowired
	private UserDao userDao;

	public List<User> findAll() {
		List<User> list = new ArrayList<>();
		userDao.findAll().iterator().forEachRemaining(list::add);
		return list;
	}

	@Override
	public void delete(int id) {
		userDao.deleteById(id);
	}

	

	@Override
	public User findById(int id) {
		Optional<User> optionalUser = userDao.findById(id);
		return optionalUser.isPresent() ? optionalUser.get() : null;
	}

    @Override
    public UserDto update(UserDto userDto) {
        User user = findById(userDto.getId());
        if(user != null) {
            BeanUtils.copyProperties(userDto, user);
            userDao.save(user);
        }
        return userDto;
    }

    @Override
    public User save(UserDto user) {
	    User newUser = new User();
	    System.out.println("User Service : "+user.getHobbies());
	    newUser.setFirstName(user.getFirstName());
	    newUser.setLastName(user.getLastName());
	    newUser.setFavColor(user.getFavColor());
	    newUser.setHobbies(user.getHobbies());
		newUser.setAge(user.getAge());
        return userDao.save(newUser);
    }
}
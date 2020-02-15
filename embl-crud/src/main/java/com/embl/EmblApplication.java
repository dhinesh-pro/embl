package com.embl;

import java.util.ArrayList;
import java.util.List;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import com.embl.dao.UserDao;
import com.embl.model.User;

@SpringBootApplication
public class EmblApplication {

	public static void main(String[] args) {
		SpringApplication.run(EmblApplication.class, args);
	}

	@Bean
	public CommandLineRunner init(UserDao userDao) {
		return args -> {
			User user1 = new User();
			user1.setFirstName("Dhinesh");
			user1.setLastName("Kumar");
			user1.setFavColor("red");
			user1.setAge(34);
			List<String> hobbies=new ArrayList<>();
			hobbies.add("Swimming");
			user1.setHobbies(hobbies);
			userDao.save(user1);

			User user2 = new User();
			user2.setFirstName("Leela");
			user2.setLastName("Dhinesh");
			user2.setFavColor("blue");
			List<String> hobbies1=new ArrayList<>();
			hobbies1.add("Reading");
			user2.setHobbies(hobbies1);
			user2.setAge(34);

			userDao.save(user2);
		};
	}

}

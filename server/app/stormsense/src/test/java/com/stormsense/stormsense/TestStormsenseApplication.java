package com.stormsense.stormsense;

import org.springframework.boot.SpringApplication;

public class TestStormsenseApplication {

	public static void main(String[] args) {
		SpringApplication.from(StormsenseApplication::main).with(TestcontainersConfiguration.class).run(args);
	}

}

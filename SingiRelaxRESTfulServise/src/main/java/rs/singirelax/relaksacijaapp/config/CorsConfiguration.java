package rs.singirelax.relaksacijaapp.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class CorsConfiguration implements WebMvcConfigurer {

    @Override
    public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/users/**").allowedMethods("GET", "POST", "PUT", "PATCH", "DELETE");
        registry.addMapping("/events/**").allowedMethods("GET", "POST", "PUT", "PATCH", "DELETE");
    }
}






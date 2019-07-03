package rs.singirelax.relaksacijaapp.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.web.servlet.config.annotation.ViewControllerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurationSupport;
import springfox.documentation.builders.PathSelectors;
import springfox.documentation.builders.RequestHandlerSelectors;
import springfox.documentation.builders.ResponseMessageBuilder;
import springfox.documentation.service.ApiInfo;
import springfox.documentation.service.Contact;
import springfox.documentation.service.ResponseMessage;
import springfox.documentation.spi.DocumentationType;
import springfox.documentation.spring.web.plugins.Docket;
import springfox.documentation.swagger2.annotations.EnableSwagger2;

import java.util.Arrays;
import java.util.Collections;
import java.util.List;

@Configuration
@EnableSwagger2
public class SwaggerConfig {

    private List<ResponseMessage> responseMessages = Arrays.asList(
            new ResponseMessageBuilder().code(200).message("OK").build(),
            new ResponseMessageBuilder().code(403).message("Нисте овлашћени да приступите траженом ресурсу.").build(),
            new ResponseMessageBuilder().code(500).message("Догодила се системска грешка").build()
    );

    @Bean
    public Docket api() {
        return new Docket(DocumentationType.SWAGGER_2)
                .select()
                .apis(RequestHandlerSelectors.any())
                .paths(PathSelectors.any())
                .build()
                .apiInfo(apiInfo())
                .useDefaultResponseMessages(false)
                .globalResponseMessage(RequestMethod.GET, responseMessages)
                .globalResponseMessage(RequestMethod.POST, responseMessages);
    }

    private ApiInfo apiInfo() {
        return new ApiInfo(
                "SingiRelax API",
                "Opis SingiRelax API-a.",
                "API 1.0",
                "Terms of service",
                new Contact("Marko Milic", null, "marko.milic.16@sinigmailr.rs"),
                "License of API", "API license URL", Collections.emptyList());
    }

}




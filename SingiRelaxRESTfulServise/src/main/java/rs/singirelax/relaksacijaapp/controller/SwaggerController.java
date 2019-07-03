package rs.singirelax.relaksacijaapp.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/")
public class SwaggerController {
    @GetMapping("/api")
    public String home() {
        return "redirect:/swagger-ui.html";
    }
}

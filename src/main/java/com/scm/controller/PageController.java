package com.scm.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class PageController {
    @RequestMapping("/home")
    public String Home(Model model){
        System.out.println("Home page landing");
        model.addAttribute("name", "Substring");
        model.addAttribute("channel", "YouTube");
        model.addAttribute("repo", "Sanyukta");

        return "home";
    }

    @RequestMapping("/about")
    public String aboutPage(Model model){
        System.out.println("About page");
        return "about";
    }

    @RequestMapping("/services")
    public String servicesPage(Model model){
        System.out.println("Services page");
        return "services";
    }
}

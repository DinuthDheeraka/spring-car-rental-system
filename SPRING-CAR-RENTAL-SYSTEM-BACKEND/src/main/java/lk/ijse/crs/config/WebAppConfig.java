/**
 * @author :  Dinuth Dheeraka
 * Created : 2/18/2023 3:22 PM
 */
package lk.ijse.crs.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.multipart.commons.CommonsMultipartResolver;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;

@Configuration
@EnableWebMvc
@ComponentScan(basePackages = {"lk.ijse.crs.controller"})
public class WebAppConfig {

    public WebAppConfig(){
        System.out.println("CREATED WEB APP CONFIG");
    }

    @Bean
    public CommonsMultipartResolver multipartResolver() {
        CommonsMultipartResolver resolver = new CommonsMultipartResolver();
        resolver.setMaxUploadSize(1000000000);
        return resolver;
    }
}

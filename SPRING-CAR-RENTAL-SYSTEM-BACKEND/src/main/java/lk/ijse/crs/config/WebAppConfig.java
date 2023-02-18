/**
 * @author :  Dinuth Dheeraka
 * Created : 2/18/2023 3:22 PM
 */
package lk.ijse.crs.config;

import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;

@Configuration
@EnableWebMvc
@ComponentScan(basePackages = {"lk.ijse.crs.controller"})
public class WebAppConfig {

    public WebAppConfig(){
        System.out.println("CREATED WEB APP CONFIG");
    }
}

/**
 * @author :  Dinuth Dheeraka
 * Created : 2/18/2023 3:25 PM
 */
package lk.ijse.crs.config;

import org.modelmapper.ModelMapper;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Import;

@Configuration
@Import(JPAConfig.class)
@ComponentScan(basePackages = {"lk.ijse.crs.service"})
public class WebRootConfig {

    public WebRootConfig(){
        System.out.println("CREATED WEB ROOT CONFIG");
    }

    @Bean
    public ModelMapper modelMapper(){
        return new ModelMapper();
    }
}

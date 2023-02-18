/**
 * @author :  Dinuth Dheeraka
 * Created : 2/8/2023 8:44 PM
 */
package lk.ijse.crs.config;

import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;

@Configuration
@EnableWebMvc
@ComponentScan(basePackages = {"lk.ijse.crs.controller"})
public class WebAppConfig {
}

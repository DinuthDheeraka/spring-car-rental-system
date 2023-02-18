/**
 * @author :  Dinuth Dheeraka
 * Created : 2/8/2023 8:44 PM
 */
package lk.ijse.crs.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Import;

@Configuration
@Import(JPAConfig.class)
public class WebRootConfig {
}

/**
 * @author :  Dinuth Dheeraka
 * Created : 2/23/2023 11:20 PM
 */
package lk.ijse.crs.util;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.ArrayList;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class ResponseUtil<T> {
    private String status;
    private String message;
    private ArrayList<T> data;
}

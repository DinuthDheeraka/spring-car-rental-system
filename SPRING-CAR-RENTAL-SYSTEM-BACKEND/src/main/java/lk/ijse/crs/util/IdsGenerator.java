/**
 * @author :  Dinuth Dheeraka
 * Created : 2/25/2023 6:24 AM
 */
package lk.ijse.crs.util;

public class IdsGenerator {

    public static String generateId(String prefix,String lastId){
        System.out.println("last id : "+lastId);
        if(lastId.equals("")){
            return prefix+"0000";
        }
        int nextValue = Integer.parseInt(lastId.replace(prefix,""))+1;
        return String.format(prefix+"%04d",nextValue);
    }
}

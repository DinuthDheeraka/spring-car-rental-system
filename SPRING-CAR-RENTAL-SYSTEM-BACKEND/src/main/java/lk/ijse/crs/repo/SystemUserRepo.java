package lk.ijse.crs.repo;

import lk.ijse.crs.entity.SystemUser;
import org.springframework.data.jpa.repository.JpaRepository;

public interface SystemUserRepo extends JpaRepository<SystemUser,Integer> {
}

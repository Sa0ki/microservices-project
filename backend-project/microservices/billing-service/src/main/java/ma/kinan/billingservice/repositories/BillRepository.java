package ma.kinan.billingservice.repositories;

import ma.kinan.billingservice.models.Bill;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

/**
 * @author Eren
 **/
@RepositoryRestResource
public interface BillRepository extends JpaRepository<Bill, Long> {
}

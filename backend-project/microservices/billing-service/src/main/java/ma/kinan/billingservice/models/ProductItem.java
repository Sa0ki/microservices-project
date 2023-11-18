package ma.kinan.billingservice.models;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

/**
 * @author Eren
 **/
@Entity @Table(name ="product_items")
@Data @AllArgsConstructor @NoArgsConstructor @Builder
public class ProductItem {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private Integer quantityItem;
    private Long productId;
    @Transient
    private Product product;
    @ManyToOne
    private Bill bill;

}

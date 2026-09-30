package com.ecommerce.service;

import com.ecommerce.model.Product;
import com.ecommerce.repository.ProductRepository;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class ProductService {
    private final ProductRepository repository;
    public ProductService(ProductRepository repository) { this.repository = repository; }

    public List<Product> findAll() {
        if (repository.count() == 0) seed();
        return repository.findAll();
    }

    public List<Product> recommend(String category) {
        if (repository.count() == 0) seed();
        return repository.findByCategoryIgnoreCase(category);
    }

    private void seed() {
        repository.saveAll(List.of(
            new Product("Smart Watch Pro", "electronics", 4999, "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600", "Fitness and smart notifications."),
            new Product("Wireless Headphones", "electronics", 2999, "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600", "Immersive wireless audio."),
            new Product("Running Shoes", "fashion", 3499, "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600", "Lightweight everyday running shoes."),
            new Product("Minimal Backpack", "fashion", 1999, "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600", "Water-resistant everyday backpack.")
        ));
    }
}

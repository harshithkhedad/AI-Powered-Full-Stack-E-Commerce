package com.ecommerce.model;

import jakarta.persistence.*;

@Entity
public class Product {
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    private String category;
    private double price;
    private String image;
    private String description;

    public Product() {}
    public Product(String name, String category, double price, String image, String description) {
        this.name=name; this.category=category; this.price=price; this.image=image; this.description=description;
    }
    public Long getId(){return id;}
    public String getName(){return name;}
    public String getCategory(){return category;}
    public double getPrice(){return price;}
    public String getImage(){return image;}
    public String getDescription(){return description;}
    public void setId(Long id){this.id=id;}
    public void setName(String v){this.name=v;}
    public void setCategory(String v){this.category=v;}
    public void setPrice(double v){this.price=v;}
    public void setImage(String v){this.image=v;}
    public void setDescription(String v){this.description=v;}
}

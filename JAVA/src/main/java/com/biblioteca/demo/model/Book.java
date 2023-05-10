package com.biblioteca.demo.model;
import lombok.NoArgsConstructor;

@NoArgsConstructor
public  @Data class Book {
    private String bookId;
    private String title;
    private String description;
    private String author;
}

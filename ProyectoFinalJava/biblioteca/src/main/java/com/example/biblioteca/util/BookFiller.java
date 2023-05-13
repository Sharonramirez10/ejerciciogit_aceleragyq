package com.example.biblioteca.util;

//import java.lang.management.PlatformManagedObject;

import org.springframework.stereotype.Component;

import com.example.biblioteca.Service.BookService;
import com.example.biblioteca.model.Book;

import jakarta.annotation.PostConstruct;

@Component
public class BookFiller {
    private final BookService bookService;
    
    public BookFiller(BookService bookService) {
        this.bookService = bookService;
    }

    @PostConstruct
    public void init()
    {
        Book book1 = new Book ( "oso" , "dia", "profesorluis");
        bookService.addBook(book1);
        try {Thread.sleep(1000);} catch (InterruptedException e) {}
        Book book2 = new Book ( "miel" , "dulce", "profesormarcos");
        bookService.addBook(book2);
        try {Thread.sleep(1000);} catch (InterruptedException e) {}
        Book book3 = new Book ( "pereza" , "psicologia", "profesorMaria");
        bookService.addBook(book3);
    
    
    }
}

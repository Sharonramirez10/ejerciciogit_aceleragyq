package com.biblioteca.demo.repository;

import java.util.List;

import com.biblioteca.demo.model.Book;


public interface IBookRepository {
    public List<Book> getAll();
    public Book get(String bookId);
    public Book save(Book book);
    public Book delete(String bookId);
}

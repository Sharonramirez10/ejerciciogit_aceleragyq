package com.biblioteca.demo.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.biblioteca.demo.model.Book;
import com.biblioteca.demo.repository.IBookRepository;

@Service
public class BookService {
private final IBookRepository bookRepository;

    public BookService(IBookRepository bookRepository) {
        this.bookRepository = bookRepository;
    }
    public List<Book> getAll()
    {
        return bookRepository.getAll();
    }
    public Book get(String bookId)
    {
        return bookRepository.get(bookId);
    }
    public Book addBook(Book book) {
        book.setBookId(bookId:null);
        return bookRepository.save(book);
    }
    public Book apdateBook(String bookid, Book book) {
       Book bookR = bookRepository.get(bookId);
       if (bookR == null){
        return null;
       }
       book.setBookId(bookId);
        return bookRepository.save(book);
    }
    public Book deleteBook(String bookId)
    {
        return bookRepository.delete(bookId);
    }
}

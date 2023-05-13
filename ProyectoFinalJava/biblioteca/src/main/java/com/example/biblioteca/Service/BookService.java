package com.example.biblioteca.Service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.example.biblioteca.model.Book;
import com.example.biblioteca.repository.IBookRepository;

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
    public Book addBook(Book book)
     {
        book.setBookId(null);
        return bookRepository.save(book);
    }
    public Book updateBook(String bookid, Book book) {
        Book bookR = bookRepository.get(bookid);
        if (bookR == null){
         return null;
        }
        book.setBookId(bookid);
         return bookRepository.save(book);
     }
     public Book deleteBook(String bookId)
    {
        return bookRepository.delete(bookId);
    }
}

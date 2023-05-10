package com.biblioteca.demo.Controller;

import com.biblioteca.demo.model.Book;
import com.biblioteca.demo.model.book;
import com.biblioteca.demo.service.BookService;

@RestController
@RequestMapping({"book"})
public class BookController {
    private final BookService bookService;

    public BookController(BookService bookService){
        this.bookService = bookService;
    }

    @GetMapping("")
    public List<Book> getAll()
    {
        return bookService.getAll();
    }
    @GetMapping("/{bookId}")
    public Book get(@PathVariable)
}

using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ViteAspNetCoreTemplateAPI.Converters.Books;
using ViteAspNetCoreTemplateAPI.Dtos.Books;
using ViteAspNetCoreTemplateAPI.Entities.Books;
using ViteAspNetCoreTemplateAPI.Repositories.Books;
using ViteAspNetCoreTemplateAPI.Utils.Id;

namespace ViteAspNetCoreTemplateAPI.Services.Books;

public class BooksService(IBooksRepository repository, IBooksConverter converter) : IBooksService
{
  private readonly IBooksRepository _repository = repository;
  private readonly IBooksConverter _converter = converter;

  public async Task<Book> Create(BookCreateDto dto)
  {
    Book book = _converter.ToEntity(dto);
    return await _repository.Put(book);
  }

  public async Task Delete(Id<Book> id)
  {
    await _repository.Delete(id);
  }

  public async Task<Book> Get(Id<Book> id)
  {
    return await _repository.Get(id);
  }

  public async Task<IEnumerable<Book>> GetAll()
  {
    return await _repository.GetAll();
  }

  public async Task<Book> Patch(Id<Book> id, BookPatchDto dto)
  {
    Book book = await _repository.Get(id);
    Book newBook = _converter.ToEntity(dto, book);
    return await _repository.Put(newBook);
  }

  public async Task<Book> Put(BookPutDto dto)
  {
    Book book = _converter.ToEntity(dto);
    return await _repository.Put(book);
  }
}

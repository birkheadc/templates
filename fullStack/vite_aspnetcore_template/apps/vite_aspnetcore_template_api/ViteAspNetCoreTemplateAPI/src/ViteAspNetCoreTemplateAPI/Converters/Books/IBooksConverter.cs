using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ViteAspNetCoreTemplateAPI.Dtos.Books;
using ViteAspNetCoreTemplateAPI.Entities.Books;

namespace ViteAspNetCoreTemplateAPI.Converters.Books;

public interface IBooksConverter
{
  public Book ToEntity(BookCreateDto dto);
  public Book ToEntity(BookPutDto dto);
  public Book ToEntity(BookPatchDto dto, Book book);
  public BookDto ToDto(Book book);
}

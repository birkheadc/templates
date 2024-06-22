using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ViteAspNetCoreTemplateAPI.Dtos.Books;
using ViteAspNetCoreTemplateAPI.Entities.Books;
using ViteAspNetCoreTemplateAPI.Utils.Id;

namespace ViteAspNetCoreTemplateAPI.Services.Books;

public interface IBooksService
{
  public Task<Book> Get(Id<Book> id);
  public Task<IEnumerable<Book>> GetAll();
  public Task<Book> Create(BookCreateDto dto);
  public Task<Book> Put(BookPutDto dto);
  public Task<Book> Patch(Id<Book> id, BookPatchDto dto);
  public Task Delete(Id<Book> id);
}

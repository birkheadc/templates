using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ViteAspNetCoreTemplateAPI.Dtos.Books;
using ViteAspNetCoreTemplateAPI.Entities.Books;
using ViteAspNetCoreTemplateAPI.Utils.Id;

namespace ViteAspNetCoreTemplateAPI.Repositories.Books;

public interface IBooksRepository
{
  public Task<Book> Get(Id<Book> id);
  public Task<IEnumerable<Book>> GetAll();
  public Task<Book> Put(Book book);
  public Task Delete(Id<Book> id);
}

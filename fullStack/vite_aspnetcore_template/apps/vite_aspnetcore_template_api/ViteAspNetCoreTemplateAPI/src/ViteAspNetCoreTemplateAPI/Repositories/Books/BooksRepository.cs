using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ViteAspNetCoreTemplateAPI.Entities.Books;
using ViteAspNetCoreTemplateAPI.Utils.Id;

namespace ViteAspNetCoreTemplateAPI.Repositories.Books;

public class BooksRepository : IBooksRepository
{
  public Task Delete(Id<Book> id)
  {
    throw new NotImplementedException();
  }

  public Task<Book> Get(Id<Book> id)
  {
    throw new NotImplementedException();
  }

  public Task<IEnumerable<Book>> GetAll()
  {
    throw new NotImplementedException();
  }

  public Task<Book> Put(Book book)
  {
    throw new NotImplementedException();
  }
}

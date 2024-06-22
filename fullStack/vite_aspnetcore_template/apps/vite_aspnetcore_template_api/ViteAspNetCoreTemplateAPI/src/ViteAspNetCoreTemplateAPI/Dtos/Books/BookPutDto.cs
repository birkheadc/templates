using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ViteAspNetCoreTemplateAPI.Entities.Books;
using ViteAspNetCoreTemplateAPI.Utils.Id;

namespace ViteAspNetCoreTemplateAPI.Dtos.Books;

public record BookPutDto
{
  public required Id<Book> Id { get; init; }
  public required string Title { get; init; }
  public required string Author { get; init; }
  public required int Pages { get; init; }
}

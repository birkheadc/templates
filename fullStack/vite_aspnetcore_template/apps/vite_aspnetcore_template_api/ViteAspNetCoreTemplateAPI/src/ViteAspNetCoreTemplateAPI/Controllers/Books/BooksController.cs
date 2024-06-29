using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using ViteAspNetCoreTemplateAPI.Converters.Books;
using ViteAspNetCoreTemplateAPI.Dtos.Books;
using ViteAspNetCoreTemplateAPI.Entities.Books;
using ViteAspNetCoreTemplateAPI.Services.Books;
using ViteAspNetCoreTemplateAPI.Utils.Id;

namespace ViteAspNetCoreTemplateAPI.Controllers.Books;

[ApiController]
[Route("books")]
public class BooksController(IBooksService service, IBooksConverter converter)
{
  private readonly IBooksService _service = service;
  private readonly IBooksConverter _converter = converter;

  [HttpGet]
  public async Task<IEnumerable<BookDto>> GetAll()
  {
    var books = await _service.GetAll();
    return books.Select(_converter.ToDto);
  }

  // [HttpGet]
  // [Route("/{id}")]
  // public async Task<BookDto> Get([FromRoute] Id<Book> id) { }

  // [HttpPost]
  // public async Task<BookDto> Create([FromBody] BookCreateDto dto) { }

  // [HttpPut]
  // public async Task<BookDto> Put([FromBody] BookPutDto dto) { }

  // [HttpPatch]
  // [Route("/{id}")]
  // public async Task<BookDto> Patch([FromRoute] Id<Book> id, [FromBody] BookPatchDto dto) { }

  // [HttpDelete]
  // [Route("/{id}")]
  // public async Task Delete([FromRoute] Id<Book> id) { }
}

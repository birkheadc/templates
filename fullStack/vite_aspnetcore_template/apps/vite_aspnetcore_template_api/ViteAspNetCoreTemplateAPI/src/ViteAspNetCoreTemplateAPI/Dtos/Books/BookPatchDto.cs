using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ViteAspNetCoreTemplateAPI.Dtos.Books;

public record BookPatchDto
{
  public string? Title { get; init; }
  public string? Author { get; init; }
  public int? Pages { get; init; }
}

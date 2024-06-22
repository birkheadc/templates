using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using ViteAspNetCoreTemplateAPI.Dtos.Sums;
using ViteAspNetCoreTemplateAPI.Services.Sums;

namespace ViteAspNetCoreTemplateAPI.Controllers.Sums;

[ApiController]
[Route("sums")]
public class SumsController(ISumsService sumsService) : ControllerBase
{
  private readonly ISumsService _sumsService = sumsService;

  [HttpPost]
  public async Task<int> Sum([FromBody] SumCreateDto dto)
  {
    return await _sumsService.Sum(dto);
  }
}

using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using ViteAspNetCoreTemplateAPI.Services.Sums;

namespace ViteAspNetCoreTemplateAPI.Controllers.Sums;

[ApiController]
[Route("sums")]
public class SumsController(SumsService sumsService) : ControllerBase
{
  private readonly SumsService _sumsService = sumsService;

  [HttpPost]
  public async Task<int> Sum([FromBody] int[] values)
  {
    return await _sumsService.Sum(values);
  }
}

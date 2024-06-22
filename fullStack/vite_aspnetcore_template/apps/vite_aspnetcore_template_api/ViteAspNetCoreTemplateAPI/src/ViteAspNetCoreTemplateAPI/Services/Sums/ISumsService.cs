using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ViteAspNetCoreTemplateAPI.Dtos.Sums;

namespace ViteAspNetCoreTemplateAPI.Services.Sums;

public interface ISumsService
{
  public Task<int> Sum(SumCreateDto dto);
}

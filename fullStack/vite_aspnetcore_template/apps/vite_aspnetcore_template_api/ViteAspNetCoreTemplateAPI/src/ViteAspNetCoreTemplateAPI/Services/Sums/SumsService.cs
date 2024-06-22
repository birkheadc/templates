using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ViteAspNetCoreTemplateAPI.Dtos.Sums;

namespace ViteAspNetCoreTemplateAPI.Services.Sums;

public class SumsService : ISumsService
{
  public async Task<int> Sum(SumCreateDto dto)
  {
    int sum = 0;

    foreach (int n in dto.Values)
    {
      sum += n;
    }

    return await Task.Run(() => sum);
  }
}

using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ViteAspNetCoreTemplateAPI.Services.Sums;

public class SumsService : ISumsService
{
  public async Task<int> Sum(int[] values)
  {
    int sum = 0;

    foreach (int n in values)
    {
      sum += n;
    }

    return await Task.Run(() => sum);
  }
}

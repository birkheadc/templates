using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ViteAspNetCoreTemplateAPI.Services.Sums;

public interface ISumsService
{
  public Task<int> Sum(int[] values);
}

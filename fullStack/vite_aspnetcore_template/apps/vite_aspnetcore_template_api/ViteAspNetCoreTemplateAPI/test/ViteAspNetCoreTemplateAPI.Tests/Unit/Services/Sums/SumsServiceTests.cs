using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ViteAspNetCoreTemplateAPI.Services.Sums;
using Xunit;

namespace ViteAspNetCoreTemplateAPI.Tests.Unit.Services.Sums;

public class SumsServiceTests
{
  [Theory]
  [InlineData(new int[] { 0, 1, 2 }, 3)]
  [InlineData(new int[] { 100, 60, 1 }, 161)]
  [InlineData(new int[] { 0, 0, 0, 0, 0, 0, 1 }, 1)]
  public async void Sum_ReturnsSumOfAllValues(int[] values, int expected)
  {
    SumsService service = new();

    int actual = await service.Sum(values);

    Assert.Equal(expected, actual);
  }
}

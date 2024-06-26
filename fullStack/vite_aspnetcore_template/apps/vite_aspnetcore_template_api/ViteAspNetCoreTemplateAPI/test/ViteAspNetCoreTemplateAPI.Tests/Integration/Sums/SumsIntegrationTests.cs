using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc.Testing;
using Newtonsoft.Json;
using ViteAspNetCoreTemplateAPI.Dtos.Sums;
using Xunit;

namespace ViteAspNetCoreTemplateAPI.Tests.Integration.Sums;

public class SumsIntegrationTests(WebApplicationFactory<Program> factory)
  : IClassFixture<WebApplicationFactory<Program>>
{
  private readonly IntegrationTestsClientFactory _factory = new(factory);

  [Theory, MemberData(nameof(Post_ReturnsCorrectSum_Data))]
  public async Task Post_ReturnsCorrectSum(SumCreateDto dto, int expected)
  {
    var client = _factory.CreateClient();
    string uri = "/sums";

    var response = await client.PostAsJsonAsync(uri, dto);
    response?.EnsureSuccessStatusCode();

    var content = response?.Content.ReadAsStringAsync().Result;
    var actual = JsonConvert.DeserializeObject<int>(content);

    Assert.Equal(expected, actual);
  }

  public static IEnumerable<object[]> Post_ReturnsCorrectSum_Data()
  {
    return
    [
      [new SumCreateDto() { Values = [0, 1, 2, 0] }, 3],
      [new SumCreateDto() { Values = [100, 60, 1000, 1] }, 1161],
      [new SumCreateDto() { Values = [0, 0, 0, 0, 0, 0, 0] }, 0]
    ];
  }
}

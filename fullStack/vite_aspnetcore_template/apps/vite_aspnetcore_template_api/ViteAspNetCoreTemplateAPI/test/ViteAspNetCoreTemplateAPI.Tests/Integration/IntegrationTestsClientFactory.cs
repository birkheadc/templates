using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc.Testing;
using Microsoft.AspNetCore.TestHost;

namespace ViteAspNetCoreTemplateAPI.Tests.Integration;

public class IntegrationTestsClientFactory(WebApplicationFactory<Program> factory)
{
  private readonly WebApplicationFactory<Program> _factory = factory.WithWebHostBuilder(builder =>
  {
    builder.ConfigureTestServices(services =>
    {
      //Populate with mock services, like database
    });
  });

  public HttpClient CreateClient()
  {
    return _factory.CreateClient();
  }

  public HttpClient CreateClient(WebApplicationFactoryClientOptions options)
  {
    return _factory.CreateClient(options);
  }
}

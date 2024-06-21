using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using ViteAspNetCoreTemplateAPI.Controllers.Root;
using Xunit;

namespace ViteAspNetCoreTemplateAPI.Tests.Unit.Controllers.Root
{
  public class RootControllerTests
  {
    [Fact]
    public async void Get_ReturnsGreeting()
    {
      RootController controller = new();

      const string GREETING = "You have reached Colby's Vite ASP.NET Core Template API.";
      string expected = GREETING;

      string actual = await controller.Get();

      Assert.Equal(expected, actual);
    }
  }
}
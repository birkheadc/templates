using Microsoft.AspNetCore.Mvc;

namespace ViteAspNetCoreTemplateAPI.Controllers.Root;

[ApiController]
[Route("")]
public class RootController : ControllerBase
{
  [HttpGet]
  public async Task<string> Get()
  {
    return await Task.Run(() => "You have reached Colby's Vite ASP.NET Core Template API.");
  }
}
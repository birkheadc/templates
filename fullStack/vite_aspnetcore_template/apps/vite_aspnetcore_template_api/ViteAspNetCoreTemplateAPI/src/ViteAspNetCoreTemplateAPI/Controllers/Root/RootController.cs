using Microsoft.AspNetCore.Mvc;

namespace ViteAspNetCoreTemplateAPI.Controllers.Root;

[Route("")]
public class RootController : ControllerBase
{
  [HttpGet]
  public async Task<ActionResult<string>> Get()
  {
    return await Task.Run(() => "You have reached Colby's Vite ASP.NET Core Template API.");
  }
}

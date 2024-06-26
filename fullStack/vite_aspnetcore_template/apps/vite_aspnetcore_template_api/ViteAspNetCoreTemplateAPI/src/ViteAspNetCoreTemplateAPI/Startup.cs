﻿using ViteAspNetCoreTemplateAPI.Converters.Books;
using ViteAspNetCoreTemplateAPI.Repositories.Books;
using ViteAspNetCoreTemplateAPI.Services.Books;
using ViteAspNetCoreTemplateAPI.Services.Sums;

namespace ViteAspNetCoreTemplateAPI;

public class Startup
{
  public Startup(IConfiguration configuration)
  {
    Configuration = configuration;
  }

  public IConfiguration Configuration { get; }

  // This method gets called by the runtime. Use this method to add services to the container
  public void ConfigureServices(IServiceCollection services)
  {
    services.AddScoped<ISumsService, SumsService>();

    services.AddScoped<IBooksService, BooksService>();
    services.AddScoped<IBooksRepository, BooksRepository>();
    services.AddScoped<IBooksConverter, BooksConverter>();

    services.AddControllers();
  }

  // This method gets called by the runtime. Use this method to configure the HTTP request pipeline
  public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
  {
    if (env.IsDevelopment())
    {
      app.UseDeveloperExceptionPage();
    }

    if (!env.IsDevelopment())
    {
      app.UseHttpsRedirection();
    }

    app.UseRouting();

    app.UseAuthorization();

    app.UseEndpoints(endpoints =>
    {
      endpoints.MapControllers();
    });
  }
}

public partial class Program { }

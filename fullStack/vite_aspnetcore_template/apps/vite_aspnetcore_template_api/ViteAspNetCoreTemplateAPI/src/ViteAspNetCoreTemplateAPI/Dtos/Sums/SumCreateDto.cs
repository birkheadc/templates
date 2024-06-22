namespace ViteAspNetCoreTemplateAPI.Dtos.Sums
{
  public record SumCreateDto
  {
    public required int[] Values { get; set; }
  }
}

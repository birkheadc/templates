using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ViteAspNetCoreTemplateAPI.Utils.Id;

public readonly struct Id<T>
{
  private readonly Guid _value;

  public Id()
  {
    _value = Guid.NewGuid();
  }

  public Id(string value)
  {
    var val = Guid.Parse(value);
    CheckValue(val);
    _value = val;
  }

  public Id(Guid value)
  {
    CheckValue(value);
    _value = value;
  }

  private static void CheckValue(Guid value)
  {
    if (value == Guid.Empty)
      throw new ArgumentException("Guid value cannot be empty", nameof(value));
  }

  public override string ToString()
  {
    return _value.ToString();
  }
}

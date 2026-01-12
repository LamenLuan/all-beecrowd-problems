using System;
using System.Collections.Generic;
using System.IO;

public class Beecrowd
{
  public static void Main()
  {
    var results = GetResult(Console.In);
    var resultString = string.Join("\n", results);
    Console.WriteLine(resultString);
  }

  public static IList<string> GetResult(TextReader input)
  {
    var lines = input.ReadToEnd().TrimEnd().Split('\n');
    var results = new List<string>();
    var charsToTrim = new char[] { '\r' };

    for (int i = 0; i < lines.Length;)
    {
      int.TryParse(lines[i], out var testCases);
      var maxIndex = i + testCases;

      for (i++; i <= maxIndex; i++)
      {
        var groups = lines[i].Split(' ');
        var dotAmount = groups[0].TrimEnd(charsToTrim).Length;
        var charIndex = ((groups.Length - 1) * 3) + dotAmount - 1;
        var letter = (char)('a' + charIndex);
        results.Add(letter.ToString());
      }
    }

    return results;
  }
}
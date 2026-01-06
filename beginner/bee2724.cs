using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;

public class Beecrowd
{
  public static void Main()
  {
    var results = GetResult(Console.In);
    var resultString = string.Join("\n", results);
    Console.WriteLine(resultString);
  }

  public static string[] GetTestResponses(string[] elements, string[] dangerousCompounds)
  {
    var responses = new string[elements.Length];
    for (int i = 0; i < elements.Length; i++)
    {
      var element = elements[i];
      var compoundFound = false;
      for (int j = 0; j < dangerousCompounds.Length; j++)
      {
        var compound = dangerousCompounds[j];
        if (compound.Length > element.Length) continue;

        var compoundIdx = element.IndexOf(compound);
        if (compoundIdx.Equals(-1)) continue;

        var idxAfterCompound = compoundIdx + compound.Length;
        if (element.Length.Equals(compound.Length) || element.Length.Equals(idxAfterCompound))
        {
          compoundFound = true;
          break;
        }

        var letterAfterCompound = element
          .Skip(idxAfterCompound)
          .First();

        if (char.IsUpper(letterAfterCompound))
        {
          compoundFound = true;
          break;
        }
      }

      responses[i] = compoundFound
        ? "Abortar"
        : "Prossiga";
    }

    return responses;
  }


  public static IList<string> GetResult(TextReader input)
  {
    var lines = input.ReadToEnd().Split('\n');
    var testsAmount = int.Parse(lines[0]);

    var startingIndex = 1;
    var testResponses = new List<string>();
    for (int i = 0; i < testsAmount; i++)
    {
      if (i > 0) testResponses.Add("");

      var testLines = lines.Skip(startingIndex).ToArray();
      var dangerousCompsAmount = int.Parse(testLines[0]);

      var dangerousCompounds = testLines
        .Skip(1)
        .Take(dangerousCompsAmount)
        .ToArray();

      var elementsAmount = int.Parse(testLines[dangerousCompsAmount + 1]);

      var elements = testLines
        .Skip(dangerousCompsAmount + 2)
        .Take(elementsAmount)
        .ToArray();

      var responses = GetTestResponses(elements, dangerousCompounds);
      testResponses.AddRange(responses);
      startingIndex += dangerousCompsAmount + elementsAmount + 2;
    }

    return testResponses;
  }
}
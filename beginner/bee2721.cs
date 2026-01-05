using System;
using System.IO;
using System.Linq;

public class URI
{
  static void Main()
  {
    var result = GetResult(Console.In);
    Console.WriteLine(result);
  }

  public static string GetResult(TextReader input)
  {
    var reinDeers = new string[]
    {
          "Dasher",
          "Dancer",
          "Prancer",
          "Vixen",
          "Comet",
          "Cupid",
          "Donner",
          "Blitzen",
          "Rudolph"
    };

    var sum = 0;

    var snowBalls = input.ReadLine()
      .Split(' ')
      .Select(int.Parse)
      .ToArray();

    for (int i = 0; i < snowBalls.Length; i++)
      sum += snowBalls[i];

    var module = sum % reinDeers.Length;
    if (module == 0) module = reinDeers.Length;
    var winner = reinDeers[module - 1];

    return winner;
  }
}
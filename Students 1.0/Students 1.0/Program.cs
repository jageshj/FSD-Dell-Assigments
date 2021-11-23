using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.IO;

namespace Students_1._0
{
	class Program
	{
		static void Main()
		{
			runApp();
		}
		public static void runApp()
		{
			//string fileName = @"Files_Q3.txt";
		
			StreamReader sr = new StreamReader(@"C:\\FSD\\Files\\Students.txt");
			string i = sr.ReadToEnd().ToString();

			string[] lines = i.Split('\n');

            Console.WriteLine("Before Sorting");
            Console.WriteLine("===============================");
			foreach (string s in lines)
			{
				Console.WriteLine(s);
			}
			Console.WriteLine("===============================");
			
			Array.Sort(lines);
			Console.WriteLine("After Sorting");
			Console.WriteLine("===============================");
			foreach (string s in lines)
            {
                Console.WriteLine(s);
            }

			//Console.WriteLine(i);
		// string[] filedata = new string[i];

// var lines = sr.ReadLine();
//foreach (string s in lines.ToString()) 
//          {
// Console.WriteLine();
//       }



		}
	}
}

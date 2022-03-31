using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.IO;

namespace FSD.Net__Submissions
{
    class CreateFile
    {
        public string Createfile() 
        { 
        string foldername = null;
            string filename = null;

            Console.WriteLine("Enter Folder to create File");
            foldername = Console.ReadLine();
            Console.WriteLine("Enter File Name");
            filename = Console.ReadLine();
            Console.WriteLine(foldername);
            string Fullfilename = foldername + filename;
            Console.WriteLine(Fullfilename);
            StreamWriter sw = new StreamWriter(Fullfilename);
                sw.Close();
            return Fullfilename;
           }

        public string findfile()
        {

            string foldername = null;
            string filename = null;

            Console.WriteLine("Enter Folder to create File");
            foldername = Console.ReadLine();
            Console.WriteLine("Enter File Name");
            filename = Console.ReadLine();
            Console.WriteLine(foldername);
            string Fullfilename = foldername + filename;
             return Fullfilename;

        }
    }
}

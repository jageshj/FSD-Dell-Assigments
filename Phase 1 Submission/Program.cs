using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;

namespace FSD.Net__Submissions
{
    class Program
    {
        static void Main(string[] args)
        {
            string file = null;
            CreateFile cf = new CreateFile();
            Console.WriteLine("Welcome to MySchool");
            Console.WriteLine("\n");
            case1: Console.WriteLine("Type 1 to create the file.\r\n Type 2 to Add new Record.\r\n Type 3 to update the record\r\n Type 4 to Exit");
            string Ans = Console.ReadLine();
            if (Ans == "1")
            {
                file = cf.Createfile();
            }


            if (Ans == "2")
            {
                file = cf.findfile();
                AddTeacherData(file);
            }

            if (Ans == "3")
            {
                file = cf.findfile();
                Console.WriteLine("Enter ID to update");
                int row = int.Parse(Console.ReadLine());
                Console.WriteLine("Enter Column to update. Select from {Name, Subject, Classs, Section}");
                string column = Console.ReadLine();
                Console.WriteLine("Enter Value to update");
                string value = Console.ReadLine();

                updateTeacherData(file,row,column,value);
            }


            if (Ans == "4")
            {
                Console.WriteLine("Thank you! See you soon");
            }
            else
            {
                goto case1;
            }
        }


        public static void AddTeacherData(string filename)
        {
            var stafflist = new List<Teacher>();
            bool anotherUser = true;
            while (anotherUser)
            {

                Console.Write("ID: ");
                int ID = int.Parse(Console.ReadLine());

                Console.Write("Name: ");
                string Name = Console.ReadLine();

                Console.Write("Subject: ");
                string Subject = Console.ReadLine();

                Console.Write("Class: ");
                string Class = Console.ReadLine();

                Console.Write("Section: ");
                string Section = Console.ReadLine();

                stafflist.Add(new Teacher(ID, Name, Subject, Class, Section));
                Console.WriteLine("Do you want to add another user (type Y for yes)?");
                string next = Console.ReadLine();
                anotherUser = (next == "Y");

            }



            //stafflist.Add(new Teacher(2, "Mary", "Hindi", "3", "A"));
            //stafflist.Add(new Teacher(3, "Jim", "Social", "3", "A"));
            //stafflist.Add(new Teacher(4, "Ramesh", "Language Art", "2", "A"));
            //stafflist.Add(new Teacher(5, "Amit", "Math", "2", "A"));
            //stafflist.Add(new Teacher(6, "Aditi", "Sankrit", "1", "A"));

            //string[][] staff;


           
                //  File.WriteAllText(filename,stafflist.ToString());
                for (int i = 0; i < stafflist.Count; i++)
                {
                    string rows = stafflist[i].ID.ToString() + " " + stafflist[i].Name.ToString() + " " + stafflist[i].Subject.ToString() + " " + stafflist[i].Classs.ToString() + " " + stafflist[i].Section.ToString();
                    File.AppendAllLines(filename, new[] { rows });

                }

            
        }

        public static void updateTeacherData(string filename,int row,string column, string value)
        {
            List<Teacher> stafflist = new List<Teacher>();
            //StreamReader sr = new StreamReader(filename);
            string[] sr = File.ReadAllLines(filename).ToArray();
            //string line = "";
            for (int i = 0; i < sr.Length ; i++)
            {
                string[] words = sr[i].Split(' ');
                Teacher Tch = new Teacher();
                Tch.ID = int.Parse(words[0]);
                Tch.Name = words[1];
                Tch.Subject = words[2];
                Tch.Classs = words[3];
                Tch.Section = words[4];
                

                if (Tch.ID == row)
                {
                    if (column == "Name")
                        Tch.Name = value;
                    if (column == "Classs")
                        Tch.Classs = value;
                    if (column == "Subject")
                        Tch.Subject = value;
                    if (column == "Section")
                        Tch.Section = value;
                }

                //     sr.Close();

                if (i == 0)
                {
                    string rows = Tch.ID.ToString() + " " + Tch.Name.ToString() + " " + Tch.Subject.ToString() + " " + Tch.Classs.ToString() + " " + Tch.Section.ToString();
                    File.WriteAllLines(filename, new[] { rows });
                }
                else
                {
                    string rows = Tch.ID.ToString() + " " + Tch.Name.ToString() + " " + Tch.Subject.ToString() + " " + Tch.Classs.ToString() + " " + Tch.Section.ToString();
                    File.AppendAllLines(filename, new[] { rows });
                }

            }
                
                

            }
        
    }
}